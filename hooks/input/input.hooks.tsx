import React, {useMemo, useRef, useState} from "react"
import {useRouter} from "next/router"
import {Inputs, InputObj, InputsObj, UseInput, ValidationInput, ValidationInputs} from "./input.types"
import {Locale} from "../../redux/main/main.types"
import {values} from "lodash";

export const usePlainInput = <T extends { [prop: string]: string | boolean | number }, >(inputs: T):
    [values: T, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void, setValues: (values: T) => void] => {

    const [values, setValues] = useState(inputs)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }
    return [values, handleChange, setValues]
}

export const useInput : UseInput = (inputsObj)=> {

    type T = typeof inputsObj

    const initInputs = useMemo(() => {
       return Object.entries(inputsObj).reduce((accum, [key, obj]) => {
           const tkey = key as keyof typeof accum.values & keyof typeof accum.errors
           accum.values[tkey] = obj.value
           accum.errors[tkey] = obj.error ?? null
           if (obj.validations) accum.validations[tkey] = obj.validations
           return accum
       }, {validations: {}, values: {}, errors: {}} as ValidationInputs<keyof T>)
    }, [])

    const [values, setValues] = useState(initInputs.values)
    const [errors, setErrors] = useState(initInputs.errors)
    const {validations} = initInputs

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setValues({...values, [name] : value})
    }

    const resetValues = () => {
        setValues(initInputs.values)
    }

    const locale = useRouter().locale as Locale
    // const initErrRef = Object.entries(errors).reduce((accum ,[key, value]) => {
    //     const tkey = key as keyof typeof errors
    //     accum[tkey] = !!value
    //     return accum
    // }, {} as Record<keyof typeof errors, boolean>)
    const errRef = useRef({errors, count: 0})

    const handleValidate = (name: string | keyof typeof errors) => {
        const error = validate({value: values[name], validations: validations[name]}, locale)

        if (errRef.current.errors[name] && !error) errRef.current.count -= 1
        if (!errRef.current.errors[name] && error) errRef.current.count += 1

        errRef.current.errors[name] = error
        setErrors({...errRef.current.errors, [name]: error})
    }

    const setInputs = () => {}

    return {inputs:{values, errors}, handleChange, handleValidate, resetValues, errRef, setInputs}
}

export const validate = <T extends ValidationInput, >(input: T, locale: Locale) => {
    const validations = input.validations
    const value = input.value as string
    const length = value.length
    const errors: string[] = []

    for (let validation in validations) {
        let validationValue = validations[validation]
        switch (validation) {
            case ('required'): {
                if (!value) errors.push({
                    ua: 'Поле є обов\'язковим для заповнення.',
                    eng: 'This Field is required.',
                    ru: 'Поле обязательно для заполнения.'
                }[locale])
                break
            }
            case ('isEmail') : {
                if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) errors.push({
                    ua: 'Введіть вірний email',
                    eng: 'Enter a valid email',
                    ru: 'Введите правильный email'
                }[locale])
                break
            }
            case ('isPhone') : {
                if (/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(value)) errors.push({
                    ua: 'Введіть вірний номер.',
                    eng: 'Enter a valid number.',
                    ru: 'Введите правильный номер.'
                }[locale])
                break
            }
            case ('minLength') : {
                validationValue = validationValue as number
                const end = symbol(validationValue, locale)
                if (length<validationValue) errors.push({
                    ua: `Довжина поля мусить бути більшой за ${validationValue} символ${end}`,
                    eng: `The field length must be greater than ${validationValue} symbol${end}`,
                    ru: `Длина поля должна быть больше чем ${validationValue} символ${end}`
                }[locale])
                break
            }
            case ('maxLength') : {
                validationValue = validationValue as number
                const end = symbol(validationValue, locale)
                if (length>validationValue) errors.push({
                    ua: `Довжина поля мусить бути меншою за ${validationValue} символ${end}`,
                    eng: `The field length must be less than ${validationValue} symbol${end}`,
                    ru: `Длина поля должна быть більшою чем ${validationValue} символ${end}`
                }[locale])
            }
        }
    }
    return errors.join('\n') ?? null
}

const symbol = (number: number, locale: Locale) =>{
    const lastChar = number % 10

    if (locale==='eng') {
        if (lastChar === 1) return ''
        else return 's'
    }
    if (number>10 && number<20) {
        if (locale ==='ua') return 'ів'
        else return 'ов'
    }
    if (lastChar === 1) return ''
    if (lastChar === 2 || lastChar === 3 || lastChar === 4) {
        if (locale === 'ua') return 'и'
        else return 'а'
    }
    if (locale === 'ru') return 'ов'
    else return 'ів'
}
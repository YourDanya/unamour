import React, {useState} from "react";
import {useRouter} from "next/router";
import {InputType, InputTypes, LocaleType} from "../types/types";
import {useLocale} from "./event-handler.hooks";

export const usePlainInput = <T extends { [prop: string]: string | boolean | number }, >(inputs: T):
    [values: T, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void] => {

    const [values, setValues] = useState(inputs)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setValues({...values, [name]: value})
    }
    return [values, handleChange]
}

export const useInput = <T extends InputTypes, >(initInputs: T):
    [inputs: T, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleValidate: (event: any) => void, handleValidateAll: (event: React.MouseEvent) => void] => {

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setInputs({...inputs, [name]: {...inputs[name],value}})
    }

    const locale = useRouter().locale as LocaleType

    const handleValidate = (event: any) => {
        const {name} = event.target as HTMLButtonElement
        const error = validate(inputs[name], locale)
        setInputs({...inputs, [name]: {...inputs[name], error}})
    }

    const handleValidateAll = (event: React.MouseEvent) => {
        const {name} = event.target as HTMLButtonElement
        let newInputs: T = {} as T
        for (let input in inputs) {
            const error = validate(inputs[name], locale)
            newInputs[input] = {...inputs[input], error}
        }
        setInputs(newInputs)
    }

    return [inputs, handleChange, handleValidate, handleValidateAll]
}

export const validate = <T extends InputType, >(input: T, locale: LocaleType) => {
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
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) errors.push({
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
    return errors.join('\n')
}

const symbol = (number: number, locale: LocaleType) =>{
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
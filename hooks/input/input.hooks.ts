import React, {useMemo, useRef, useState} from 'react'
import {Locale} from 'redux/main/main.types'
import {UseInput} from 'hooks/input/input.types'
import {ValidationInput} from 'hooks/input/input.types'
import {ValidationInputs} from 'hooks/input/input.types'
import {TranslInputs} from 'hooks/input/input.types'
import {useRouter} from 'next/router'
import {useCallback} from 'react'
import {Mapped} from 'types/types'
import {Entry} from 'types/types'

export const useInput: UseInput = (inputsObj, translInputs) => {
    type T = typeof inputsObj

    const initInputs = useMemo(() => {
        return Object.entries(inputsObj).reduce((accum, [key, obj]) => {
            const tkey = key as keyof typeof accum.values & keyof typeof accum.errors
            accum.values[tkey] = obj.value
            accum.errors[tkey] = obj.error ?? null
            if (obj.validations) accum.validations[tkey] = obj.validations
            return accum
        }, <ValidationInputs<keyof T>> {validations: {}, values: {}, errors: {}})
    }, [])

    const [values, setValues] = useState(initInputs.values)
    const [errors, setErrors] = useState(initInputs.errors)
    const {validations} = initInputs

    const valRef = useRef({...values})

    const onChange = useCallback((event: React.ChangeEvent<HTMLElement>) => {
        const {name, value, type} = event.target as HTMLInputElement & { name: keyof T }
        switch (type) {
            case 'checkbox': {
                valRef.current[name] = !valRef.current[name]
                setValues({...valRef.current})
                break
            }
            case 'text' :
            case 'password' :
            case 'textarea' :
            case 'radio' : {
                valRef.current[name] = value
                setValues({...valRef.current})
                break
            }
        }
    }, [])

    const resetValues = useCallback(() => {
        valRef.current = {...initInputs.values}
        setValues({...initInputs.values})
    }, [])

    const locale = useRouter().locale as Locale
    const errRef = useRef({errors: {...errors}, count: 0})

    const getError = useCallback((name: keyof T & string) => {
        let validateValues
        let validateTransl
        if (validations?.[name]?.equalToField) {
            validateValues = valRef.current
            validateTransl = translInputs
        }
        return validate({
                value: valRef.current[name],
                name,
                validations: validations[name],
                values: validateValues,
                translInputs: validateTransl
            }, locale
        )
    }, [])

    const setReqErrors = useCallback(() => {
        Object.keys(errors).forEach((name: keyof T & string) => {
            if (!errRef.current.errors[name] && validations?.[name]?.required) {
                const error = getError(name)
                if (error) {
                    errRef.current.errors[name] = error
                    errRef.current.count += 1
                }
            }
        })
        setErrors(errRef.current.errors)
    }, [])

    const withSubmit = useCallback((callback: () => void) => {
        return (event: React.MouseEvent<HTMLElement>) => {
            event.preventDefault()
            if (errRef.current.count === 0) setReqErrors()
            if (errRef.current.count === 0) {
                callback()
            }
        }
    }, [])

    const onValidate = useCallback((name: string & keyof T) => {
        const error = getError(name)
        if (errRef.current.errors[name] && !error) errRef.current.count -= 1
        if (!errRef.current.errors[name] && error) errRef.current.count += 1
        errRef.current.errors[name] = error
        setErrors({...errRef.current.errors, [name]: error})
    }, [])

    const setOuterValues = useCallback((values: Partial<typeof initInputs.values>) => {
        const filteredValues = Object.entries(values).reduce((accum, entry) => {
            const [key, value] = <Entry<typeof initInputs.values>> entry
            if (key in initInputs.values) {
                accum[key] = value
            }
            return accum
        }, <typeof initInputs.values> {})
        valRef.current = {...valRef.current, ...filteredValues}
        setValues({...valRef.current})
    }, [])

    const setOuterErrors = useCallback((errors: Mapped<typeof initInputs.errors>) => {
        const filteredValues = Object.entries(errors).reduce((accum, entry) => {
            const [key, value] = <Entry<typeof initInputs.errors>> entry
            if (key in initInputs.errors) {
                accum[key] = value
            }
            return accum
        }, <typeof initInputs.errors> {})
        errRef.current.errors = {...errRef.current.errors, ...filteredValues}
        setErrors({...errRef.current.errors})
    }, [])

    return {inputs: {values, errors}, onChange, onValidate, resetValues, errRef, setReqErrors, withSubmit,
    setOuterValues, setOuterErrors}
}

export const validate = <T extends ValidationInput, >(input: T, locale: Locale) => {
    const value = input.value as string
    const {validations, values, name, translInputs} = input
    const length = value.length
    const errors: string[] = []

    loop: for (let validation in validations) {
        let valValue = validations[validation]
        switch (validation) {
            case ('required'): {
                if (!value) {
                    errors.push({
                        ua: 'Поле є обов\'язковим для заповнення.',
                        eng: 'This Field is required.',
                        ru: 'Поле обязательно для заполнения.'
                    }[locale])
                    break loop
                }
                break
            }
            case ('isEmail') : {
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) errors.push({
                    ua: 'Введіть вірний email.',
                    eng: 'Enter a valid email.',
                    ru: 'Введите правильный email.'
                }[locale])
                break
            }
            case ('isNumber') : {
                if (!/^\d+(\.\d{1,2})?$/.test(value)) errors.push({
                    ua: 'Введіть число.',
                    eng: 'Enter a number.',
                    ru: 'Введите число.'
                }[locale])
                break
            }
            case ('isPhone') : {
                if (!/\(?(\d{3})\)?([ .-]?)(\d{3})\2(\d{4})/.test(value)) errors.push({
                    ua: 'Введіть вірний номер.',
                    eng: 'Enter a valid number.',
                    ru: 'Введите правильный номер.'
                }[locale])
                break
            }
            case ('equalToField') : {
                valValue = valValue as string
                const transl = translInputs as TranslInputs
                if (value !== values?.[valValue]) errors.push({
                    ua: `${transl[name]} і ${transl[valValue].toLowerCase()} не співпадають.`,
                    eng: `${transl[name]} and ${transl[valValue].toLowerCase()} do not match.`,
                    ru: `${transl[name]} и ${transl[valValue].toLowerCase()} не совпадают.`
                }[locale])
                break
            }
            case ('minLength') : {
                valValue = valValue as number
                const end = symbol(valValue, locale)
                if (length < valValue) errors.push({
                    ua: `Довжина поля мусить бути більшой за ${valValue} символ${end}.`,
                    eng: `The field length must be greater than ${valValue} symbol${end}.`,
                    ru: `Длина поля должна быть больше чем ${valValue} символ${end}.`
                }[locale])
                break
            }
            case ('maxLength') : {
                valValue = valValue as number
                const end = symbol(valValue, locale)
                if (length > valValue) errors.push({
                    ua: `Довжина поля мусить бути меншою за ${valValue} символ${end}.`,
                    eng: `The field length must be less than ${valValue} symbol${end}.`,
                    ru: `Длина поля должна быть більшою чем ${valValue} символ${end}.`
                }[locale])
            }
        }
    }
    return errors.join('\n') ?? null
}

const symbol = (number: number, locale: Locale) => {
    const lastChar = number % 10

    if (locale === 'eng') {
        if (lastChar === 1) return ''
        else return 's'
    }
    if (number > 10 && number < 20) {
        if (locale === 'ua') return 'ів'
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
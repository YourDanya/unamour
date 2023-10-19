import React, {useMemo, useRef, useState} from 'react'
import {useCallback} from 'react'
import {ChangeEvent} from 'react'
import {UseInput} from 'app/_common/hooks/input/input.types'
import {TranslInputs} from 'app/_common/hooks/input/input.types'
import {ValidationInput} from 'app/_common/hooks/input/input.types'
import {ValidationInputs} from 'app/_common/hooks/input/input.types'
import {Value} from 'app/_common/hooks/input/input.types'
import {Locale} from 'app/_common/types/types'
import {Entry} from 'app/_common/types/types'
import {Mapped} from 'app/_common/types/types'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import {useParams} from 'next/navigation'

export const useInput: UseInput = (inputsObj, translInputs) => {
    type T = typeof inputsObj

    const initInputs = useMemo(() => {
        return Object.entries(inputsObj).reduce((accum, [key, obj]) => {
            const tkey = key as keyof typeof accum.values & keyof typeof accum.errors
            accum.values[tkey] = obj.value as Value
            accum.errors[tkey] = obj.error ?? null
            if (obj.validations) accum.validations[tkey] = obj.validations
            return accum
        }, <ValidationInputs<keyof T>>{validations: {}, values: {}, errors: {}})
    }, [])

    const [values, setValues] = useState(initInputs.values)
    const [errors, setErrors] = useState(initInputs.errors)
    const {validations} = initInputs

    const valRef = useRef({...values})

    const onChange = useCallback((event: ChangeEvent<HTMLElement>) => {
        const {name, value, type} = event.target as HTMLInputElement & { name: keyof T }
        if (type === 'checkbox') {
            valRef.current[name] = !valRef.current[name]
        } else {
            valRef.current[name] = value
        }
        setValues({...valRef.current})
    }, [])

    const resetValues = useCallback(() => {
        valRef.current = {...initInputs.values}
        setValues({...initInputs.values})
    }, [])

    const locale = useParams().locale as Locale
    const errRef = useRef({errors: {...errors}, count: 0})

    const getError = useCallback((name: keyof T) => {
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
        getKeys(errors).forEach((name) => {
            if (!errRef.current.errors[name] && validations?.[name]?.required) {
                const error = getError(name as string)
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
            if (errRef.current.count === 0) {
                setReqErrors()
            }
            if (errRef.current.count === 0) {
                callback()
            }
        }
    }, [])

    const onValidate = useCallback((name: string & keyof T) => {
        const error = getError(name)
        if (errRef.current.errors[name] && !error) {
            errRef.current.count -= 1
        }
        if (!errRef.current.errors[name] && error) {
            errRef.current.count += 1
        }
        errRef.current.errors[name] = error
        setErrors({...errRef.current.errors, [name]: error})
    }, [])

    const setOuterValues = useCallback((values: Partial<typeof initInputs.values>) => {
        const filteredValues = Object.entries(values).reduce((accum, entry) => {
            const [key, value] = <Entry<typeof initInputs.values>>entry
            if (key in initInputs.values) {
                accum[key] = value
            }
            return accum
        }, <typeof initInputs.values>{})
        valRef.current = {...valRef.current, ...filteredValues}
        setValues({...valRef.current})
    }, [])

    const setOuterErrors = useCallback((errors: Mapped<typeof initInputs.errors>) => {
        const filteredValues = Object.entries(errors).reduce((accum, entry) => {
            const [key, value] = <Entry<typeof initInputs.errors>>entry
            if (key in initInputs.errors) {
                accum[key] = value
            }
            return accum
        }, <typeof initInputs.errors>{})
        errRef.current.errors = {...errRef.current.errors, ...filteredValues}
        setErrors({...errRef.current.errors})
    }, [])

    return {
        inputs: {values, errors}, onChange, onValidate, resetValues, errRef, setReqErrors, withSubmit,
        setOuterValues, setOuterErrors
    }
}

export const validate = <T extends ValidationInput, >(input: T, locale: Locale) => {
    const value = input.value as string
    const numValue = input.value as number
    const {validations, values, name, translInputs} = input
    const length = value?.length
    const errors: string[] = []

    loop: for (let validation in validations) {
        let valValue = validations[validation]
        switch (validation) {
            case ('required'): {
                if (value === '' || value === null || value === undefined) {
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
                if (typeof input.value === 'number' && !/^\d+(\.\d{1,2})?$/.test(numValue.toString())) errors.push({
                    ua: 'Введіть число.',
                    eng: 'Enter a number.',
                    ru: 'Введите число.'
                }[locale])
                break
            }
            case ('isNumberGreaterThanZero') : {
                if (numValue <= 0) errors.push({
                    ua: 'Введіть число більше нуля.',
                    eng: 'Enter a number greater than zero.',
                    ru: 'Введите число больше нуля.'
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
                const minLength = valValue as number
                const end = symbol(minLength, locale)
                if (length < minLength) errors.push({
                    ua: `Довжина поля мусить бути не меншою за ${minLength} символ${end}.`,
                    eng: `The field length must not be less than ${minLength} symbol${end}.`,
                    ru: `Длина поля должна быть не меньше чем ${minLength} символ${end}.`
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
    return errors.join('\n') ?? ''
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
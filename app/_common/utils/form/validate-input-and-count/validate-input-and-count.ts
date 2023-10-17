import {validate} from 'app/_common/hooks/input/input.hooks'
import {Locale} from 'app/_common/types/types'
import {Validations} from 'app/_common/hooks/input/input.types'
import {MutableRefObject} from 'react'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'

export const validateInputAndCount = <T extends string>(params: {
    validations: Record<T, Validations>, name: T, values: Record<T, string | number | boolean>, errors: Record<T,string>, locale: Locale,
    errCountRef: MutableRefObject<number>, shouldSetErr?: boolean
}) => {
    const {validations, locale, name, values, errCountRef, errors, shouldSetErr} = params
    const value = values[name]

    const beforeError = errors[name]
    const error = validate({name, value, validations: validations[name]}, locale)

    if (beforeError && !error ) {
        errCountRef.current++
    }
    if (!beforeError && error) {
        errCountRef.current--
    }

    if (shouldSetErr) {

    }

    return {error}
}

export const ValidateInputAndCountAll = <T extends string>(params: {
    validations: Record<T, Validations>, values: Record<T, string | number | boolean>, errors: Record<T,string>, locale: Locale,
    errCountRef: MutableRefObject<number>
}) => {
    const {validations, locale, values, errCountRef, errors} = params

    const newErrors = {...errors}

    getKeys(values).forEach((name) => {
        const {error} = validateInputAndCount({validations, errors: newErrors, values, errCountRef, name, locale})
        newErrors[name] = error
    })

    return {newErrors}
}
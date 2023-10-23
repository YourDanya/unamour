import {validate} from 'app/_common/hooks/input/input.hooks'
import getKeys from 'app/_common/utils/typescript/get-keys/get-keys.utils'
import {ValidateInputParams} from 'app/_common/utils/form/validate-input-and-count/validate-input-and-count.types'
import {ValidateInputOneParams} from 'app/_common/utils/form/validate-input-and-count/validate-input-and-count.types'
import {Value} from 'app/_common/hooks/input/input.types'

export const validateInputAndCount = <T extends string>(params: ValidateInputParams<T>) => {
    const {name} = params
    if (name) {
        validateOne({...params as ValidateInputOneParams<T>})
    }
    else {
        validateAll({...params})
    }
}

const validateOne = <T extends string> (params: ValidateInputOneParams<T>) => {
    const {validations, locale, name, values, errorCountRef, errors} = params
    const value = values[name] as Value

    const beforeError = errors[name]
    const error = validate({name, value, validations: validations[name]}, locale)

    if (beforeError && !error ) {
        errorCountRef.current--
    }
    if (!beforeError && error) {
        errorCountRef.current++
    }

    errors[name] = error
}

const validateAll = <T extends string>(params: ValidateInputParams<T>) => {
    const {values} = params

    getKeys(values).forEach((name) => {
        validateOne({...params, name})
    })
}
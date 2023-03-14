import {useRouter} from 'next/router'
import {Locale} from 'redux/main/main.types'
import {useMemo} from 'react'
import {useRef} from 'react'
import {useCallback} from 'react'
import {validate} from 'hooks/input/input.hooks'
import {UseMapInputs} from 'hooks/input/input-v2.types'
import {UseValidateInput} from 'hooks/input/input-v2.types'
import {InputsMap} from 'hooks/input/input-v2.types'
import {ChangeEvent} from 'react'
import {UseInputChange} from 'hooks/input/input-v2.types'
import {OnValidate} from 'hooks/input/input-v2.types'

export const useValidateInput: UseValidateInput = (params) => {
    const {errors, validations, validateCallback} = params

    const locale = useRouter().locale as Locale

    const errRef = useRef({errors: {...errors}, count: 0})

    const onValidate: OnValidate<keyof typeof errors> = useCallback((name, value) => {
        const beforeError = errRef.current.errors[name]
        const error = validate({value, name, validations: validations[name]}, locale)
        if (errRef.current.errors[name] && !error) {
            errRef.current.count -= 1
        }
        if (!errRef.current.errors[name] && error) {
            errRef.current.count += 1
        }
        errRef.current.errors[name] = error
        if (beforeError !== error) {
           validateCallback && validateCallback(errRef.current.errors)
        }
    }, [])

    return {onValidate, errRef}
}

export const useMapInputs: UseMapInputs = (inputsObj) => {
    return useMemo(() => {
        return Object.entries(inputsObj).reduce((initInputs, [key, obj]) => {
            if (obj.value) {
                initInputs.values[key] = obj.value
            }
            if (obj.validations) {
                initInputs.validations[key] = obj.validations
            }
            if (obj.error) {
                initInputs.errors[key] = obj.error
            } else {
                initInputs.errors[key] = ''
            }
            return initInputs
        }, {values: {}, validations: {}, errors: {}} as InputsMap<typeof inputsObj>)
    }, [])
}

export const useInputChange: UseInputChange = ({values, changeCallback}) => {
    const valuesRef = useRef({...values})

    const onChange = (event: ChangeEvent<HTMLElement>) => {
        const {name, value, type} = event.target as HTMLInputElement & { name: keyof typeof values }
        if (type === 'checkbox') {
            (valuesRef.current[name] as boolean) = !valuesRef.current[name]
        } else if (typeof valuesRef.current[name] === 'number') {
            (valuesRef.current[name] as number) = +value
        } else {
            (valuesRef.current[name] as string) = value
        }
        changeCallback({changeValues: valuesRef.current, name})
    }

    return {valuesRef, onChange}
}
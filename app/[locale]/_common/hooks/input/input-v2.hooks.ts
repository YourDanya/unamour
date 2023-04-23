import {useRouter} from 'next/navigation'
import {UseValidateInput} from 'app/[locale]/_common/hooks/input/input-v2.types'
import {OnValidate} from 'app/[locale]/_common/hooks/input/input-v2.types'
import {ChangeEvent} from 'react'
import {useCallback} from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'
import {UseInputChange} from 'app/[locale]/_common/hooks/input/input-v2.types'
import {UseMapInputs} from 'app/[locale]/_common/hooks/input/input-v2.types'
import {useMemo} from 'react'
import {InputsMap} from 'app/[locale]/_common/hooks/input/input-v2.types'
import {Locale} from 'app/[locale]/_common/types/types'
import {validate} from 'app/[locale]/_common/hooks/input/input.hooks'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useParams} from 'next/navigation'

export const useValidateInput: UseValidateInput = (params) => {
    const {errors, validations, validateCallback} = params

    const locale = useParams().locale as Locale

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
        return getEntries(inputsObj).reduce((initInputs, [key, obj]) => {
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

    useEffect(() => {
        valuesRef.current = {...values}
    }, [values])

    return {valuesRef, onChange}
}
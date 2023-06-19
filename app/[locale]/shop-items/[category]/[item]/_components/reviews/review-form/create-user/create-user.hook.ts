import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {
    dictionary
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'
import {useState} from 'react'
import {useRef} from 'react'
import {
    initValues
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'
import {useValidateInput} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {
    validations
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'
import {
    initErrors
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.content'
import {useEffect} from 'react'
import {MutableRefObject} from 'react'

const useCreateUser = () => {
    const state = useGetState()
    const {errors, valuesRef, values, setValues, onValidate} = state

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        setValues({...valuesRef.current})
        onValidate(name, value)
        validatePasswordConfirm(state)
    }

    return {...state, onChange}
}

export default useCreateUser

const useGetState = () => {
    const transl = useLocale(dictionary)

    const [values, setValues] = useState({...initValues})
    const valuesRef = useRef(values)

    const createUser = useApiCall('users', {
        method: 'POST', body: values, onSuccess: () => {
            valuesRef.current = {...initValues}
            setValues(valuesRef.current)
        }
    })

    const onCreateUser: MouseAction = (event) => {
        event.preventDefault()
        createUser.start()
    }

    const [errors, setErrors] = useState({...initErrors})

    const validateCallback = (newErrors: typeof errors) => {
        setErrors({...newErrors})
    }

    const {errRef, onValidate} = useValidateInput({
        errors, validations, validateCallback
    })

    const mappedCreateUser = useMapApiRes({res: createUser, successTransl: transl.success})

    return {
        transl, createUser, onCreateUser, values, setValues, valuesRef, errors, setErrors, errRef, onValidate,
        mappedCreateUser
    }
}

const validatePasswordConfirm = (state: ReturnType<typeof useGetState>) => {
    const {valuesRef, errRef, transl, setErrors} = state
    const beforeErr = errRef.current.errors.passwordConfirm
    if (beforeErr) {
        return
    }
    if (valuesRef.current.passwordConfirm !== valuesRef.current.password) {
        errRef.current.errors.passwordConfirm = transl.passMatchErr
    }
    const afterRrr = errRef.current.errors.name
    if (!beforeErr && afterRrr) {
        errRef.current.count++
    }
    if (beforeErr && !afterRrr) {
        errRef.current.count--
    }
    setErrors({...valuesRef.current})
}
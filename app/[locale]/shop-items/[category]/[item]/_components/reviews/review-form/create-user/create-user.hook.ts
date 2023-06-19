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
import {FocusEvent} from 'react'

const useCreateUser = () => {
    const state = useGetState()
    const {errors, valuesRef, values, setValues, onValidate, errRef, createUser} = state

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        setValues({...valuesRef.current})
        onValidate(name, value)
        validatePasswordConfirm(state)
    }

    const onBlur = ({name}: { name: keyof typeof values }) => {
        onValidate(name, valuesRef.current[name])
        validatePasswordConfirm(state)
    }

    const onCreateUser: MouseAction = (event) => {
        event.preventDefault()
        if (errRef.current.count !== 0) {
            return
        }
        createUser.start()
    }

    return {...state, onChange, onBlur, onCreateUser}
}

export default useCreateUser

const useGetState = () => {
    const transl = useLocale(dictionary)

    const [values, setValues] = useState({...initValues})
    const valuesRef = useRef(values)

    const [errors, setErrors] = useState({...initErrors})

    const validateCallback = (newErrors: typeof errors) => {
        setErrors({...newErrors})
    }

    const {errRef, onValidate} = useValidateInput({
        errors, validations, validateCallback
    })

    const createUser = useApiCall('users', {
        method: 'POST', body: values, onSuccess: () => {
            valuesRef.current = {...initValues}
            setValues(valuesRef.current)
        }
    })

    const mappedCreateUser = useMapApiRes({
        res: createUser, successTransl: transl.success, errorFourTransl: transl.errorFour
    })

    return {
        transl, createUser, values, setValues, valuesRef, errors, setErrors, errRef, onValidate,
        mappedCreateUser
    }
}

const validatePasswordConfirm = (state: ReturnType<typeof useGetState>) => {
    const {valuesRef, errRef, transl, setErrors} = state
    const beforeErr = errRef.current.errors.passwordConfirm

    const isMatchErr = errRef.current.errors.passwordConfirm === transl.passMatchErr

    if (beforeErr && !isMatchErr) {
        return
    }

    const arePassEqual = valuesRef.current.passwordConfirm === valuesRef.current.password

    if (!arePassEqual && !isMatchErr) {
        errRef.current.errors.passwordConfirm = transl.passMatchErr
        errRef.current.count++
    }

    if(arePassEqual && isMatchErr) {
        errRef.current.errors.passwordConfirm = ''
        errRef.current.count--
    }

    if (beforeErr !== errRef.current.errors.passwordConfirm) {
        setErrors({...errRef.current.errors})
    }
}
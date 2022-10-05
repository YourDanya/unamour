import React, {useEffect} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import {useRouter} from 'next/router'
import {useDispatch, useSelector,} from 'react-redux'
import {signIn} from 'redux/user/user.thunk'
import {selectField} from 'redux/user/user.selectors'
import {resetSuccess} from 'redux/user/user.slice'
import {useInput} from 'hooks/input/input.hooks'
import loginContent from 'components/sign-in-up/sign-in/login/login.content'
import {shallowEqual} from 'react-redux'

const useLogin = () => {

    const [transl, content] = useLocale(loginContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)

    const dispatch = useDispatch()
    const {loading, error, success} = useSelector(selectField('signIn'), shallowEqual)

    const handleClick = withSubmit(() => {
        dispatch(signIn(inputs.values))
    })

    const router = useRouter()

    useEffect(() => {
        if (success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-user')
                dispatch(resetSuccess('signIn'))
            }, 1000)
        }
    }, [success])

    return {content, transl, inputs, handleChange, handleClick, handleValidate, loading, error, success}
}

export default useLogin
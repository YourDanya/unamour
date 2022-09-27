import React, {useEffect} from 'react'
import {useLocale} from 'hooks/event-handler.hooks'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from 'react-redux'
import {signIn} from 'redux/user/user.thunk'
import {loginContent} from 'components/sign-in-up/sign-in/login/login.content'
import {selectField} from 'redux/user/user.selectors'
import {resetSuccess} from 'redux/user/user.slice'
import {useInput} from 'hooks/input/input.hooks'


const useLogin = () => {

    const [content, transl] = useLocale(loginContent)
    const {inputs, handleChange, handleValidate, resetValues, errRef} = useInput(content.inputs)

    const dispatch = useDispatch()
    const {loading, error, success} = useSelector(selectField('signIn'))

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        console.log('error count', errRef.current)
        if (!loading && errRef.current.count === 0) dispatch(signIn(inputs.values))
    }

    const router = useRouter()

    useEffect(() => {
        console.log(success)
        if (success) {
            setTimeout(() => {
                resetValues()
                router.push('/profile/update-user')
                dispatch(resetSuccess('signIn'))
            }, 1000)
        }
    }, [success])

    return {content, transl, inputs, handleChange, handleClick, handleValidate, loading, error, success,}
}

export default useLogin
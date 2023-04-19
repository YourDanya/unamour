'use client'

import {useEffect} from 'react'
import {useApiCall} from 'app/[locale]/_common/utils/api/api-v2.utils'
import {User} from 'app/[locale]/_redux/user/user.types'
import {useMapApiRes} from 'app/[locale]/_common/utils/api/api-v2.utils'
import {useDispatch} from 'react-redux'
import loginFormContent from 'app/[locale]/_components/layout/nav/nav-auth/login/login-form/login-form.content'
import {setUser} from 'app/[locale]/_redux/user/user.slice'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {resetUserFieldSuccess} from 'app/[locale]/_redux/user/user.slice'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useRouter} from 'next/navigation'

const useLoginForm = () => {
    const [transl, content] = useLocale(loginFormContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const dispatch = useDispatch()

    const login = useApiCall('auth/login', {
        method: 'POST',
        body: inputs.values,
        onSuccess: (data: {user: User}) => {
            dispatch(setUser(data))
        }
    })

    const onLogin = withSubmit(() => {
        login.start()
    })

    const router = useRouter()

    useEffect(() => {
        if (login.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-user')
                dispatch(resetUserFieldSuccess('login'))
            }, 1000)
        }
    }, [login.success])

    const mappedLogin = useMapApiRes({res: login, successTransl: transl.success, errorFourTransl: transl.error})

    return {content, transl, inputs, onChange, onLogin, onValidate, login, mappedLogin}
}

export default useLoginForm
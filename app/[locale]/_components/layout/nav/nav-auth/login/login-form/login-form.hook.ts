'use client'

import {useEffect} from 'react'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import loginFormContent from 'app/[locale]/_components/layout/nav/nav-auth/login/login-form/login-form.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useRouter} from 'next/navigation'
import {User} from 'app/[locale]/_store/user/user.types'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/[locale]/_store/user/user.store'

const useLoginForm = () => {
    const [transl, content] = useLocale(loginFormContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const setUser = useUserStore(state => state.setUser)

    const login = useApiCall<{user: User}>('auth/login', {
        method: 'POST',
        body: inputs.values,
        onSuccess: ({user}) => {
            setUser(user)
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
                login.setSuccess(false)
            }, 1000)
        }
    }, [login.success])

    const mappedLogin = useMapApiRes({res: login, successTransl: transl.success, errorFourTransl: transl.error})

    return {content, transl, inputs, onChange, onLogin, onValidate, login, mappedLogin}
}

export default useLoginForm
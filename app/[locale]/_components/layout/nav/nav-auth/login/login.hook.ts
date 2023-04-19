import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import loginContent from 'app/[locale]/_components/layout/nav/nav-auth/login/login.content'

const useLogin = () => {
    const [transl] = useLocale(loginContent)

    const [resetPass, setResetPass] = useState(false)

    const toggleResetPass = () => {
        setResetPass(!resetPass)
    }

    return {transl, resetPass, toggleResetPass}
}

export default useLogin
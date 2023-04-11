import loginContent from 'components/nav-auth/login/login.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useState} from 'react'

const useLogin = () => {
    const [transl] = useLocale(loginContent)

    const [resetPass, setResetPass] = useState(false)

    const toggleResetPass = () => {
        setResetPass(!resetPass)
    }

    return {transl, resetPass, toggleResetPass}
}

export default useLogin
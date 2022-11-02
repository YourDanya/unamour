import loginContent from 'components/nav-auth/login/login.content'
import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import {useLocale} from 'hooks/other/other.hooks'

const useLogin = () => {
    const [transl] = useLocale(loginContent)
    const [resetPass, handleResetPass] = useToggle()

    return {transl, resetPass, handleResetPass}
}

export default useLogin
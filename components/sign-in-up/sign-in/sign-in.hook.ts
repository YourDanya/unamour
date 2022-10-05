import signInContent from 'components/sign-in-up/sign-in/sign-in.content'
import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import {useLocale} from 'hooks/other/other.hooks'

const useSignIn = () => {

    const [transl, content] = useLocale(signInContent)
    const [resetPass, handleResetPass] = useToggle()

    return { transl, resetPass, handleResetPass}
}

export default useSignIn
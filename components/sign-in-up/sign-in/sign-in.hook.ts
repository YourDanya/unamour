import signInContent from 'components/sign-in-up/sign-in/sign-in.content'
import {useLocale, useToggle} from 'hooks/event-handler.hooks'

const useSignIn = () => {

    const [content, transl] = useLocale(signInContent)

    const [resetPass, handleResetPass] = useToggle()

    return { transl, resetPass, handleResetPass}
}

export default useSignIn

import {useLocale, useToggle} from "../../../hooks/event-handler.hooks"
import signInContent from "./sign-in.content"

const useSignIn = () => {

    const [content, transl] = useLocale(signInContent)

    const [resetPass, handleResetPass] = useToggle()

    return { transl, resetPass, handleResetPass}
}

export default useSignIn
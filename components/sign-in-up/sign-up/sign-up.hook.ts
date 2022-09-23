import {useInput, usePlainInput} from "../../../hooks/input/input.hooks"
import {useLocale} from "../../../hooks/event-handler.hooks"
import signUpContent from "./sign-up.content"

const useSignUp = () => {

    const [content, transl] = useLocale(signUpContent)

    const [inputs, handleChange] = useInput(content.inputs)

    return {inputs, handleChange, content, transl}
}

export default useSignUp
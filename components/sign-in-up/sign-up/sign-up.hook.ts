import signUpContent from 'components/sign-in-up/sign-up/sign-up.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const useSignUp = () => {

    const [transl, content] = useLocale(signUpContent)
    const {inputs, handleChange, handleValidate} = useInput(content.inputs)

    return {inputs, handleChange, handleValidate, content, transl}
}

export default useSignUp
import {usePlainInput} from "../../../hooks/input.hooks"
import {useSelector} from "react-redux"
import {selectSignUpError} from "../../../redux/user/user.slice"

const useSignUp = () => {
    const [values, handleChange] = usePlainInput({name: '', email: '', password: '', passwordConfirm: ''})
    const signUpError = useSelector(selectSignUpError)
    return {values, handleChange, signUpError}
}

export default useSignUp
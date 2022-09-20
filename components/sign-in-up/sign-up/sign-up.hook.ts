import {useSelector} from "react-redux"
import {usePlainInput} from "../../../hooks/input/input.hooks"

const useSignUp = () => {
    const [values, handleChange] = usePlainInput({name: '', email: '', password: '', passwordConfirm: ''})
    return {values, handleChange}
}

export default useSignUp
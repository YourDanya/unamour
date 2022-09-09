import {usePlainInput} from "../../../hooks/input.hooks"
import {useDispatch, useSelector} from "react-redux"
import {signIn} from "../../../redux/user/user.thunk";
import {MouseEvent} from "react"
import {selectSignInError} from "../../../redux/user/user.slice";

const useSignIn = () => {

    const [values, handleChange] = usePlainInput({email: '', password: ''})
    const dispatch = useDispatch()
    const signInError = useSelector(selectSignInError)

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        dispatch(signIn(values))
    }

    return {values, handleChange, handleClick, signInError}
}

export default useSignIn
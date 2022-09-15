import {usePlainInput} from "../../../hooks/input.hooks"
import {useDispatch, useSelector} from "react-redux"
import {signIn} from "../../../redux/user/user.thunk"
import {MouseEvent, useEffect} from "react"
import {useRouter} from "next/router"
import {selectJustSign, selectSignInError} from "../../../redux/user/user.selectors"
import {resetJustSign} from "../../../redux/user/user.slice";

const useSignIn = () => {

    const [values, handleChange] = usePlainInput({email: '', password: ''})
    const dispatch = useDispatch()
    const signInError = useSelector(selectSignInError)
    const justSign = useSelector(selectJustSign)

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        dispatch(signIn(values))
    }

    const router = useRouter()

    useEffect(() => {
        if (justSign) setTimeout(() => {
            router.push('/profile/update-user')
        }, 1000)
        dispatch(resetJustSign)
    }, [justSign])

    return {values, handleChange, handleClick, signInError, justSign}
}

export default useSignIn
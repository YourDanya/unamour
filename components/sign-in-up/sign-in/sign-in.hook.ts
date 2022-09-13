import {usePlainInput} from "../../../hooks/input.hooks"
import {useDispatch, useSelector} from "react-redux"
import {signIn} from "../../../redux/user/user.thunk"
import {MouseEvent, useEffect} from "react"
import {selectSignInError, selectUser} from "../../../redux/user/user.slice"
import {useRouter} from "next/router"

const useSignIn = () => {

    const [values, handleChange] = usePlainInput({email: '', password: ''})
    const dispatch = useDispatch()
    const signInError = useSelector(selectSignInError)
    const user = useSelector(selectUser)

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        dispatch(signIn(values))
    }

    const router = useRouter()

    useEffect(() => {
        if (user) setTimeout(() => {
            router.push('/profile/update-user')
        }, 1000)
    }, [user])

    return {values, handleChange, handleClick, signInError, user}
}

export default useSignIn
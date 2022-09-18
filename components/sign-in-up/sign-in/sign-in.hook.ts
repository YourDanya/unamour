import {usePlainInput} from "../../../hooks/input.hooks"
import {useDispatch, useSelector} from "react-redux"
import {signIn} from "../../../redux/user/user.thunk"
import {MouseEvent, useEffect} from "react"
import {useRouter} from "next/router"
import {selectField} from "../../../redux/user/user.selectors";
import {resetSuccess} from "../../../redux/user/user.slice";

const useSignIn = () => {

    const [values, handleChange] = usePlainInput({email: '', password: ''})
    const dispatch = useDispatch()
    const [loading, error, success] = useSelector(selectField('signIn'))

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (!loading) dispatch(signIn(values))
    }

    const router = useRouter()

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                router.push('/profile/update-user')
                dispatch(resetSuccess('signIn'))
            }, 1000)
        }
    }, [success])

    return {values, handleChange, handleClick, loading, error, success}
}

export default useSignIn
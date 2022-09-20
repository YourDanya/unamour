import {useDispatch, useSelector} from "react-redux"
import {signIn} from "../../../redux/user/user.thunk"
import {MouseEvent, useEffect} from "react"
import {useRouter} from "next/router"
import {selectField} from "../../../redux/user/user.selectors"
import {resetSuccess} from "../../../redux/user/user.slice"
import {useLocale} from "../../../hooks/event-handler.hooks"
import signInContent from "./sign-in.content"
import {useInput} from "../../../hooks/input/input.hooks"

const useSignIn = () => {

    const [content, transl] = useLocale(signInContent)

    const [inputs, handleChange, handleValidate, resetInputs] = useInput(content.inputs)

    const dispatch = useDispatch()
    const [loading, error, success] = useSelector(selectField('signIn'))

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (!loading) dispatch(signIn(inputs.values))
    }

    const router = useRouter()

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                resetInputs()
                router.push('/profile/update-user')
                dispatch(resetSuccess('signIn'))
            }, 1000)
        }
    }, [success])

    return {inputs, handleChange, handleClick, handleValidate, loading, error, success, transl}
}

export default useSignIn
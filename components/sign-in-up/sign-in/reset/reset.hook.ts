import {useLocale} from "../../../../hooks/event-handler.hooks"
import {resetContent} from "./reset.content"
import {useInput} from "../../../../hooks/input/input.hooks"
import {useDispatch, useSelector} from "react-redux"
import {selectField} from "../../../../redux/user/user.selectors"
import {forgetPass} from "../../../../redux/user/user.thunk"
import {MouseEvent} from "react"

const useReset = () => {

    const [content, transl]= useLocale(resetContent)
    const [inputs, handleChange, handleValidate, _, errRef, setInputs] = useInput(content.inputs)

    const forget = useSelector(selectField('forgetPass'))
    const reset = useSelector(selectField('resetPass'))
    const dispatch = useDispatch()

    const forgetSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (!errRef.current.errors.email) dispatch(forgetPass({email: inputs.values.email}))
    }

    const resetSubmit = () => {
        if (errRef.current.errors.pass || errRef.current.errors.passConfirm) return
    }

    // useEffect(() => {
    //     setInputs({})
    // }, []])
    // useEffect(() => {
    //
    // }, [])

    return {content, transl, inputs, handleChange, handleValidate, forgetSubmit, resetSubmit, forget, reset}
}

export default useReset
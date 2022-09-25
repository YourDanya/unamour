import {useLocale} from "../../../hooks/event-handler.hooks"
import resetPassContent from "./reset-pass.content"
import {useInput} from "../../../hooks/input/input.hooks"
import {useDispatch, useSelector} from "react-redux"
import {selectField} from "../../../redux/user/user.selectors"

const useResetPass = () => {
    const [content, transl] = useLocale(resetPassContent)

    const {inputs, handleChange, handleValidate, errRef} = useInput(content.inputs)

    const dispatch = useDispatch()

    const {loading, success, error} = useSelector(selectField('resetPass'))

    const handleSubmit = () => {
        if (!loading && errRef.current.count === 0) dispatch({})
    }

    return {content, transl, inputs, handleChange, handleValidate, handleSubmit, success, loading, error}
}

export default useResetPass
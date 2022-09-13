import {updateUserContent} from "./update-user.content"
import {useLocale} from "../../../hooks/event-handler.hooks"
import {useInput} from "../../../hooks/input.hooks"
import {MouseEvent} from "react"
import {useDispatch} from "react-redux"

const useUpdateUser = () => {
    const [content, translation] = useLocale(updateUserContent)
    const [inputs, handleChange, setInputs, handleValidate] = useInput(content.inputs)

    const dispatch = useDispatch()

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
    }

    return {content, translation, inputs, handleChange, handleSubmit, setInputs, handleValidate}
}

export default useUpdateUser
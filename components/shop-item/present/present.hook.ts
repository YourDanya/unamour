import {presentContent} from "./present.content"
import {presentProps} from "./present.component"
import {useInput} from "../../../hooks/input.hooks"
import {useLocale} from "../../../hooks/event-handler.hooks"

const usePresent = (props: presentProps) => {
    const [content, translation] = useLocale(presentContent)
    const [inputs, handleChange, handleBlur] = useInput(content.inputs)
    return {...props, translation, inputs, handleChange, handleBlur}
}

export default usePresent
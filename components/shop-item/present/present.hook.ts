import {presentContent} from "./present.content"
import {presentProps} from "./present.component"
import {useLocale} from "../../../hooks/event-handler.hooks"
import {useInput} from "../../../hooks/input/input.hooks";

const usePresent = (props: presentProps) => {
    const [content, translation] = useLocale(presentContent)
    const {inputs, handleChange, handleValidate} = useInput(content.inputs)
    return {...props, translation, inputs, handleChange, handleValidate}
}

export default usePresent
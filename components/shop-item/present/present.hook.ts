import {presentContent} from "./present.content"
import {PresentProps} from 'components/shop-item/present/present.component'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const usePresent = (props: PresentProps) => {
    const [transl, content] = useLocale(presentContent)
    const {inputs, onChange, onValidate} = useInput(content.inputs)
    return {...props, transl, inputs, onChange, onValidate}
}

export default usePresent
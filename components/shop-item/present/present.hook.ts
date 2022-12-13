import {presentContent} from "./present.content"
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {PresentProps} from 'components/shop-item/present/present.types'

const usePresent = (props: PresentProps) => {
    const [transl, content] = useLocale(presentContent)
    const {inputs, onChange, onValidate} = useInput(content.inputs)
    return {...props, transl, inputs, onChange, onValidate}
}

export default usePresent
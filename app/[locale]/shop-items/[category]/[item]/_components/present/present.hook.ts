import {presentContent} from "./present.content"
import {PresentProps} from 'app/[locale]/shop-items/[category]/[item]/_components/present/present.types'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'

const usePresent = (props: PresentProps) => {
    const [transl, content] = useLocale(presentContent)
    const {inputs, onChange, onValidate} = useInput(content.inputs)

    return {transl, inputs, onChange, onValidate}
}

export default usePresent
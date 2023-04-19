import {presentContent} from "./present.content"
import {PresentProps} from 'app/[locale]/shop-items/[category]/[id]/_components/present/present.types'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'

const usePresent = (props: PresentProps) => {
    const [transl, content] = useLocale(presentContent)
    const {inputs, onChange, onValidate} = useInput(content.inputs)

    return {transl, inputs, onChange, onValidate}
}

export default usePresent
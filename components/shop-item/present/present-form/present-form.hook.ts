import {useLocale} from 'hooks/other/other.hooks'
import presentFormContent from 'components/shop-item/present/present-form/present-form.content'
import {useInput} from 'hooks/input/input.hooks'

const usePresentForm= () => {
    const [transl, content] = useLocale(presentFormContent)
    const {inputs, onChange, onValidate, withSubmit} = useInput(content.inputs)

    const handleSubmit = withSubmit( () => {})

    const labels = transl.inputs.delivery.map(elem => elem.title)
    return {inputs, onChange, onValidate, transl, handleSubmit, content, labels}
}

export default usePresentForm
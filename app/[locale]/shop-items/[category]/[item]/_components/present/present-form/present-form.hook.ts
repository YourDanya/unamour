import presentFormContent from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-form/present-form.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'

const usePresentForm= () => {
    const [transl, content] = useLocale(presentFormContent)
    const {inputs, onChange, onValidate, withSubmit} = useInput(content.inputs)

    const handleSubmit = withSubmit( () => {})

    const labels = transl.inputs.delivery.map(elem => elem.title)
    return {inputs, onChange, onValidate, transl, handleSubmit, content, labels}
}

export default usePresentForm
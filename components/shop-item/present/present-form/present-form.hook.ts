import {useLocale} from 'hooks/other/other.hooks'
import presentFormContent from 'components/shop-item/present/present-form/present-form.content'
import {useInput} from 'hooks/input/input.hooks'
import {mapDelivery} from 'utils/component/component.utils'

const usePresentForm= () => {

    const [transl, content] = useLocale(presentFormContent)

    const {inputs, handleChange, handleValidate, withSubmit} = useInput(content.inputs)

    const handleSubmit = withSubmit( () => {
        console.log('submitting')
    })

    const labels = mapDelivery(transl.inputs.delivery.labels)

    return {inputs, handleChange, handleValidate, transl, handleSubmit, content, labels}
}

export default usePresentForm
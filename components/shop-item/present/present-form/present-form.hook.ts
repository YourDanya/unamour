import {useLocale} from 'hooks/event-handler.hooks'
import presentFormContent from 'components/shop-item/present/present-form/present-form.content'
import {useInput} from 'hooks/input/input.hooks'

const usePresentForm= () => {
    const [content, transl] = useLocale(presentFormContent)

    const {inputs, handleChange, handleValidate, setInputs, resetValues, errRef} = useInput(content.inputs)

    const handleSubmit = () => {

    }

    return {inputs, handleChange, handleValidate, transl, handleSubmit}
}

export default usePresentForm
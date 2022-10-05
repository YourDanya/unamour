import cartFormContent from 'components/cart/cart-form/cart-form.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const useCartForm = () => {
    const [transl, content] = useLocale(cartFormContent)

    const {inputs, handleChange, handleValidate, errRef, resetValues} = useInput(content.inputs)

    const handleSubmit = () => {

    }

    return {inputs, handleChange, handleValidate, transl, handleSubmit}
}

export default useCartForm
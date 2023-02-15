import cartFormContent from 'components/cart/cart-form/cart-form.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const useCartForm = () => {
    const [transl, content] = useLocale(cartFormContent)

    const {inputs, onChange, onValidate, errRef, resetValues} = useInput(content.inputs)

    const onSubmit = () => {

    }

    return {inputs, onChange, onValidate, transl, onSubmit}
}

export default useCartForm
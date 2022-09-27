import {DiscountProps} from 'components/cart/discount/discount.component'
import {useLocale, useSetFalseMany, useToggleMany} from 'hooks/event-handler.hooks'
import discountContent from 'components/cart/discount/discount.content'
import {useInput} from 'hooks/input/input.hooks'

const useDiscount = (props: DiscountProps) => {

    const [content, transl] = useLocale(discountContent)

    const [active, toggleActive] = useToggleMany(['certificate', 'promo'] as const, 'name')
    const [found, setFound] = useSetFalseMany(['certificate', 'promo'] as const, 'name')

    const {inputs, handleChange, handleValidate} = useInput(content.inputs)

    return {transl, active, toggleActive, found, setFound, inputs, handleChange, handleValidate}
}

export default useDiscount

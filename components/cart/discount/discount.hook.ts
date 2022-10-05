import {DiscountProps} from 'components/cart/discount/discount.component'
import discountContent from 'components/cart/discount/discount.content'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'
import {useSetFalseMany} from 'hooks/event-handler/event-handler.hooks'

const useDiscount = (props: DiscountProps) => {

    const [transl, content] = useLocale(discountContent)

    const [active, toggleActive] = useToggleMany(['certificate', 'promo'] as const, 'name')
    const [found, setFound] = useSetFalseMany(['certificate', 'promo'] as const, 'name')

    const {inputs, handleChange, handleValidate} = useInput(content.inputs)

    return {transl, active, toggleActive, found, setFound, inputs, handleChange, handleValidate}
}

export default useDiscount

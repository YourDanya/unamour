import discountContent from 'components/cart/discount/discount.content'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'
import {useSetFalseMany} from 'hooks/event-handler/event-handler.hooks'
import {DiscountProps} from 'components/cart/discount/discount.types'

const useDiscount = (props: DiscountProps) => {
    const [transl, content] = useLocale(discountContent)

    const [active, toggleActive] = useToggleMany({certificate: false, promo: false}, 'name')
    const [found, setFound] = useSetFalseMany(['certificate', 'promo'] as const, 'name')

    const {inputs, onChange, onValidate} = useInput(content.inputs)

    return {transl, active, toggleActive, found, setFound, inputs, onChange, onValidate}
}

export default useDiscount

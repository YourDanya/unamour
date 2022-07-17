import {useSetFalseMany, useToggleMany} from "../../hooks/hooks"
import {DiscountProps} from "./discount.component"

const useDiscount = (props: DiscountProps) => {
    const [active, toggleActive] = useToggleMany(['certificate', 'promo'] as const, 'name')
    const [found, setFound] = useSetFalseMany(['certificate', 'promo'] as const, 'name')

    return {...props, active, toggleActive, found, setFound}
}

export default useDiscount

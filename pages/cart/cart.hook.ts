import {useSelector} from "react-redux"
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.slice"
import {createDelivery} from "../../utils/component.utils"
import CartContent from "./cart.content"
import {useInput, useSetActive, useToggle} from "../../hooks/hooks"

const useCart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)
    const deliveryTypes = createDelivery(CartContent.deliveryTypes)
    const [formValues, handleFormChange] = useInput(['name', 'surname', 'street', 'county', 'index', 'city', 'house', 'apartment', 'number', 'email'] as const)
    const [deliveryActive, handleDeliveryChange] = useSetActive('novaPoshta', 'id')
    const [discount, handleDiscountChange] = useInput(['certificate', 'promo'] as const)
    const [save, handleSave] = useToggle()

    return {cartItems, total, deliveryTypes, formValues, handleFormChange, deliveryActive, handleDeliveryChange,
        discount, handleDiscountChange, save, handleSave}
}

export default useCart
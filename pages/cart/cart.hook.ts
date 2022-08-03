import {useSelector} from "react-redux"
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.slice"
import {createDelivery} from "../../utils/component.utils"
import CartContent from "./cart.content"
import { useSetActive, useToggle} from "../../hooks/event-handler.hooks"
import {usePlainInput} from "../../hooks/input.hooks";

const useCart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)
    const deliveryTypes = createDelivery(CartContent.deliveryTypes)
    const [formValues, handleFormChange] = usePlainInput({
        name: '', surname: '', street: '', county: '', index: '', city: '', house: '', apartment: '', number: '', email: ''
    })
    const [deliveryActive, handleDeliveryChange] = useSetActive('novaPoshta', 'id')
    const [discount, handleDiscountChange] = usePlainInput({certificate: '', promo: ''})
    const [save, handleSave] = useToggle()

    return {cartItems, total, deliveryTypes, formValues, handleFormChange, deliveryActive, handleDeliveryChange,
        discount, handleDiscountChange, save, handleSave}
}

export default useCart
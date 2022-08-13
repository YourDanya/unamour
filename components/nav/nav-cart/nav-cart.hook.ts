import {useSelector} from "react-redux"
import {selectCartItems, selectTotalPrice} from "../../../redux/cart/cart.slice"

const useNavCart = () => {
    const cartItems = useSelector(selectCartItems)

    const total = useSelector(selectTotalPrice)

    const length = cartItems.length

    return {cartItems, total, length}
}

export default useNavCart
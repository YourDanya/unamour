import {selectCartItems, selectTotalPrice} from 'redux/cart/cart.slice'
import {useSelector} from 'react-redux'

const useCart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)

    return {cartItems, total}
}

export default useCart
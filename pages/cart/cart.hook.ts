import {useSelector} from 'react-redux'
import {selectCartItems} from 'redux/cart/cart.selector'
import {selectTotalPrice} from 'redux/cart/cart.selector'

const useCart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)

    return {cartItems, total}
}

export default useCart
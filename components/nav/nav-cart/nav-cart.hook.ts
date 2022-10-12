import {useSelector} from "react-redux"
import {useLocale} from 'hooks/other/other.hooks'
import navCartContent from 'components/nav/nav-cart/nav-cart.content'
import {selectCartItems} from 'redux/cart/cart.selector'
import {selectTotalPrice} from 'redux/cart/cart.selector'

const useNavCart = () => {
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)
    const length = cartItems.length
    const [transl] = useLocale(navCartContent)

    return {cartItems, total, length, transl}
}

export default useNavCart
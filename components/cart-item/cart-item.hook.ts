import {CartItemObject, decreaseQuantity, increaseQuantity, removeItem} from 'redux/cart/cart.slice'
import {useDispatch} from 'react-redux'
import cartItemContent from 'components/cart-item/cart-item.content'
import {useMatchUrl} from 'hooks/other/other.hooks'
import {useLocale} from 'hooks/other/other.hooks'

const useCartItem = (props: CartItemObject) => {
    const {data: {slug, size}} = props

    const [transl] = useLocale(cartItemContent)

    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increaseQuantity({slug, size}))
    }
    const decrease = () => {
        dispatch(decreaseQuantity({slug, size}))
    }
    const remove= () => {
        dispatch(removeItem({slug, size}))
    }

    const cartPage = useMatchUrl('/cart')

    return {increase, decrease, remove, cartPage, transl}
}

export default useCartItem
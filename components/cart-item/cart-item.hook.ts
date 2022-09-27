import {CartItemObject, decreaseQuantity, increaseQuantity, removeItem} from 'redux/cart/cart.slice'
import {useLocale, useMatchUrl} from 'hooks/event-handler.hooks'
import {useDispatch} from 'react-redux'
import cartItemContent from 'components/cart-item/cart-item.content'

const useCartItem = (props: CartItemObject) => {
    const {data: {slug, size}} = props

    const [_, transl] = useLocale(cartItemContent)

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
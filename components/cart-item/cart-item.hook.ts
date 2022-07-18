import {CartItemObject, decreaseQuantity, increaseQuantity, removeItem} from "../../redux/cart/cart.slice";
import {useDispatch} from "react-redux";
import {useMatchUrl} from "../../hooks/hooks";

const useCartItem = (props: CartItemObject) => {
    const {data: {slug, size}} = props

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

    return {...props, increase, decrease, remove, cartPage}
}

export default useCartItem
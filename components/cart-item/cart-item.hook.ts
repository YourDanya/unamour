import {CartItemObject, decreaseQuantity, increaseQuantity, removeItem} from "../../redux/cart/cart.slice";
import {useDispatch} from "react-redux";

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

    return {...props, increase, decrease, remove}
}

export default useCartItem
import { decreaseQuantity, increaseQuantity, removeItem} from 'redux/cart/cart.slice'
import {useDispatch} from 'react-redux'
import cartItemContent from 'components/cart-item/cart-item.content'
import {useMatchUrl} from 'hooks/other/other.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {CartItem} from 'redux/cart/cart.types'
import {useMemo} from 'react'
import {colorContent} from 'components/common/content/content'
import {Color} from 'components/shop-items/shop-items.types'

const useCartItem = (props: CartItem) => {
    const {common: {slug, size, color}, translations} = props
    const [{name}] = useLocale({translations})
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

    const code = useMemo(() => {
        return (colorContent.common.find(tempColor => tempColor.slug === color) as Color).code
    },[])

    return {increase, decrease, remove, cartPage, transl, name, code}
}

export default useCartItem
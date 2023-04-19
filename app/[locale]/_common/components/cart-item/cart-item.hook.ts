import { decreaseQuantity, increaseQuantity, removeItem} from 'app/[locale]/_redux/cart/cart.slice'
import {useDispatch} from 'react-redux'
import {useMatchUrl} from 'app/[locale]/_common/hooks/other/other.hooks'
import {CartItem} from 'app/[locale]/_redux/cart/cart.types'
import {useMemo} from 'react'
import {colorContent} from 'app/[locale]/_content/content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import cartItemContent from 'app/[locale]/_common/components/cart-item/cart-item.content'
import {Color} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const useCartItem = (props: CartItem) => {
    const {common: {_id, color}, translations} = props
    const [{name}] = useLocale({translations})
    const [transl] = useLocale(cartItemContent)

    const dispatch = useDispatch()
    const onIncrease = () => {
        dispatch(increaseQuantity({_id}))
    }
    const onDecrease = () => {
        dispatch(decreaseQuantity({_id}))
    }
    const onRemove= () => {
        dispatch(removeItem({_id}))
    }

    const cartPage = useMatchUrl('/cart')

    const code = useMemo(() => {
        return (colorContent.common.find(tempColor => tempColor.slug === color) as Color).code
    },[])

    return {onIncrease, onDecrease, onRemove, cartPage, transl, name, code}
}

export default useCartItem
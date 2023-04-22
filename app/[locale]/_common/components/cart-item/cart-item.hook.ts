import {useMatchUrl} from 'app/[locale]/_common/hooks/other/other.hooks'
import {CartItem} from 'app/[locale]/_store/cart/cart.types'
import {useMemo} from 'react'
import {colorContent} from 'app/[locale]/_content/content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import cartItemContent from 'app/[locale]/_common/components/cart-item/cart-item.content'
import {Color} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {useCartStore} from 'app/[locale]/_store/cart/cart.store'

const useCartItem = (props: CartItem) => {
    const {common: {_id, color}, translations} = props
    const [{name}] = useLocale({translations})
    const [transl] = useLocale(cartItemContent)

    const increaseQuantity = useCartStore(state => state.increaseQuantity)
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity)
    const removeItem = useCartStore(state => state.removeItem)

    const onIncrease = () => {
        increaseQuantity(_id)
    }
    const onDecrease = () => {
        decreaseQuantity(_id)
    }
    const onRemove= () => {
        removeItem(_id)
    }

    const cartPage = useMatchUrl('/cart')

    const code = useMemo(() => {
        return (colorContent.common.find(tempColor => tempColor.slug === color) as Color).code
    },[])

    return {onIncrease, onDecrease, onRemove, cartPage, transl, name, code}
}

export default useCartItem
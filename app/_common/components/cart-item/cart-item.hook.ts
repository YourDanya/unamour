import {CartItem} from 'app/_common/store/cart/cart.types'
import {useMemo} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import cartItemContent from 'app/_common/components/cart-item/cart-item.content'
import {useCartStore} from 'app/_common/store/cart/cart.store'
import {Color} from 'app/_common/types/types'
import {usePathname} from 'next/navigation'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {colorValues} from 'app/_common/content/color/color.content'

const useCartItem = (item: CartItem) => {
    const {shopItemId, color, size, translations, quantity} = item

    const [{name}] = useLocale({translations})
    const [transl] = useLocale(cartItemContent)

    const increaseQuantity = useCartStore(state => state.increaseQuantity)
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity)
    const removeItem = useCartStore(state => state.removeItem)

    const res = useApiCall<{item: CartItem}>({url: 'cart'})

    const sendItem = {shopItemId, color, size, quantity}

    const onIncrease = () => {
        increaseQuantity(item)
        const body = {item: {...sendItem, quantity: sendItem.quantity + 1}, option: 'update'}
        res.start({method: 'POST', body})
    }

    const onDecrease = () => {
        decreaseQuantity(item)
        let body
        if (sendItem.quantity === 1) {
            body = {item: sendItem, option: 'delete'}
        } else {
            body = {item: {...sendItem, quantity: sendItem.quantity - 1}, option: 'update'}
        }
        res.start({method: 'POST', body})
    }

    const onRemove = () => {
        removeItem(item)
        const body = {item: sendItem, option: 'delete'}
        res.start({method: 'POST', body})
    }

    const cartPage = usePathname() === '/cart'

    const code = useMemo(() => {
        return (colorValues.find(tempColor => tempColor.slug === color) as Color).code
    }, [])

    return {onIncrease, onDecrease, onRemove, cartPage, transl, name, code}
}

export default useCartItem
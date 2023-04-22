import navCartContent from 'app/[locale]/_components/layout/nav/nav-cart/nav-cart.content'
import {useEffect} from 'react'
import {NavCartProps} from 'app/[locale]/_components/layout/nav/nav-cart/nav-cart.types'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useCartStore} from 'app/[locale]/_store/cart/cart.store'
import {useCallback} from 'react'

const useNavCart = (props: NavCartProps) => {
    const {modal, showModal} = props
    const cartItems = useCartStore(state => state.items)
    const total = useCartStore(useCallback(state => state.getTotalPrice(), []))
    const length = cartItems.length
    const [transl] = useLocale(navCartContent)

    return {cartItems, total, length, transl}
}

export default useNavCart
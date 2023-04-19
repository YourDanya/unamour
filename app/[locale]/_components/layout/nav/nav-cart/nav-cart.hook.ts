import {useDispatch, useSelector} from 'react-redux'
import {selectCartItems} from 'app/[locale]/_redux/cart/cart.selector'
import {selectTotalPrice} from 'app/[locale]/_redux/cart/cart.selector'
import navCartContent from 'app/[locale]/_components/layout/nav/nav-cart/nav-cart.content'
import {setShouldOpenNavCart} from 'app/[locale]/_redux/cart/cart.slice'
import {useEffect} from 'react'
import {selectShouldCartOpen} from 'app/[locale]/_redux/cart/cart.selector'
import {NavCartProps} from 'app/[locale]/_components/layout/nav/nav-cart/nav-cart.types'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useNavCart = (props: NavCartProps) => {
    const {modal, showModal} = props
    const cartItems = useSelector(selectCartItems)
    const shouldCartOpen = useSelector(selectShouldCartOpen)
    const total = useSelector(selectTotalPrice)
    const length = cartItems.length
    const [transl] = useLocale(navCartContent)

    const dispatch = useDispatch()

    useEffect(() => {
        if (shouldCartOpen) {
            showModal('shopping')
            dispatch(setShouldOpenNavCart(false))
        }
    }, [shouldCartOpen])

    return {cartItems, total, length, transl}
}

export default useNavCart
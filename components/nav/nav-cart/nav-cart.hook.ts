import {useDispatch, useSelector} from 'react-redux'
import {useLocale} from 'hooks/other/other.hooks'
import navCartContent from 'components/nav/nav-cart/nav-cart.content'
import {selectCartItems, selectShouldCartOpen} from 'redux/cart/cart.selector'
import {selectTotalPrice} from 'redux/cart/cart.selector'
import {useEffect} from 'react'
import {NavCartProps} from 'components/nav/nav-cart/nav-cart.types'
import {setShouldOpenNavCart} from 'redux/cart/cart.slice'

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
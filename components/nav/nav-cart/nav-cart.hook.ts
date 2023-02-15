import {useSelector} from "react-redux"
import {useLocale} from 'hooks/other/other.hooks'
import navCartContent from 'components/nav/nav-cart/nav-cart.content'
import {selectCartItems} from 'redux/cart/cart.selector'
import {selectTotalPrice} from 'redux/cart/cart.selector'
import {useEffect} from 'react'
import {NavCartProps} from 'components/nav/nav-cart/nav-cart.types'

const useNavCart = (props: NavCartProps) => {
    const {modal, showModal} = props
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)
    const length = cartItems.length
    const [transl] = useLocale(navCartContent)

    useEffect(() => {
        // if (cartItems.length > 0 && !modal) {
        //     showModal('shopping')
        // }
    }, [cartItems])

    return {cartItems, total, length, transl}
}

export default useNavCart
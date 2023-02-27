import {useDispatch} from 'react-redux'
import {getUserAsync} from 'redux/user/user.thunk'
import {useEffect} from 'react'
import {selectUser} from 'redux/user/user.selectors'
import {useSelector} from 'react-redux'
import {getItemsAsync} from 'redux/admin/admin.thunk'
import {selectOrderId} from 'redux/cart/cart.selector'
import {getOrderAsync} from 'redux/checkout/checkout.thunk'
import {selectOrder} from 'redux/checkout/checkout.selector'
import {useRef} from 'react'
import {setOrderId} from 'redux/cart/cart.slice'
import {setCartItems} from 'redux/cart/cart.slice'

const usePreWork = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserAsync())
    }, [])

    useEffect(() => {
        if (user?.isAdmin) {
            dispatch(getItemsAsync())
        }
    }, [user])

    const orderId = useSelector(selectOrderId)

    let intervalRef = useRef<NodeJS.Timer>()

    // useEffect(() => {
    //     clearInterval(intervalRef.current as NodeJS.Timer)
    //     if (!orderId) {
    //         return
    //     }
    //     intervalRef.current = setInterval(() => {
    //         dispatch(getOrderAsync(orderId))
    //     }, 5000)
    // }, [orderId])


    const order = useSelector(selectOrder)

    useEffect(() => {
        if (!order) {
            return
        }
        const status = order.payment.status
        if (status !== 'pending') {
            dispatch(setOrderId(''))
            clearInterval(intervalRef.current as NodeJS.Timer)
        }
        if (status === 'approved') {
            dispatch(setCartItems([]))
        }
    }, [order])
}

export default usePreWork
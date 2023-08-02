import {useEffect} from 'react'
import {useRef} from 'react'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/[locale]/_store/user/user.store'
import {useCallback} from 'react'
import {peek} from 'app/[locale]/_common/utils/helpers/peek/peek.util'
import {shallow} from 'zustand/shallow'
import {User} from 'app/[locale]/_store/user/user.types'
import {useCartStore} from 'app/[locale]/_store/cart/cart.store'
import {Order} from 'app/[locale]/_store/cart/cart.types'

const usePreWork = () => {
    const user = useUserStore(state => state.user)
    const setUser = useUserStore(state => state.setUser)

    const getUser = useApiCall<{user: User}>('users/user-data', {
        onSuccess: ({user}) => {
            setUser(user ?? null)
        }
    })

    useEffect(() => {
        getUser.start()
    }, [])

    const orderId = useCartStore(state => state.orderId)

    const order = useCartStore(state => state.order)
    const setOrder = useCartStore(state => state.setOrder)

    const getOrder = useApiCall<Order>(`checkout/order-by-id/${orderId}`, {
        onSuccess: (order) => {
            setOrder(order)
        }
    })

    let intervalRef = useRef<NodeJS.Timer>()

    useEffect(() => {
        clearInterval(intervalRef.current as NodeJS.Timer)
        if (!orderId) {
            return
        }
        intervalRef.current = setInterval(() => {
            getOrder.start()
        }, 5000)
    }, [orderId])

    const setOrderId = useCartStore(state => state.setOrderId)
    const setCartItems = useCartStore(state => state.setCartItems)

    useEffect(() => {
        if (!order || !orderId) {
            return
        }
        const status = order.payment.status
        if (status !== 'pending') {
            setOrderId('')
            clearInterval(intervalRef.current as NodeJS.Timer)
        }
        if (status === 'approved') {
            setCartItems([])
        }
    }, [order])
}

export default usePreWork
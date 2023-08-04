import {useEffect} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useRouter} from 'next/navigation'
import {useCartStore} from 'app/_common/store/cart/cart.store'
import orderContent from 'app/[locale]/order/[id]/_components/order.content'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {Order} from 'app/_common/store/cart/cart.types'
import {useParams} from 'next/navigation'

const useOrder = () => {
    const [transl] = useLocale(orderContent)

    const orderId = useParams().id as string
    const storeOrderId = useCartStore(store => store.orderId)
    const processing = orderId === storeOrderId

    const getOrder = useApiCall<Order>(`checkout/order-by-id/${orderId}`)

    const storeOrder = useCartStore(store => store.order)

    const order = processing ? storeOrder : getOrder.data

    useEffect(() => {
        if (processing) {
            getOrder.start()
        }
    }, [])

    const status = order?.payment?.status
    const method = order?.payment?.method

    return {order, transl, method, status}
}

export default useOrder
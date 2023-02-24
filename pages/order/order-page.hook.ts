import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useRef} from 'react'
import {getOrderAsync} from 'redux/checkout/checkout.thunk'
import {useSelector} from 'react-redux'
import {selectOrder} from 'redux/checkout/checkout.selector'
import {useLocale} from 'hooks/other/other.hooks'
import orderPageContent from 'pages/order/order-page.content'

const useOrderPage = () => {
    const [transl] = useLocale(orderPageContent)

    const orderId = useRouter().query.id as string
    const order = useSelector(selectOrder)

    const dispatch = useDispatch()

    let intervalRef = useRef<NodeJS.Timer>()

    useEffect(() => {
        clearInterval(intervalRef.current as NodeJS.Timer)
        if (!orderId) {
            return
        }
        intervalRef.current = setInterval(() => {
            dispatch(getOrderAsync(orderId))
        }, 5000)
    }, [orderId])

    return {order, transl}
}

export default useOrderPage
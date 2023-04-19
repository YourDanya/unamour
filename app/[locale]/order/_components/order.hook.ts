import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {selectOrder} from 'app/[locale]/_redux/checkout/checkout.selector'
import {getOrderAsync} from 'app/[locale]/_redux/checkout/checkout.thunk'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import orderContent from 'app/[locale]/order/_components/order.content'
import {useRouter} from 'next/navigation'

const useOrderPage = () => {
    const [transl] = useLocale(orderContent)

    const order = useSelector(selectOrder)

    const dispatch = useDispatch()

    const id = useRouter().query.id as string

    console.log(useRouter().query.id)

    useEffect(() => {
        dispatch(getOrderAsync(id))
    }, [])

    const status = order?.payment?.status
    const method = order?.payment?.method

    return {order, transl, method, status}
}

export default useOrderPage
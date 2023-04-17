import {useSelector} from 'react-redux'
import {selectOrder} from 'redux/checkout/checkout.selector'
import {useLocale} from 'hooks/other/other.hooks'
import orderPageContent from 'pages/order/order-page.content'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {getOrderAsync} from 'redux/checkout/checkout.thunk'
import {useDispatch} from 'react-redux'

const useOrderPage = () => {
    const [transl] = useLocale(orderPageContent)

    const order = useSelector(selectOrder)

    const dispatch = useDispatch()

    const id = useRouter().query.id as string

    console.log(useRouter().query.id)

    useEffect(() => {
        dispatch(getOrderAsync(id))
    }, [])

    return {order, transl}
}

export default useOrderPage
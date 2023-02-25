import {useSelector} from 'react-redux'
import {selectOrder} from 'redux/checkout/checkout.selector'
import {useLocale} from 'hooks/other/other.hooks'
import orderPageContent from 'pages/order/order-page.content'

const useOrderPage = () => {
    const [transl] = useLocale(orderPageContent)

    const order = useSelector(selectOrder)

    return {order, transl}
}

export default useOrderPage
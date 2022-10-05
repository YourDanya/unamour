import {useLocale} from 'hooks/other/other.hooks'
import orderContent from 'components/cart/order/order.content'

const useOrder = () => {
    const [transl] = useLocale(orderContent)
    return {transl}
}

export default useOrder
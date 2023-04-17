import {useLocale} from 'hooks/other/other.hooks'
import orderItemContent from 'components/order/order-item/order-item.content'

const useOrderItem = () => {
    const [transl] = useLocale(orderItemContent)
    return {transl}
}

export default useOrderItem
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import orderItemContent from 'app/[locale]/order/[id]/_components/order-item/order-item.content'

const useOrderItem = () => {
    const [transl] = useLocale(orderItemContent)
    return {transl}
}

export default useOrderItem
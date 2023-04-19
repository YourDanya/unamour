import orderItemContent from 'app/[locale]/order/_components/order-item/order-item.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useOrderItem = () => {
    const [transl] = useLocale(orderItemContent)
    return {transl}
}

export default useOrderItem
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import orderItemContent from 'app/[locale]/order/[id]/_components/order-item/order-item.content'

const useOrderItem = () => {
    const [transl] = useLocale(orderItemContent)
    return {transl}
}

export default useOrderItem
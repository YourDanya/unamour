import {useLocale} from 'hooks/event-handler.hooks'
import orderContent from 'components/cart/order/order.content'

const useOrder = () => {
    const [_, transl] = useLocale(orderContent)
    return {transl}
}

export default useOrder
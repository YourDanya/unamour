import {useLocale} from 'hooks/other/other.hooks'
import cartOrderContent from 'components/cart/cart-order/cart-order.content'

const useCartOrder = () => {
    const [transl] = useLocale(cartOrderContent)
    return {transl}
}

export default useCartOrder
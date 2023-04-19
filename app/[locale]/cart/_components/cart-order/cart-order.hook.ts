import cartOrderContent from 'app/[locale]/cart/_components/cart-order/cart-order.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useCartOrder = () => {
    const [transl] = useLocale(cartOrderContent)
    return {transl}
}

export default useCartOrder
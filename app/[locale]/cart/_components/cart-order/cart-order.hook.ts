import cartOrderContent from 'app/[locale]/cart/_components/cart-order/cart-order.content'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'

const useCartOrder = () => {
    const [transl] = useLocale(cartOrderContent)
    return {transl}
}

export default useCartOrder
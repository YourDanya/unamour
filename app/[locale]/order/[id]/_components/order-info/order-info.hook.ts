import {useMemo} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import orderInfoContent from 'app/[locale]/order/[id]/_components/order-info/order-info.content'
import {Order} from 'app/_common/store/cart/cart.types'
import {Color} from 'app/_common/types/types'
import {colorValues} from 'app/_common/content/color/color.content'

const useOrderInfo = (props: Order) => {
    const [transl] = useLocale(orderInfoContent)

    const colors = useMemo(() => {
        return props.products.map((product) => {
            return (colorValues.find((color) => color.slug === product.color) as Color).code
        })
    }, [])

    return {transl, colors}
}

export default useOrderInfo
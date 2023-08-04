import {useMemo} from 'react'
import {colorContent} from 'app/_common/content/content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {Color} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import orderInfoContent from 'app/[locale]/order/[id]/_components/order-info/order-info.content'
import {Order} from 'app/_common/store/cart/cart.types'

const useOrderInfo = (props: Order) => {
    const [transl] = useLocale(orderInfoContent)

    const colors = useMemo(() => {
        return props.products.map((product) => {
            return (colorContent.common.find((color) => color.slug === product.color) as Color).code
        })
    }, [])

    return {transl, colors}
}

export default useOrderInfo
import {useLocale} from 'hooks/other/other.hooks'
import {useMemo} from 'react'
import {colorContent} from 'components/common/content/content'
import {Color} from 'components/shop-items/shop-items.types'
import orderContent from 'components/order/order.content'
import {Order} from 'redux/checkout/checkout.types'

const useOrder = (props: Order) => {

    const [transl] = useLocale(orderContent)

    const colors = useMemo(() => {
        return props.products.map((product) => {
            return (colorContent.common.find((color) => color.slug === product.color) as Color).code
        })
    }, [])

    return {transl, colors}
}
export default useOrder
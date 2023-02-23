import {useLocale} from 'hooks/other/other.hooks'
import orderContent from 'pages/order/order.content'
import {colorContent} from 'components/common/content/content'
import {OrderProps} from 'pages/order/order.types'
import {useMemo} from 'react'
import {Color} from 'components/shop-items/shop-items.types'

const useOrder = (props: OrderProps) => {
    const {order: {products}} = props

    const [transl] = useLocale(orderContent)

    const colors = useMemo(() => {
        return products.map((product) => {
            return (colorContent.common.find((color) => color.slug === product.color) as Color).code
        })
    }, [])

    return {transl, colors}
}

export default useOrder
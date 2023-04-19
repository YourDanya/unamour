import {useMemo} from 'react'
import {colorContent} from 'app/[locale]/_content/content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {Order} from 'app/[locale]/_redux/checkout/checkout.types'
import orderInfoContent from 'app/[locale]/order/_components/order-info/order-info.content'
import {Color} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

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
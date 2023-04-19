import {NextPage} from 'next'
import Order from 'app/[locale]/order/_components/order.component'
import {OrderPageProps} from 'app/[locale]/order/_components/order.types'

const OrderPage: NextPage<OrderPageProps> = () => {

    return (
        <Order/>
    )
}

export default OrderPage
import {wrapper} from 'redux/store'
import {apiCall} from 'utils/api/api.utils'
import {api} from 'utils/api/api.utils'
import {NextPage} from 'next'
import {OrderProps} from 'pages/order/order.types'
import {useLocale} from 'hooks/other/other.hooks'
import useOrder from 'pages/order/order.hook'
import CartItem from 'components/cart-item/cart-item.component'
import {baseURL} from 'utils/api/api.utils'
import OrderItem from 'components/order/order-item/order-item.component'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        let query = context.query
        const {id} = query
        const {data} = await apiCall(() => api.get(`checkout/order-by-id/${id}`))
        if (!data) {
            return {notFound: true}
        }
        return {props: {order: data}}
    }
)

const Order: NextPage<OrderProps> = (props) => {
    const {order} = props

    const {transl, colors} = useOrder(props)

    console.log('order', order)

    return (
        <div className={'container order'}>
            <div className={'order__title'}>
                {transl.infoAbout}
            </div>
            <div className={'order__items'}>
                <div className={'order__items-title'}>
                    {transl.items}
                </div>
                {order.products.map((elem, index) => (
                    <OrderItem key={index} {...elem} color={colors[index]}/>
                ))}
            </div>
            {/*<div className={'grid-container'}>*/}
            {/*    <img className={'grid-element-0'} src={'http://localhost:5000/images/1ToHK0UUM2NkjYhWoLdr77DCCDc0RCmVU'}/>*/}
            {/*    <div className={'grid-element-1'}>*/}
            {/*        element 1*/}
            {/*    </div>*/}
            {/*    <div className={'grid-element-2'}>*/}
            {/*        element 2*/}
            {/*    </div>*/}
            {/*    <div className={'grid-element-3'}>*/}
            {/*        element 3*/}
            {/*    </div>*/}
            {/*    <div className={'grid-element-4'}>*/}
            {/*        element 4*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Order
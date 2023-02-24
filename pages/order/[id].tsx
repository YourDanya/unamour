import {wrapper} from 'redux/store'
import {apiCall} from 'utils/api/api.utils'
import {api} from 'utils/api/api.utils'
import {NextPage} from 'next'
import {OrderPageProps} from 'pages/order/order-page.types'
import Order from 'components/order/order.component'
import useOrderPage from 'pages/order/order-page.hook'
import ModalContent from 'components/common/modal-content/modal-content.component'
import Modal from 'components/common/modal/modal.component'

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

const OrderPage: NextPage<OrderPageProps> = (props) => {
    const {order, transl} = useOrderPage()

    return (<>
        {order?.payment?.status === 'approved' ? (
            <Order {...order}/>
        )  : (
            <>
                <ModalContent className={'order-page__modal-content'} active={true}>
                    <div className={'order-page__message'}>
                        {order?.payment?.status === 'declined' ? transl.declined : transl.pending}
                    </div>
                </ModalContent>
                <Modal active={true}/>
            </>
        )}
    </>)
}

export default OrderPage
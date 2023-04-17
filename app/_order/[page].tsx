import {NextPage} from 'next'
import {OrderPageProps} from 'pages/order/order-page.types'
import useOrderPage from 'pages/order/order-page.hook'
import ModalContent from 'components/common/modal-content/modal-content.component'
import Modal from 'components/common/modal/modal.component'
import Spinner from 'components/common/spinner/spinner.component'
import Link from 'next/link'
import Order from 'components/order/order.component'
import {wrapper} from 'redux/store'

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async (context) => {
        return {props: {}}
    }
)

const OrderPage: NextPage<OrderPageProps> = () => {
    const {order, transl} = useOrderPage()
    const status = order?.payment?.status
    const method = order?.payment?.method
    return (<>
        {order && (status === 'approved' || status === 'refunded' || method === 'afterpayment') ? (
            <Order {...order}/>
        ) : (
            <>
                <ModalContent
                    className={`order-page__modal-content ${status === 'declined' ? 'order-page__modal-content--declined' : ''}`}
                    active={true}
                >
                    {status === 'declined' ? (
                        <>
                            <div className={'order-page__message'}>
                                {transl.declined}
                            </div>
                            <Link className={'order-page__link'} href={'/components'}>
                                {transl.backToCart}
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className={'order-page__message'}>
                                {transl.pending}
                            </div>
                            <Spinner className={'order-page__spinner'}/>
                        </>
                    )}
                </ModalContent>
                <Modal active={true}/>
            </>
        )}
    </>)
}

export default OrderPage
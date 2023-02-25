import {NextPage} from 'next'
import {OrderPageProps} from 'pages/order/order-page.types'
import useOrderPage from 'pages/order/order-page.hook'
import ModalContent from 'components/common/modal-content/modal-content.component'
import Modal from 'components/common/modal/modal.component'
import Spinner from 'components/common/spinner/spinner.component'
import Link from 'next/link'
import Order from 'components/order/order.component'

const OrderPage: NextPage<OrderPageProps> = () => {
    const {order, transl} = useOrderPage()
    const status = order?.payment?.status
    return (<>
        {order && status === 'approved' ? (
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
                            <Link className={'order-page__link'} href={'/cart'}>
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
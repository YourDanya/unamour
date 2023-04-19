'use client'

import {NextPage} from 'next'
import OrderInfo from 'app/[locale]/order/_components/order-info/order-info.component'
import Link from 'next/link'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import useOrderPage from 'app/[locale]/order/_components/order.hook'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import 'app/[locale]/order/_components/order.styles.sass'

const Order: NextPage = () => {
    const {order, transl, method, status} = useOrderPage()

    return (
        <>
            {order && (status === 'approved' || status === 'refunded' || method === 'afterpayment') ? (
                <OrderInfo {...order}/>
            ) : (
                <>
                    <ModalContent
                        className={`order-modal ${status === 'declined' ? 'order-modal--declined' : ''}`}
                        active={true}
                    >
                        {status === 'declined' ? (
                            <>
                                <div className={'order-modal__message'}>
                                    {transl.declined}
                                </div>
                                <Link className={'order-modal__link'} href={'/_components'}>
                                    {transl.backToCart}
                                </Link>
                            </>
                        ) : (
                            <>
                                <div className={'order-modal__message'}>
                                    {transl.pending}
                                </div>
                                <Spinner className={'order-modal__spinner'}/>
                            </>
                        )}
                    </ModalContent>
                    <Modal active={true}/>
                </>
            )}
        </>)
}

export default Order
'use client'

import {NextPage} from 'next'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import useOrder from 'app/[locale]/order/[id]/_components/order.hook'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import OrderInfo from 'app/[locale]/order/[id]/_components/order-info/order-info.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import Link from 'next/link'

const Order = () => {
    const {order, transl, method, status} = useOrder()

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
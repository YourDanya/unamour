import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getClientServiceLayout} from 'components/client-service/service.component'
import useOrderTracking from 'pages/client-service/order-tracking/order-tracking.hook'

type OrderTrackingProps = {}

const OrderTracking: NextPageWithLayout<OrderTrackingProps> = () => {
    const {transl} = useOrderTracking()

    return (
        <div className={'components-order-tracking'}>
            <div className="service__title">
                {transl.title}
            </div>
            <div className="service__text">
                {transl.text}
            </div>
        </div>
    )
}

OrderTracking.getLayout = getClientServiceLayout

export default OrderTracking
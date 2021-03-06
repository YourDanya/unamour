import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import {NextPageWithLayout} from "../../../types/types";
import WithIntern from "../../../components/hoc/with-intern/with-intern";
import {OrderTrackingContent} from "./order-tracking.content";

type OrderTrackingProps = {
    content: typeof OrderTrackingContent.ua
}

const OrderTracking: NextPageWithLayout<OrderTrackingProps> = ({content}) => {
    return (
        <div className={'order-tracking'}>
            <div className="service__title">
                {
                    content.title
                }
            </div>
            <div className="service__text">
                {
                    content.text
                }
            </div>
        </div>
    )
}

OrderTracking.getLayout = getClientServiceLayout

export default WithIntern(OrderTracking, OrderTrackingContent)
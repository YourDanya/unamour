import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import {NextPageWithLayout} from "../../../types/types";
import InternHoc from "../../../components/internationalization-hoc/internationalization-hoc";
import {OrderTrackingContent} from "./order-tracking.content";

type OrderTrackingProps = {
    content: typeof OrderTrackingContent.ua
}

const OrderTracking: NextPageWithLayout<OrderTrackingProps> = ({content}) => {
    return (
        <div className={'order-tracking'}>
            <div className="client-service__page-title">
                {
                    content.title
                }
            </div>
            <div className="client-service__page-text">
                {
                    content.text
                }
            </div>
        </div>
    )
}

OrderTracking.getLayout = getClientServiceLayout

export default InternHoc(OrderTracking, OrderTrackingContent)
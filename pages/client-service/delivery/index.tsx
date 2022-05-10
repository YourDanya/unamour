import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import {DeliveryContent} from "./delivery.content";
import {NextPageWithLayout} from "../../../types/types";
import InternHoc from "../../../components/internationalization-hoc/internationalization-hoc";

type DeliveryContentProps = {
    content: typeof DeliveryContent.ua
}

const Delivery: NextPageWithLayout<DeliveryContentProps> = ({content}) => {
    return (
        <div className={'delivery'}>
            <div className="client-service__page-title">
                {content.title1}
            </div>
            <div className="client-service__page-subtitle">
                {content.subtitle1}
            </div>
            <div className="client-service__page-text">
                {content.text1}
                <br/><br/>
                {content.text2}
            </div>
            <div className="client-service__page-subtitle">
                {content.subtitle2}
            </div>
            <div className="client-service__page-text">
                {content.text3}
            </div>
            <div className="client-service__page-subtitle">
                {content.subtitle3}
            </div>
            <div className="client-service__page-text">
                {content.text4}
            </div>
        </div>
    )
}

Delivery.getLayout = getClientServiceLayout

export default InternHoc(Delivery, DeliveryContent)
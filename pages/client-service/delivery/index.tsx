import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getClientServiceLayout} from 'components/client-service/service.component'
import WithIntern from 'components/hoc/with-intern/with-intern'
import {DeliveryContent} from 'pages/client-service/delivery/delivery.content'

type DeliveryContentProps = {
    content: typeof DeliveryContent.ua
}

const Delivery: NextPageWithLayout<DeliveryContentProps> = ({content}) => {
    return (
        <div className={'delivery'}>
            <div className="service__title">
                {content.title1}
            </div>
            <div className="service__subtitle service__subtitle--first">
                {content.subtitle1}
            </div>
            <div className="service__text">
                {content.text1}
                <br/><br/>
                {content.text2}
            </div>
            <div className="service__subtitle">
                {content.subtitle2}
            </div>
            <div className="service__text">
                {content.text3}
            </div>
            <div className="service__subtitle">
                {content.subtitle3}
            </div>
            <div className="service__text">
                {content.text4}
            </div>
        </div>
    )
}

Delivery.getLayout = getClientServiceLayout

export default WithIntern(Delivery, DeliveryContent)
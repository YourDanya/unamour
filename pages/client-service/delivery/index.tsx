import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getClientServiceLayout} from 'components/client-service/service.component'
import useDelivery from 'pages/client-service/delivery/delivary.hook'

type DeliveryContentProps = {}

const Delivery: NextPageWithLayout<DeliveryContentProps> = () => {

    const {transl} = useDelivery()

    return (
        <div className={'delivery'}>
            <div className="service__title">
                {transl.title1}
            </div>
            <div className="service__subtitle service__subtitle--first">
                {transl.subtitle1}
            </div>
            <div className="service__text">
                {transl.text1}
                <br/><br/>
                {transl.text2}
            </div>
            <div className="service__subtitle">
                {transl.subtitle2}
            </div>
            <div className="service__text">
                {transl.text3}
            </div>
            <div className="service__subtitle">
                {transl.subtitle3}
            </div>
            <div className="service__text">
                {transl.text4}
            </div>
        </div>
    )
}

Delivery.getLayout = getClientServiceLayout

export default Delivery
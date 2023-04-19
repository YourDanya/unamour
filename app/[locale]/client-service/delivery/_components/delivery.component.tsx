import React from 'react'
import useDelivery from 'app/[locale]/client-service/delivery/_components/delivery.hook'

type DeliveryContentProps = {}

const Delivery = () => {
    const {children} = useDelivery()

    return (
        <div className={'delivery'}>
            {children}
        </div>
    )
}


export default Delivery


// <div className="service__title">
//     {transl.title1}
// </div>
// <div className="service__subtitle service__subtitle--first">
//     {transl.subtitle1}
// </div>
// <div className="service__text">
//     {transl.text1}
//     <br/><br/>
//     {transl.text2}
// </div>
// <div className="service__subtitle">
//     {transl.subtitle2}
// </div>
// <div className="service__text">
//     {transl.text3}
// </div>
// <div className="service__subtitle">
//     {transl.subtitle3}
// </div>
// <div className="service__text">
//     {transl.text4}
// </div>
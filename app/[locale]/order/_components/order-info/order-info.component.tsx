import {FC} from 'react'
import OrderItem from 'app/[locale]/order/_components/order-item/order-item.component'
import {Order} from 'app/[locale]/_redux/checkout/checkout.types'
import useOrderInfo from 'app/[locale]/order/_components/order-info/order-info.hook'
import 'app/[locale]/order/_components/order-info/order-info.styles.sass'

const OrderInfo: FC<Order> = (props) => {
    const {transl, colors} = useOrderInfo(props)

    return (
        <div className={'container order'}>
            <div className={'order__title'}>
                {transl.infoAbout}
            </div>
            <div className={'order__items'}>
                <div className={'order__items-title'}>
                    {transl.items}
                </div>
                {props.products.map((elem, index) => (
                    <OrderItem key={index} {...elem} color={colors[index]}/>
                ))}
            </div>
            <div className={'order__paragraph'}>
                <div className={'order__paragraph-title'}>
                    {transl.payment}
                </div>
                <div className={'order__paragraph-properties'}>
                    <div className="order__paragraph-property-name">
                        {transl.status}:
                    </div>
                    <div className="order__paragraph-property-value">
                        {props.payment.status === 'approved' ? (
                            transl.approved
                        ) : props.payment.status === 'refunded' ? (
                            transl.refunded
                        ) : (
                            transl.pending
                        )}
                    </div>
                    <div className="order__paragraph-property-name">
                        {transl.method}:
                    </div>
                    <div className="order__paragraph-property-value">
                        {props.payment.method === 'online' ? transl.payByCard : transl.payOnDelivery}
                    </div>
                    <div className="order__paragraph-property-name">
                        {transl.amount}:
                    </div>
                    <div className="order__paragraph-property-value">
                        {props.payment.amount}
                    </div>
                </div>
            </div>
            <div className={'order__paragraph'}>
                <div className={'order__paragraph-title'}>
                    {transl.delivery}
                </div>
                <div className={'order__paragraph-properties'}>
                    <div className={'order__paragraph-property-name'}>
                        {transl.deliveryService}:
                    </div>
                    <div className={'order__paragraph-property-value'}>
                        {transl.novaPoshta}
                    </div>
                    <div className={'order__paragraph-property-name'}>
                        {transl.deliveryDate}:
                    </div>
                    <div className={'order__paragraph-property-value'}>
                        {props.delivery.EstimatedDeliveryDate}
                    </div>
                    <div className={'order__paragraph-property-name'}>
                        {transl.region}
                    </div>
                    <div className={'order__paragraph-property-value'}>
                        {props.delivery.nextDestination.RecipientArea}
                    </div>
                    <div className={'order__paragraph-property-name'}>
                        {transl.city}
                    </div>
                    <div className={'order__paragraph-property-value'}>
                        {props.delivery.nextDestination.RecipientCityName}
                    </div>
                    {props.delivery.nextDestination.ServiceType === 'DoorsWarehouse' ? (
                        <>
                            <div className={'order__paragraph-property-name'}>
                                {transl.serviceType}
                            </div>
                            <div className="order__paragraph-property-value">
                                {transl.toWareHouse}
                            </div>
                            <div className={'order__paragraph-property-name'}>
                                {transl.office}
                            </div>
                            <div className="order__paragraph-property-value">
                                {props.delivery.nextDestination.RecipientAddressName}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={'order__paragraph-property-name'}>
                                {transl.serviceType}
                            </div>
                            <div className="order__paragraph-property-value">
                                {transl.toAddress}
                            </div>
                            <div className={'order__paragraph-property-name'}>
                                {transl.street}
                            </div>
                            <div className="order__paragraph-property-value">
                                {props.delivery.nextDestination.RecipientAddressName}
                            </div>
                            <div className={'order__paragraph-property-name'}>
                                {transl.house}
                            </div>
                            <div className="order__paragraph-property-value">
                                {props.delivery.nextDestination.RecipientHouse}
                            </div>
                            <div className={'order__paragraph-property-name'}>
                                {transl.apartment}
                            </div>
                            <div className="order__paragraph-property-value">
                                {props.delivery.nextDestination.RecipientFlat}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={'order__paragraph'}>
                <div className={'order__paragraph-title'}>
                    {transl.clientInfo}
                </div>
                <div className={'order__paragraph-properties'}>
                    <div className="order__paragraph-property-name">
                        {transl.name}:
                    </div>
                    <div className="order__paragraph-property-value">
                        {props.client.name}
                    </div>
                    <div className="order__paragraph-property-name">
                        {transl.email}:
                    </div>
                    <div className="order__paragraph-property-value">
                        {props.client.email}
                    </div>
                    <div className="order__paragraph-property-name">
                        {transl.phone}:
                    </div>
                    <div className="order__paragraph-property-value">
                        {props.client.phone}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo
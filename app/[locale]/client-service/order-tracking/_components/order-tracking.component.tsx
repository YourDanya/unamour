import useOrderTracking from 'app/[locale]/client-service/order-tracking/_components/order-tracking.hook'

const OrderTracking  = () => {
    const {transl} = useOrderTracking()

    return (
        <div className={'_components-order-tracking'}>
            <div className="service__title">
                {transl.title}
            </div>
            <div className="service__text">
                {transl.text}
            </div>
        </div>
    )
}

export default OrderTracking
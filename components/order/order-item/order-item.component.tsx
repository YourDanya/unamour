import {FC} from 'react'
import {OrderItemProps} from 'components/order/order-item/order-item.types'
import {baseURL} from 'utils/api/api.utils'
import useOrderItem from 'components/order/order-item/order-item.hook'

const OrderItem: FC<OrderItemProps> = (props) => {
    const {images, name, count, size, color} = props
    const {transl} = useOrderItem()

    return (
        <div className={'order__item'}>
            <img
                className={'order__item-img'}
                src={`${baseURL}/images/${images[0]}`}
                alt={'order item image'}
            />
            <div className={'order__item-about'}>
                <div className={'order__item-name'}>
                    {name}
                </div>
                <div className={'order__item-properties'}>
                    <div className={'order__item-property order__item-color'}>
                        {transl.color}:
                        <div className={'order__item-color-bg'} style={{backgroundColor: color}}/>
                    </div>
                    <div className={'order__item-property order__item-size'}>
                        {transl.size}:
                        <div className={'order__item-size-value'}>
                            {size}
                        </div>
                    </div>
                    <div className={'order__item-property order__item-count'}>
                        <div className={'order__item-property-name'}>
                            {transl.count}:
                        </div>
                        <div className={'order__item-property-val'}>
                            {count}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem
import {FC} from 'react'
import useOrder from 'components/cart/order/order.hook'
import Button from 'components/common/button/button.component'
import Link from 'next/link'
import presentImg from '/public/icons/present.svg'
import {OrderProps} from 'components/cart/order/order.types'

const Order: FC<OrderProps> = (props) => {
    const {total, className, onSubmit, createOrder} = props
    const {transl} = useOrder()

    return (
        <div className={`cart-order ${className ?? ''}`}>
            <div className="cart-order__title">{transl.title}</div>
            <div className="cart-order__properties">
                <div className="cart-order__property">
                    <div className="cart-order__label">{transl.cost}</div>
                    <div className="cart-order__value">{total} {transl.currency}</div>
                </div>
                <div className="cart-order__property">
                    <div className="cart-order__label">{transl.discount}</div>
                    <div className="cart-order__value">0 {transl.currency}</div>
                </div>
                <div className="cart-order__property">
                    <div className="cart-order__label">{transl.delivery}</div>
                    <div className="cart-order__value">0 {transl.currency}</div>
                </div>
                <div className="cart-order__property">
                    <div className="cart-order__label">{transl.total}</div>
                    <div className="cart-order__value">{total} {transl.currency}</div>
                </div>
            </div>
            <Button className={'cart-order__button'} onClick={onSubmit} loading={createOrder.loading}>
                {transl.makeOrder}
            </Button>
            <Button className={'cart-order__button cart-order__button--present'} onClick={() => {}}>
                <>
                    {transl.hint}
                    <img className="cart-order__present-img" src={presentImg.src} alt={'present'}/>
                </>
            </Button>
            <div className="cart__policy">
                {transl.policy}
                <Link href={'/'} className="cart-order__policy-link">
                    {transl.policyLink}
                </Link>
            </div>
        </div>
    );
}

export default Order
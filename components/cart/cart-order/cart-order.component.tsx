import {FC} from 'react'
import useCartOrder from 'components/cart/cart-order/cart-order.hook'
import Button from 'components/common/button/button.component'
import Link from 'next/link'
import presentImg from '/public/icons/present.svg'
import {CartOrderProps} from 'components/cart/cart-order/cart-order.types'

const CartOrder: FC<CartOrderProps> = (props) => {
    const {total, onSubmit, createOrder} = props
    const {transl} = useCartOrder()

    return (
        <div className={`cart-order`}>
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
    )
}

export default CartOrder
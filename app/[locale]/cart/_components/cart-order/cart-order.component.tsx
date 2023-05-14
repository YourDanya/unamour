import presentImg from '/public/icons/present.svg'
import {CartOrderProps} from 'app/[locale]/cart/_components/cart-order/cart-order.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import {FC} from 'react'
import Link from 'next/link'
import useCartOrder from 'app/[locale]/cart/_components/cart-order/cart-order.hook'

const CartOrder: FC<CartOrderProps> = (props) => {
    const {total, onSubmit, loading} = props
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
            <Button className={'cart-order__button'} onClick={onSubmit} loading={loading}>
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
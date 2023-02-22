import React from 'react'
import Order from 'components/cart/order/order.component'
import useCart from 'pages/cart/cart.hook'
import Discount from 'components/cart/discount/discount.component'
import CartForm from 'components/cart/cart-form/cart-form.component'
import CartItem from 'components/cart-item/cart-item.component'
import {NextPage} from 'next'

const Cart: NextPage = () => {
    const {cartItems, total, onSubmit, createOrder, formRef, ...otherProps} = useCart()

    return (
        <div className='cart'>
            <div className='cart__content'>
                <div className='cart__items'>
                    {cartItems.map((props, index) => (
                        <CartItem key={props.common.slug + index}  {...props}/>
                    ))}
                </div>
                <Discount/>
                <CartForm {...otherProps}/>
            </div>
            <Order className={'cart__order'} total={total} onSubmit={onSubmit} createOrder={createOrder}/>
            <form
                className={'cart__payment-form'}
                method="post"
                action="https://secure.wayforpay.com/pay"
                acceptCharset="utf-8"
                ref={formRef}
            >
                {/*<input name="merchantAuthType" value="SimpleSignature"/>*/}
                {/*<input name="merchantTransactionSecureType" value="AUTO"/>*/}
                {/*<input type="hidden" name="orderTimeout" value="5"/>*/}
                {/*<input name="clientFirstName" value="Вадим"/>*/}
                {/*<input name="clientPhone" value="+380992856055"/>*/}
                {/*<input name="clientLastName" value="Баранівський"/>*/}
                {/*<input name="clientAddress" value="пр. Гагарина, 12"/>*/}
                {/*<input name="clientCity" value="Днепропетровск"/>*/}
                {/*<input name="clientEmail" value="some@mail.com"/>*/}
            </form>
        </div>
    )
}

export default Cart
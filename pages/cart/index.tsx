import React from 'react'
import CartOrder from 'components/cart/cart-order/cart-order.component'
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
            <CartOrder className={'cart__order'} total={total} onSubmit={onSubmit} createOrder={createOrder}/>
            <form
                className={'cart__payment-form'}
                method="post"
                action="https://secure.wayforpay.com/pay"
                acceptCharset="utf-8"
                ref={formRef}
            />
        </div>
    )
}

export default Cart
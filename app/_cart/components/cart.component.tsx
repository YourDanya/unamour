import React from 'react'
import CartOrder from 'components/cart/cart-order/cart-order.component'
import useCart from 'pages/cart/cart.hook'
import Discount from 'components/cart/discount/discount.component'
import CartForm from 'components/cart/cart-form/cart-form.component'
import CartItem from 'components/cart-item/cart-item.component'
import {NextPage} from 'next'
import Link from 'next/link'
import shoppingCart from '/public/icons/big-shopping-cart.svg'
import 'app/_cart/components/cart.styles'

const Cart: NextPage = () => {
    const {cartItems, total, onSubmit, createOrder, formRef, transl, ...otherProps} = useCart()

    return (
        <div className="cart">
            {cartItems.length === 0 ? (
                <div className={'cart__empty'}>
                    <img className={'cart__empty-img'} src={shoppingCart.src}/>
                    <div className={'cart__empty-title'}>
                        {transl.empty}
                    </div>
                    <Link className={'cart__empty-link'} href={'/favorites'}>
                        {transl.favorites}
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart__content">
                        <div className="cart__items">
                            {cartItems.map((props, index) => (
                                <CartItem key={props.common.slug + index}  {...props}/>
                            ))}
                        </div>
                        <Discount/>
                        <CartForm {...otherProps} transl={transl}/>
                    </div>
                    <CartOrder total={total} onSubmit={onSubmit} createOrder={createOrder}/>
                    <form
                        className={'cart__payment-form'}
                        method="post"
                        action="https://secure.wayforpay.com/pay"
                        acceptCharset="utf-8"
                        ref={formRef}
                    />
                </>
            )}
        </div>
    )
}

export default Cart
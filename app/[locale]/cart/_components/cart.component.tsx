'use client'

import React from 'react'
import {NextPage} from 'next'
import Link from 'next/link'
import shoppingCart from '/public/icons/big-shopping-cart.svg'
import useCart from 'app/[locale]/cart/_components/cart.hook'
import Discount from 'app/[locale]/cart/_components/discount/discount.component'
import CartForm from 'app/[locale]/cart/_components/cart-form/cart-form.component'
import CartItem from 'app/_common/components/cart-item/cart-item.component'
import CartOrder from 'app/[locale]/cart/_components/cart-order/cart-order.component'

const Cart: NextPage = () => {
    const {cartItems, total, onSubmit, loading, formRef, transl, ...otherProps} = useCart()

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
                                <CartItem key={props.slug + index}  {...props}/>
                            ))}
                        </div>
                        <Discount/>
                        <CartForm {...otherProps} transl={transl}/>
                    </div>
                    <CartOrder total={total} onSubmit={onSubmit} loading={loading}/>
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
import React from 'react'
import Order from 'components/cart/order/order.component'
import useCart from 'pages/cart/cart.hook'
import Discount from 'components/cart/discount/discount.component'
import CartForm from 'components/cart/cart-form/cart-form.component'
import CartItem from 'components/cart-item/cart-item.component'
import {NextPage} from 'next'

const Cart: NextPage = () => {

    const {cartItems, total} = useCart()

    return (
        <div className='cart'>
            <div className='cart__content'>
                <div className='cart__items'>
                    {cartItems.map((props, index) => (
                        <CartItem key={props.data.slug + index}  {...props}/>
                    ))}
                </div>
                <Discount/>
                <CartForm/>
            </div>
            <Order className={'cart__order'} total={total}/>
        </div>
    )
}

export default Cart
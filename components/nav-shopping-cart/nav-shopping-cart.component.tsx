import React, {useEffect, useState} from 'react'
import shoppingCart from '/public/icons/big-shopping-cart.svg'
import {useSelector} from "react-redux";
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.slice";
import Link from 'next/link';
import CartItem from "../cart-item/cart-item.component";

const NavShoppingCart: React.FC = () => {

    const cartItems = useSelector(selectCartItems)

    const total = useSelector(selectTotalPrice)

    console.log(total)

    return (
        <div className={`nav-cart`}>
            {cartItems ? (
                <>
                    <div className="nav-cart__title">КОРЗИНА</div>
                    <div className={'nav-cart__items'}>
                        {cartItems.map((props, index) => <CartItem key={props.data.slug + index}  {...props}/>)}
                    </div>
                    <div className="nav-cart__total">
                        <div className="nav-cart__total-label">РАЗОМ:</div>
                        <div className="nav-cart__total-price">{total} ₴</div>
                    </div>
                </>
            ) : (
                <>
                    <img className="nav-cart__icon" src={shoppingCart.src} alt={'nav-cart-icon'}/>
                    <div className={'nav-cart__empty'}>
                        ВАША КОРЗИНА ПУСТА
                    </div>
                </>
            )}
            <button className={'nav-cart__button nav-cart__button--black'}>
                {cartItems ? 'ОФРМИТИ ЗАМОВЛЕННЯ' : 'ДИВИТИСЯ ОБРАНЕ'}
            </button>
            <button className={'nav-cart__button nav-cart__button--white'}>
                ПРОДОВЖИТИ ПОКУПКИ
            </button>
        </div>
    )
}

export default NavShoppingCart
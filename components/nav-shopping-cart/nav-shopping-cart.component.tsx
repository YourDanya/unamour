import React, {useEffect, useState} from 'react'
import Cross from "../cross/cross.component";
import NavShoppingCartItem, {NavShoppingCartItemProps} from "./nav-shopping-cart-item/nav-shopping-cart-item.component";
import shoppingCart from '/public/icons/big-shopping-cart.svg'

const NavShoppingCart: React.FC = () => {

    const [cartItems, setCartItems] = useState<NavShoppingCartItemProps[] | null>(null)

    return (
        <div className={`nav-shopping-cart`}>

            <img className="nav-shopping-cart__icon" src={shoppingCart.src} alt={'nav-shopping-cart-icon'}/>
            {
                cartItems ? (
                    <div className={'nav-shopping-cart__items'}>
                        {
                            cartItems.map(({name, imgUrl}) =>
                                <NavShoppingCartItem imgUrl={imgUrl} name={name}/>)
                        }
                    </div>
                ) : (
                    <div className={'nav-shopping-cart__empty'}>
                        ВАША КОРЗИНА ПУСТА
                    </div>
                )
            }
            <button className={'nav-shopping-cart__button nav-shopping-cart__button--black'}>
                ДИВИТИСЯ ОБРАНЕ
            </button>
            <button className={'nav-shopping-cart__button nav-shopping-cart__button--white'}>
                ПРОДОВЖИТИ ПОКУПКИ
            </button>
        </div>
    )
}

export default NavShoppingCart
import React from 'react'
import shoppingCart from '/public/icons/big-shopping-cart.svg'
import CartItem from 'components/cart-item/cart-item.component'
import useNavCart from 'components/nav/nav-cart/nav-cart.hook'
import Link from 'next/link'

const NavCart: React.FC = () => {

    const {cartItems, total, length} = useNavCart()

    return (
        <div className={`nav-cart`}>
            {length>0 ? (
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
            <Link href={length>0? '/cart' : '/favorite'}>
                <a className="nav-cart__button nav-cart__link">
                    {length>0? 'ОФРМИТИ ЗАМОВЛЕННЯ' : 'ДИВИТИСЯ ОБРАНЕ'}
                </a>
            </Link>
            <button className={'nav-cart__button nav-cart__button--white'}>
                ПРОДОВЖИТИ ПОКУПКИ
            </button>
        </div>
    )
}

export default NavCart
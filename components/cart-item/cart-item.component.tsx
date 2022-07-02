import React from "react";
import Link from "next/link";
import {CartItemObject} from "../../redux/cart/cart.slice";

const CartItem: React.FC<CartItemObject> = ({data: {name, category, slug, slugCategory, price, images, size, color}, quantity}) => {
    return (
        <div className={'cart-item'} key={name}>
            <div className='close cart-item__close'/>
            <Link href={`shop-items/${slugCategory}/${slug}`}>
                <img className='cart-item__img' src={images[0]}/>
            </Link>
            <div className='cart-item__about'>
                <div className='cart-item__name'>{name}</div>
                <div className='cart-item__price-block'>
                    <div className='cart-item__price-label'>Ціна</div>
                    <div className='cart-item__price'>{price} ₴</div>
                </div>
                <div className='cart-item__properties'>
                    <div className='cart-item__property'>
                        <div className='cart-item__property-label'>Колір</div>
                        <div className='cart-item__property-value'>
                            <div className='cart-item__color' style={{backgroundColor: 'black'}}/>
                        </div>
                    </div>
                    <div className='cart-item__property'>
                        <div className='cart-item__property-label'>Розмір</div>
                        <div className='cart-item__property-value'>
                            <div className='cart-item__size'>{size}</div>
                        </div>
                    </div>
                    <div className='cart-item__property'>
                        <div className='cart-item__property-label'>Кількість</div>
                        <div className='cart-item__property-value'>
                            <div className='cart-item__quantity-block'>
                                <div className="minus cart-item__minus"/>
                                <div className="cart-item__quantity">{quantity}</div>
                                <div className="plus cart-item__plus"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
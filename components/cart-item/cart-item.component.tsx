import React from 'react'
import {CartItemObject} from 'redux/cart/cart.slice'
import useCartItem from 'components/cart-item/cart-item.hook'
import Link from 'next/link'


const CartItem: React.FC<CartItemObject> = (props) => {

    const {data: {name, category, slug, slugCategory, price, images, size, color}, quantity} = props

    const {increase, decrease, remove, cartPage, transl} = useCartItem(props)

    return (
        <div className={'cart-item'} key={name}>
            <div className='close cart-item__close' onClick={remove}/>
            <Link href={`shop-items/${slugCategory}/${slug}`}>
                <a className='cart-item__link'>
                    <img className='cart-item__img' src={images[0]}/>
                </a>
            </Link>
            <div className='cart-item__name'>{name}</div>
            <div className='cart-item__price-block'>
                <div className='cart-item__price-label'>{transl.price}</div>
                <div className='cart-item__price'>{price} ₴</div>
            </div>
            <div className='cart-item__properties'>
                <div className='cart-item__property'>
                    <div className='cart-item__property-label'>{transl.color}</div>
                    <div className='cart-item__property-value'>
                        <div className='cart-item__color' style={{backgroundColor: color.code}}/>
                    </div>
                </div>
                <div className='cart-item__property'>
                    <div className='cart-item__property-label'>{transl.size}</div>
                    <div className='cart-item__property-value'>
                        <div className='cart-item__size'>{size}</div>
                    </div>
                </div>
                <div className='cart-item__property'>
                    <div className='cart-item__property-label'>{transl.quantity}</div>
                    <div className='cart-item__property-value'>
                        <div className='cart-item__quantity-block'>
                            <div className="minus cart-item__minus" onClick={decrease}/>
                            <div className="cart-item__quantity">{quantity}</div>
                            <div className="plus cart-item__plus" onClick={increase}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
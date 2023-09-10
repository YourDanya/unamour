'use client'

import {FC} from 'react'
import Link from 'next/link'
import {CartItem} from 'app/_common/store/cart/cart.types'
import {baseURL} from 'app/_common/utils/api/api.utils'
import useCartItem from 'app/_common/components/cart-item/cart-item.hook'
import LoadImage from 'app/_common/components/load-image/load-image.component'

const CartItem: FC<CartItem> = (props) => {
    const {slug, slugCategory, price, images, size, color, quantity} = props
    const {onIncrease, onDecrease, onRemove, transl, name, code} = useCartItem(props)

    return (
        <div className={'cart-item'}>
            <div className='close cart-item__close' onClick={onRemove}/>
            <Link href={`shop-items/${slugCategory}/${slug}?color=${color}`} className='cart-item__link'>
                <LoadImage
                    className='cart-item__img'
                    src={images[0].url}
                    alt={'item image'}
                    width={85}
                    height={85 * 4 / 3}
                />
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
                        <div className='cart-item__color' style={{backgroundColor: code}}/>
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
                            <div className="minus cart-item__minus" onClick={onDecrease}/>
                            <div className="cart-item__quantity">{quantity}</div>
                            <div className="plus cart-item__plus" onClick={onIncrease}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
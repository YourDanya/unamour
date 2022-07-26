import React, {useState} from 'react'
import Link from "next/link";
import {ClientItem} from "../../redux/shop-items/shop-items.types";

const ShopItemPreview: React.FC<ClientItem> = (
    {images, name, price,slug, slugCategory, ...otherProps}) => {

    const [hovered, setHovered] = useState(false)

    const handleMouse = () => {
        setHovered(!hovered)
    }

    return (
        <div className='shop-item-preview'>
            <div className={`shop-item-preview__img-wrapper`}
                 onMouseEnter={handleMouse}
                 onMouseLeave={handleMouse}>
                <Link href={`/shop-items/${slugCategory}/${slug}`}>
                    <img className={`shop-item-preview__img ${hovered? 'shop-item-preview__img--hidden' : ''}`}
                         src={images[0]} alt="preview item image"/>
                </Link>
                <Link href={`/shop-items/${slugCategory}/${slug}`}>
                    <img className={`shop-item-preview__img ${hovered? '' : 'shop-item-preview__img--hidden'} `}
                         src={images[1]} alt="preview item image"/>
                </Link>
            </div>

            <div className={'shop-item-preview__bottom'}>
                <div className="shop-item-preview__name">
                    {name}
                </div>
                <div className="shop-item-preview__price">
                    {price} ₴
                </div>
            </div>
        </div>
    )
}

export default ShopItemPreview
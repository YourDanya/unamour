import React, {useState} from 'react'
import Link from "next/link";
import {ClientItem} from "../../redux/shop-items/shop-items.types";
import useShopItemPreview from "./shop-item-preview.hook";

const ShopItemPreview: React.FC<ClientItem> = (props) => {

    const {images, name, price, slug, slugCategory, color, hovered, handleMouse} = useShopItemPreview(props)

    return (
        <div className='shop-item-preview'>
            <div className={`shop-item-preview__img-wrapper`} onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
                <Link href={`/shop-items/${slugCategory}/${slug}?color=${color.slug}`}>
                    <a>
                        <img
                            className={`shop-item-preview__img ${hovered ? 'shop-item-preview__img--hidden' : ''}`}
                            src={images[0]} alt="preview item image"
                        />
                        <img
                            className={`shop-item-preview__img ${hovered ? '' : 'shop-item-preview__img--hidden'} `}
                            src={images[1]} alt="preview item image"
                        />
                    </a>
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
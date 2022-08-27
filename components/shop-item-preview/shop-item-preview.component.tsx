import React, {useState} from 'react'
import Link from "next/link"
import {ClientItem} from "../../redux/shop-items/shop-items.types"
import useShopItemPreview from "./shop-item-preview.hook"
import LoadImage from "../common/load-image/load-image.component"

const ShopItemPreview: React.FC<ClientItem> = (props) => {

    const {images, name, price, slug, slugCategory, color} = props
    const {handleMouse, loaded, handleLoaded, hovered, handleClick} = useShopItemPreview(props)
    
    return (
        <div className='shop-item-preview'>
            {/*<Link href={`/shop-items/${slugCategory}/${slug}?color=${color.slug}`}>*/}
                <a className={`shop-item-preview__link`} onMouseEnter={handleMouse} onMouseLeave={handleMouse} onClick={handleClick}>
                    <LoadImage
                        dataAttr={'0'}
                        loaded={loaded[0]}
                        handleLoaded={handleLoaded}
                        className={`shop-item-preview__img ${hovered ? 'shop-item-preview__img--hidden' : ''}`}
                        src={images[0]}
                        alt="preview item image"
                    />
                    <LoadImage
                        dataAttr={'1'}
                        loaded={loaded[1]}
                        handleLoaded={handleLoaded}
                        className={`shop-item-preview__img ${hovered ? '' : 'shop-item-preview__img--hidden'} `}
                        src={images[1]}
                        alt="preview item image"
                    />
                </a>
            {/*</Link>*/}
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
import React, {useState} from 'react'
import Link from "next/link";
import {ShopItemObject} from "../../redux/shop-items/shop-items.slice";

const ShopItemPreview: React.FC<ShopItemObject['ua']> = ({images, name, price, ...otherProps}) => {
    const [img, setImg] = useState<0 | 1>(0)
    return (
        <div className={'shop-item-preview'}>
            {/*<Link href={'/'}>*/}
            {/*    <img className={'shop-item-preview__img'} src={images[0]} alt="preview item image"/>*/}
            {/*</Link>*/}
            {/*<div className="shop-item-preview__name">*/}
            {/*    {name}*/}
            {/*</div>*/}
            {/*<div className="shop-item-preview__price">*/}
            {/*    {price}*/}
            {/*</div>*/}
        </div>
    )
}

export default ShopItemPreview
import React, {useEffect, useState} from "react"

import {ShopItemObject} from "../../redux/shop-items/shop-items.slice"
import Link from "next/link"
import {mapList} from "../../utils/component-utils"
import {element} from "prop-types"
import bookmark from '/public/icons/bookmark.svg'

const ShopItem: React.FC<ShopItemObject['ua']> = (
    {
        name, color, otherColors, sizes, images, price, delivery, description
        , composition, parameters, isAvailable, category, slugCategory, oldPrice
    }) => {

    const [size, setSize] = useState<string | null>(null)

    const handleSizeClick = (size: string) => {
        setSize(size)
    }

    return (
        <div className={'shop-item'}>
            <div className="shop-item__content">
                <div className="shop-item__slider">
                </div>
                <div className={'shop-item__about'}>
                    <div className="shop-item__links">
                        <Link href={'/'}>
                            <a className={'shop-item__link'}>Головна</a>
                        </Link>
                        <span className={'shop-item__links-slash'}>/</span>
                        <Link href={'/all'}>
                            <a className={'shop-item__link'}>Каталог</a>
                        </Link>
                        <span className={'shop-item__links-slash'}>/</span>
                        <Link href={`/${slugCategory}`}>
                            <a className={'shop-item__link'}>{category}</a>
                        </Link>
                    </div>
                    <div className="shop-item__name">
                        {name}
                    </div>
                    <div className="shop-item__prices">
                        <div className={'shop-item__price shop-item__price--old'}>
                            <div className={'shop-item__price-crossed'}></div>
                            {oldPrice} ₴
                        </div>
                        <div className={'shop-item__price'}>{price} ₴</div>
                    </div>
                    <div className="shop-item__sizes">
                        <div className="shop-item__sizes-top">
                            <div className="shop-item__sizes-label">Розміри</div>
                            <div className="shop-item__sizes-choose">Підібрати розмір</div>
                        </div>
                        <div className={'shop-item__sizes-list'}>
                            {sizes.map(size =>
                                <div className={`shop-item__sizes-square`}
                                     id={color}
                                     onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </div>
                            )}
                        </div>
                    </div>
                    {/*<div className="shop-item__colors">*/}
                    {/*    {<div className='shop-item__color shop-items__color--current'>{color}</div>}*/}
                    {/*    {otherColors.map(({name, code}) =>*/}
                    {/*            <div className={`shop-items__color`}*/}
                    {/*                 style={{backgroundColor: code}}*/}
                    {/*                 id={color}*/}
                    {/*                 onClick={(event) => console.log(event.target)}*/}
                    {/*            />*/}
                    {/*    )}*/}
                    {/*</div>*/}
                    <div className={'shop-item__buttons'}>
                        <button className="shop-item__checkout-button">ДОДАТИ ДО КОРЗИНИ</button>
                        <button className="shop-item__favorite-button">
                            <img src={bookmark.src} className={'shop-item__favorite-img'} alt={'shop-item'}/>
                        </button>
                    </div>
                    <div className="shop-items__present"></div>
                </div>
            </div>
            {/*<div className="shop-item__similar">*/}
            {/*    <div className="shop-item__similar">СХОЖІ ТОВАРИ</div>*/}
            {/*    <div className="shop-item__slider">*/}
            {/*        /!*<ItemsCollection title={''} shopItems={shopItems as shopItemProps[]}/>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default ShopItem
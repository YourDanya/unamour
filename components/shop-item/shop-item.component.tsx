import React, {useEffect, useState} from "react"

import Link from "next/link"
import bookmark from '/public/icons/bookmark.svg'
import {ShopItemObject} from "../../redux/shop-items/shop-items.slice"
import present from '/public/icons/present.svg'
import CustomDropdown from "../custom-dropdown/custom-dropdown.component";

const ShopItem: React.FC<ShopItemObject['ua']> = (
    {
        name, color, otherColors, sizes, images, price, delivery, description
        , composition, parameters, isAvailable, category, slugCategory, oldPrice
    }) => {

    const [size, setSize] = useState<string | null>(null)

    const [animate, setAnimate] = useState(false)

    const handleSizeClick = (size: string) => {
        setSize(size)
    }

    console.log(color)

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
                                     id={color.code + new Date()}
                                     onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="shop-item__colors">
                        <div className={'shop-item__colors-label'}>Колір: {color.name}</div>
                        <div className="shop-item__colors-list">
                            {<div className='shop-item__color shop-item__color--current'
                                  style={{backgroundColor: color.code}}/>
                            }
                            {otherColors.map(({name, code, ref}) =>
                                <Link href={`/shop-item/${slugCategory}/${ref}`}>
                                    <div className={`shop-item__color`}
                                         style={{backgroundColor: code}}
                                         id={color.code + new Date()}
                                         onClick={(event) => console.log(event.target)}
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className={'shop-item__buttons'}>
                        <button className="shop-item__checkout-button">ДОДАТИ ДО КОРЗИНИ</button>
                        <button className="shop-item__favorite-button">
                            <img src={bookmark.src} className={'shop-item__favorite-img'} alt={'shop-item'}/>
                        </button>
                    </div>
                    <div className="shop-item__present">
                        <div className='shop-item__present-label'>ПОДАРУВАТИ</div>
                        <img className='shop-item__present-img' src={present.src}/>
                    </div>
                    <div className='shop-item__dropdown'>
                        <CustomDropdown content={<div>{description}</div>} name={'ОПИС'}/>
                        <CustomDropdown content={<div>{}</div>} name={'СКЛАД І ДОГЛЯД'}/>
                        <CustomDropdown content={<div>{}</div>} name={'ПАРАМЕТРИ ВИРОБУ'}/>
                        <CustomDropdown content={<div>{}</div>} name={'ДОСТАВКА І ОПЛАТА'}/>
                    </div>
                </div>

            </div>
            <div className="shop-item__similar">
                <div className="shop-item__similar">СХОЖІ ТОВАРИ</div>
            </div>
            <div className="shop-item__viewed">
                <div className="shop-item__similar">ПЕРЕГЛЯНУТІ ТОВАРИ</div>
                {/*<ShopitemCollection item={} title={}/>*/}
            </div>
        </div>
    )
}

export default ShopItem
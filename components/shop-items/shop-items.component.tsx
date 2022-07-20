import React from "react"
import {mapList} from "../../utils/component.utils"
import Dropdown from "../common/dropdown/dropdown.component"
import Checkbox from "../common/checkbox/checkbox.component"
import RangeSlider from "../common/range-slider/range-slider.component"
import useShopItems from "./shop-items.hook"
import Link from "next/link";

export type ShopItemsProps = {
    children: string
}

const ShopItems: React.FC<ShopItemsProps> = (props) => {
    const {
        menuState, divRef, handlePriceInputChange, price, handleSortClick, handleSizeClick, sort,
        handleColorClick, pageRef, content, children
    } = useShopItems(props)

    return (
        <div className='shop-items'>
            <div className='shop-items__menu'>
                <div className='shop-items__menu-fixed'
                     style={{
                         position: menuState.position,
                         top: menuState.top,
                         bottom: menuState.bottom,
                         transform: `translateY(${menuState.translateY}px)`
                     }}
                     ref={divRef}
                >
                    <div className='shop-items__menu-list'>
                        {content.list1.map(({ref, text}) => (
                            <Link href={ref} key={ref}>
                                <a className={'shop-items__menu-item'}>
                                    {text}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className='shop-items__filters'>
                        <Dropdown name={content.filter1}>
                            <div className='shop-items__filter'>
                                {content.sort.map(({text, param}) => (
                                    <button className={`shop-items__menu-item`} key={param} onClick={handleSortClick}>
                                        {text}
                                    </button>
                                ))}
                            </div>
                        </Dropdown>
                        <Dropdown name={content.filter2}>
                            <div className={'shop-items__price'}>
                                <div className='shop-items__price-input-block'>
                                    <label className={'shop-items__price-label'}>
                                        {content.price.from}
                                    </label>
                                    <input className={'shop-items__price-input'}
                                           name='num1'
                                           onChange={handlePriceInputChange}
                                           value={price.num1}
                                           type={'number'}
                                    />
                                    <div className={'shop-items__price-currency'}>₴</div>
                                </div>
                                <div className='shop-items__price-input-block'>
                                    <label className={'shop-items__price-label'}>
                                        {content.price.to}
                                    </label>
                                    <input className='shop-items__price-input'
                                           name='num2'
                                           onChange={handlePriceInputChange}
                                           value={price.num2}
                                           type={'number'}
                                    />
                                    <div className={'shop-items__price-currency'}>₴</div>
                                </div>
                                <RangeSlider/>
                            </div>
                        </Dropdown>
                        <Dropdown name={content.filter3}>
                            <div className='shop-items__filter shop-items__sizes'>
                                {content.sizes.map((elem) => (
                                    <Checkbox key={elem} label={elem} value={} handleChange={}/>
                                ))}
                            </div>
                        </Dropdown>
                        <Dropdown name={content.filter4}>
                            <div className='shop-items__colors'>
                                {content.colors.map(({name, code}) => (
                                    <Checkbox key={code} label={name} value={} handleChange={}/>
                                ))}
                            </div>
                        </Dropdown>
                        <div className={'shop-items__reset'}/>
                    </div>
                </div>
            </div>
            <div className="shop-items__page" ref={pageRef}>
                {
                    children
                }
            </div>
        </div>
    )
}


export const getShopItemsLayout = (page: React.ReactNode) => {
    return (
        <ShopItems>
            {page}
        </ShopItems>
    )
}

export default ShopItems
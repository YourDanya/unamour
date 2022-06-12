import React, {useEffect, useRef, useState} from "react";

import WithIntern from "../hoc/with-intern/with-intern";
import {ShopItemsContent} from "./shop-items.content";
import {useRouter} from "next/router";
import {mapList, removeFromArr} from "../../utils/utils";
import CustomDropdown from "../custom-dropdown/custom-dropdown.component";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";
import {number} from "prop-types";
import CustomRangeSlider from "../custom-range-slider/custom-range-slider.component";

type shopItemsProps = {}

type ShopItemsPropsWithIntern = {
    content: typeof ShopItemsContent.ua
}

const ShopItemsWithIntern: React.FC<ShopItemsPropsWithIntern> = ({children, content}) => {

    const router = useRouter()

    const [sort, setSort] = useState<string | undefined>()
    const [price, setPrice] = useState<{ num1: string, num2: string }>({
        num1: content.price.num1,
        num2: content.price.num2,
    })
    const [sizes, setSizes] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])

    const handleSortClick = (param: string) => {
        setSort(param)
    }

    const handlePriceInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 5) return
        setPrice({...price, [event.target.name]: event.target.value})
    }

    const handleSizeClick = (size: string) => {
        if (sizes?.includes(size)) {
            sizes.push(size)
        } else {
            setSizes(removeFromArr(sizes, size))
        }
    }

    const handleColorClick = (color: string) => {
        if (colors?.includes(color)) {
            colors.push(color)
        } else {
            setColors(removeFromArr(colors, color))
        }
    }

    return (
        <div className='shop-items'>
            <div className='shop-items__menu'>
                {
                    mapList(content.list1,
                        'shop-items__menu-list',
                        'shop-items__menu-item'
                    )
                }
                <div className='shop-items__filters'>
                    <CustomDropdown
                        name={content.filter1}
                        content={
                            mapList(
                                content.sort,
                                'shop-items__filter',
                                'shop-items__sort-item',
                                handleSortClick
                            )
                        }
                    />
                    <CustomDropdown
                        name={content.filter2}
                        content={
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
                                <CustomRangeSlider/>
                            </div>
                        }
                    />
                    <CustomDropdown
                        name={content.filter3}
                        content={
                            mapList(
                                content.sizes,
                                'shop-items__filter shop-items__sizes',
                                'shop-items__size',
                                handleColorClick,
                                CustomCheckbox
                            )
                        }
                    />
                    <CustomDropdown
                        name={content.filter4}
                        content={
                            mapList(
                                content.colors,
                                'shop-items__colors',
                                'shop-items__color',
                                handleSizeClick,
                                CustomCheckbox
                            )
                        }
                    />
                    <div className={'shop-items__reset'}>
                    </div>
                </div>
            </div>
            <div className="shop-items__page">
                {
                    children
                }
            </div>
        </div>
    )
}

const ShopItems: React.FC<shopItemsProps> = WithIntern(ShopItemsWithIntern, ShopItemsContent)

export const getShopItemsLayout = (page: React.ReactNode) => {
    return (
        <ShopItems>
            {page}
        </ShopItems>
    )
}

export default ShopItems
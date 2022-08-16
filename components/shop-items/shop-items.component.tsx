import React from "react"
import Dropdown from "../common/dropdown/dropdown.component"
import Checkbox from "../common/checkbox/checkbox.component"
import useShopItems from "./shop-items.hook"
import Link from "next/link"
import PriceFilter from "./price-filter/price-filter.component"
import ScrollFixed from "./scroll-fixed/scroll-fixed.component"

export type ShopItemsProps = {
    children?: React.ReactNode
}

const ShopItems: React.FC<ShopItemsProps> = (props) => {

    const {
        content, translation, children, sort, handleSortClick, sizes, handleSizeChange, price, handlePriceChange,
        colors, handleColorChange, setPriceValues
    } = useShopItems(props)

    return (
        <div className='shop-items'>
            <div className='shop-items__menu'>
                <ScrollFixed>
                    <div className='shop-items__menu-list'>
                        {content.categories.map((ref, index) => (
                            <Link href={ref} key={ref}>
                                <a className={'shop-items__menu-item'}>
                                    {translation.categories[index]}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className='shop-items__filters'>
                        <Dropdown name={translation.filter1} className={'shop-items__sort'}>
                            {content.sort.map((param, index) => (
                                <button
                                    className={`shop-items__sort-item ${sort===param ? 'shop-items__sort-item--active' : ''}`}
                                    key={param}
                                    name={param}
                                    onClick={handleSortClick}
                                >
                                    {translation.sort[index]}
                                </button>
                            ))}
                        </Dropdown>
                        <Dropdown name={translation.filter2}>
                            <PriceFilter
                                handleChange={handlePriceChange}
                                values={price}
                                translateFrom={translation.price.from}
                                translateTo={translation.price.to}
                                setValues={setPriceValues}
                            />
                        </Dropdown>
                        <Dropdown name={translation.filter3} className='shop-items__sizes'>
                            {content.sizes.map((size, index) => (
                                <Checkbox
                                    className={'shop-items__size'}
                                    key={size}
                                    label={translation.sizes[index]}
                                    value={sizes[size]}
                                    handleChange={handleSizeChange}
                                />
                            ))}
                        </Dropdown>
                        <Dropdown name={translation.filter4} className={'shop-items__colors'}>
                            {content.colors.map(({slug, code}, index) => (
                                <Checkbox
                                    className={'shop-items__color'}
                                    styles={{backgroundColor: code}}
                                    key={code}
                                    name={slug}
                                    label={translation.colors[index]}
                                    value={colors[slug]}
                                    handleChange={handleColorChange}
                                />
                            ))}
                        </Dropdown>
                        <div className={'shop-items__reset'}/>
                    </div>
                </ScrollFixed>
            </div>
            <div className="shop-items__page">
                {children}
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
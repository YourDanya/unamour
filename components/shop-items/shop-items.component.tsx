import React from "react"
import Dropdown from "../common/dropdown/dropdown.component"
import useShopItems from "./shop-items.hook"
import Link from "next/link"
import PriceFilter from "./price-filter/price-filter.component"
import SizesFilter from "./sizes-filter/sizes-filter.component"
import ColorsFilter from "./colors-filter/colors-filter.component"
import SortingFilter from "./sorting-filter/sorting-filter.component"
import Button from "../common/button/button.component"
import ScrollFixed from "../common/scroll-fixed/scroll-fixed.component"

export type ShopItemsProps = {
    children?: React.ReactNode
}

const ShopItems: React.FC<ShopItemsProps> = (props) => {

    const {children} = props
    const {content, translation, handleLinkClick, params, handleResetClick, filters} = useShopItems(props)

    return (
        <div className='shop-items'>
            <div className='shop-items__menu'>
                <ScrollFixed topOffset={120} bottomOffset={20}>
                    <div className='shop-items__menu-list'>
                        {content.categories.map((ref, index) => (
                            <Link href={`${ref}${params ? `?${params}` : ''}`} key={ref}>
                                <a className={'shop-items__menu-item'} onClick={handleLinkClick}>
                                    {translation.categories[index]}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className='shop-items__filters'>
                        <Dropdown name={translation.filter1} className={'shop-items__sort'}>
                            <SortingFilter
                                content={content.filters.sorting}
                                translation={translation.sort}
                                filter={'sorting'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Dropdown name={translation.filter2}>
                            <PriceFilter
                                content={content.filters.price}
                                translation={translation.price}
                                filter={'price'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Dropdown name={translation.filter3} className='shop-items__sizes'>
                            <SizesFilter
                                content={content.filters.sizes}
                                filter={'sizes'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Dropdown name={translation.filter4} className={'shop-items__colors'}>
                            <ColorsFilter
                                content={content.filters.colors}
                                translation={translation.colors}
                                filter={'colors'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Button className={'shop-items__reset'} onClick={handleResetClick}>
                            <div className={'close'}/>
                            {translation.reset}
                        </Button>
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


















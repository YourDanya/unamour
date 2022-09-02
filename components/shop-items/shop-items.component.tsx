import React from "react"
import Dropdown from "../common/dropdown/dropdown.component"
import useShopItems from "./shop-items.hook"
import Link from "next/link"
import PriceFilter from "./price-filter/price-filter.component"
import SizesFilter from "./sizes-filter/sizes-filter.component"
import ColorsFilter from "./colors-filter/colors-filter.component"
import SortingFilter from "./sorting-filter/sorting-filter.component"
import Button from "../common/button/button.component"
import {GetStateR1, GetStateR2} from "./shop-items.types"
import ScrollFixed from "../common/scroll-fixed/scroll-fixed.component"

export type ShopItemsProps = {
    children?: React.ReactNode
}

const ShopItems: React.FC<ShopItemsProps> = (props) => {

    const {children} = props
    const {content, translation, handleFilter, getState, handleLinkClick, params, reset} = useShopItems(props)

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
                                sorting={content.filters.sorting}
                                sortingTranslation={translation.sort}
                                filter={'sorting'}
                                handleFilter={handleFilter}
                                getState={getState as GetStateR1}
                            />
                        </Dropdown>
                        <Dropdown name={translation.filter2}>
                            <PriceFilter {...translation.price}/>
                        </Dropdown>
                        <Dropdown name={translation.filter3} className='shop-items__sizes'>
                            <SizesFilter
                                sizes={content.filters.sizes}
                                filter={'sizes'}
                                handleFilter={handleFilter}
                                getState={getState as GetStateR2}
                            />
                        </Dropdown>
                        <Dropdown name={translation.filter4} className={'shop-items__colors'}>
                            <ColorsFilter
                                colors={content.filters.colors}
                                colorTranslations={translation.colors}
                                filter={'colors'}
                                handleFilter={handleFilter}
                                getState={getState as GetStateR2}
                            />
                        </Dropdown>
                        <Button className={'shop-items__reset'} onClick={reset}>
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


















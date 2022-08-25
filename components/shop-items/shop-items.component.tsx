import React from "react"
import Dropdown from "../common/dropdown/dropdown.component"
import useShopItems from "./shop-items.hook"
import Link from "next/link"
import PriceFilter from "./price-filter/price-filter.component"
import ScrollFixed from "./scroll-fixed/scroll-fixed.component"
import SizesFilter from "./sizes-filter/sizes-filter.component"
import ColorsFilter from "./colors-filter/colors-filter.component"
import SortingFilter from "./sorting-filter/sorting-filter.component"

export type ShopItemsProps = {
    children?: React.ReactNode
}

const ShopItems: React.FC<ShopItemsProps> = (props) => {

    const {children} = props
    const {content, translation, handleFilter} = useShopItems(props)

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
                            <SortingFilter
                                sorting={content.filters.sorting}
                                sortingTranslation={translation.sort}
                                filter={'sorting'}
                                handleFilter={handleFilter}
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
                            />
                        </Dropdown>
                        <Dropdown name={translation.filter4} className={'shop-items__colors'}>
                            <ColorsFilter
                                colors={content.filters.colors}
                                colorTranslations={translation.colors}
                                filter={'colors'}
                                handleFilter={handleFilter}
                            />
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
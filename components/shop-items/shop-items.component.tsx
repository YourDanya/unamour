import React from 'react'
import PriceFilter from 'components/shop-items/price-filter/price-filter.component'
import Button from 'components/common/button/button.component'
import ScrollFixed from 'components/common/scroll-fixed/scroll-fixed.component'
import ColorsFilter from 'components/shop-items/color-filter/color-filter.component'
import Dropdown from 'components/common/dropdown/dropdown.component'
import SizesFilter from 'components/shop-items/size-filter/size-filter.component'
import useShopItems from 'components/shop-items/shop-items.hook'
import Link from 'next/link'
import SortingFilter from 'components/shop-items/sorting-filter/sorting-filter.component'
import {ShopItemsProps} from 'components/shop-items/shop-items.types'

const ShopItems: React.FC<ShopItemsProps> = (props) => {
    const {children} = props
    const {content, transl, handleLinkClick, params, handleResetClick, filters} = useShopItems(props)

    return (
        <div className='shop-items'>
            <div className='shop-items__menu'>
                <ScrollFixed topOffset={120} bottomOffset={20}>
                    <div className='shop-items__menu-list'>
                        {content.categories.map((ref, index) => (
                            <Link href={`${ref}${params ? `?${params}` : ''}`} key={ref}>
                                <a className={'shop-items__menu-item'} onClick={handleLinkClick}>
                                    {transl.categories[index]}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className='shop-items__filters'>
                        <Dropdown name={transl.filter1} className={'shop-items__sort'}>
                            <SortingFilter
                                content={content.filters.sorting}
                                transl={transl.sort}
                                filter={'sorting'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Dropdown name={transl.filter2}>
                            <PriceFilter
                                content={content.filters.price}
                                transl={transl.price}
                                filter={'price'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Dropdown name={transl.filter3} className='shop-items__sizes'>
                            <SizesFilter
                                content={content.filters.size}
                                filter={'size'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Dropdown name={transl.filter4} className={'shop-items__colors'}>
                            <ColorsFilter
                                content={content.filters.color}
                                transl={transl.color}
                                filter={'color'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Button className={'shop-items__reset'} onClick={handleResetClick}>
                            <div className={'close'}/>
                            {transl.reset}
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


















import {FC, ReactNode} from 'react'
import PriceFilter from 'components/shop-items/price-filter/price-filter.component'
import Button from 'components/common/button/button.component'
import ScrollFixed from 'components/common/scroll-fixed/scroll-fixed.component'
import ColorsFilter from 'components/shop-items/color-filter/color-filter.component'
import Dropdown from 'components/common/dropdown/dropdown.component'
import SizesFilter from 'components/shop-items/size-filter/size-filter.component'
import useShopItems from 'components/shop-items/shop-items.hook'
import SortingFilter from 'components/shop-items/sorting-filter/sorting-filter.component'
import {ShopItemsProps} from 'components/shop-items/shop-items.types'
import NavLink from 'components/common/nav-link/nav-link.component'
import {sizeContent} from 'components/common/content/content'

const ShopItemsMenu: FC<ShopItemsProps> = (props) => {
    const {children} = props
    const {content, transl, categories, colors, params, handleResetClick, filters} = useShopItems(props)

    return (
        // <div className='shop-items'>
            <div className='shop-items__menu'>
                <ScrollFixed topOffset={120} bottomOffset={20}>
                    <div className='shop-items__categories'>
                        <NavLink
                            href={`/shop-items/all`}
                            className={'shop-items__category'}
                            activeClassName={'shop-items__category--active'}
                        >
                            {transl.all}
                        </NavLink>
                        {categories[1].map((ref, index) => (
                            <NavLink
                                href={`/shop-items/${ref}${params ? `?${params}` : ''}`}
                                className={'shop-items__category'}
                                activeClassName={'shop-items__category--active'}
                                key={ref}
                            >
                                {categories[0][index]}
                            </NavLink>
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
                                content={sizeContent}
                                filter={'size'}
                                filters={filters}
                            />
                        </Dropdown>
                        <Dropdown name={transl.filter4} className={'shop-items__colors'}>
                            <ColorsFilter
                                content={colors[1]}
                                transl={colors[0]}
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
            // <div className="shop-items__page">
            //     {children}
            // </div>
        // </div>
    )
}


// export const getShopItemsLayout = (page: ReactNode) => {
//     return (
//         <ShopItems>
//             {page}
//         </ShopItems>
//     )
// }

export default ShopItemsMenu


















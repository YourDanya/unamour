import {FC} from 'react'
import NavLink from 'app/[locale]/_common/components/nav-link/nav-link.component'
import PriceFilter from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import ScrollFixed from 'app/[locale]/_common/components/scroll-fixed/scroll-fixed.component'
import {sizeContent} from 'app/[locale]/_content/content'
import ColorsFilter from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.component'
import Dropdown from 'app/[locale]/_common/components/dropdown/dropdown.component'
import SizesFilter from 'app/[locale]/shop-items/[category]/_components/_layout/size-filter/size-filter.component'
import {LayoutProps} from 'app/[locale]/profile/_components/_layout/layout.types'
import SortingFilter from 'app/[locale]/shop-items/[category]/_components/_layout/sorting-filter/sorting-filter.component'
import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'

const Layout: FC<LayoutProps> = (props) => {
    const {children} = props
    const {content, transl, categories, colors, params, handleResetClick, filters} = useLayout(props)

    return (
        <div className='shop-items'>
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
            <div className="shop-items__page">
                {children}
            </div>
        </div>
    )
}

export default Layout


















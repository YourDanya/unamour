'use client'

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
import SortFilter from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.component'
import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'

const Layout: FC<LayoutProps> = (props) => {
    const {children} = props
    const state = useLayout(props)

    return (
        <div className='shop-items-layout layout'>
            <div className='layout__menu'>
                <ScrollFixed topOffset={120} bottomOffset={20}>
                    <Categories {...state}/>
                    <Filters {...state}/>
                </ScrollFixed>
            </div>
            <div className="layout__page">
                {/*{children}*/}
            </div>
        </div>
    )
}

export default Layout

const Categories = (props: ReturnType<typeof useLayout>) => {
    const {transl, categories, paramsUrl, locale} = props

    return (
        <div className='shop-items-categories categories'>
            <NavLink
                href={`/${locale}/shop-items/all/${paramsUrl ? `?${paramsUrl}` : ''}`}
                className={'categories__link'}
                activeClassName={'categories__link--active'}
            >
                {transl.all}
            </NavLink>
            {categories[1].map((ref, index) => (
                <NavLink
                    href={`/${locale}/shop-items/${ref}${paramsUrl ? `?${paramsUrl}` : ''}`}
                    className={'categories__link'}
                    activeClassName={'categories__link--active'}
                    key={ref}
                >
                    {categories[0][index]}
                </NavLink>
            ))}
        </div>
    )
}

const Filters = (props: ReturnType<typeof useLayout>) => {
    const {transl, onReset} = props

    return (
        <div className='shop-items-filters filters'>
            <Dropdown name={transl.sort} className={'filters__sort'}>
                <SortFilter {...props}/>
            </Dropdown>
            <Dropdown name={transl.price} className={'filters__price'}>
                <PriceFilter {...props}/>
            </Dropdown>
            <Dropdown name={transl.size} className='filters__size'>
                <SizesFilter {...props}/>
            </Dropdown>
            <Dropdown name={transl.color} className={'filters__color'}>
                <ColorsFilter {...props}/>
            </Dropdown>
            <Button className={'filters__reset'} onClick={onReset}>
                <div className={'close'}/>
                {transl.reset}
            </Button>
        </div>
    )
}











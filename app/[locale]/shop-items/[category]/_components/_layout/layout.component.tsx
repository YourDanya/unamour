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
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import {clothing} from 'app/[locale]/_content/categories/categories.content'

const Layout: FC<LayoutProps> = (props) => {
    const {children} = props
    const state = useLayout(props)
    const {resize, setResize, mobile, transl} = state

    return (
        <div className={`shop-items-layout layout`}>
            {mobile !== true && (<>
                <Top {...state}/>
                <Main {...state}/>
            </> )}
            {mobile !== false && (<>
                <MobileTop {...state}/>
                <MobileMain {...state}/>
            </>)}
            <div className="layout__page">
                {children}
            </div>
        </div>
    )
}

export default Layout

const Top = (props: ReturnType<typeof useLayout>) => {
    const {transl} = props

    return (
        <div className={'shop-items-layout-top layout'}>
            <div className={'layout__title'}>
                {transl.title}
            </div>
        </div>
    )
}

const MobileTop = (props: ReturnType<typeof useLayout>) => {
    const {transl, onShowModal} = props

    return (
        <div className={'shop-items-layout-top layout'}>
            <div className={'layout__title'}>
                {transl.title}
            </div>
            <Button onClick={onShowModal}>
                {transl.filters}
            </Button>
        </div>
    )
}


const Main = (props: ReturnType<typeof useLayout>) => {
    const {resize, setResize, mobile, transl} = props

    return (
        <div className={`shop-items-layout-main layout`}>
            <ScrollFixed
                topOffset={120}
                bottomOffset={20}
                resize={resize}
                setResize={setResize}
            >
                <Categories {...props}/>
                <Filters {...props}/>
            </ScrollFixed>
        </div>
    )
}

const MobileMain = (props: ReturnType<typeof useLayout>) => {
    const {modalActive, onHideModal, onShowModal, transl} = props

    return (
        <div className={'shop-items-layout-main shop-items-layout-main--mobile layout'}>
            <ModalContent active={modalActive} hideModal={onHideModal} className={'layout__menu'}>
                <Categories {...props}/>
                <Filters {...props}/>
            </ModalContent>
            <Modal active={modalActive} hideModal={onHideModal}/>
        </div>
    )
}

const Categories = (props: ReturnType<typeof useLayout>) => {
    const {transl, paramsUrl, locale} = props

    return (
        <div className="shop-items-categories categories">
            <NavLink
                href={`/${locale}/shop-items/all/${paramsUrl ? `?${paramsUrl}` : ''}`}
                className={'categories__link'}
                activeClassName={'categories__link--active'}
            >
                {transl.all}
            </NavLink>
            {clothing.map((ref, index) => (
                <NavLink
                    href={`/${locale}/shop-items/${ref}${paramsUrl ? `?${paramsUrl}` : ''}`}
                    className={'categories__link'}
                    activeClassName={'categories__link--active'}
                    key={ref}
                >
                    {transl.clothing[index]}
                </NavLink>
            ))}
        </div>
    )
}

const Filters = (props: ReturnType<typeof useLayout>) => {
    const {transl, onReset, onDropdown} = props

    return (
        <div className="shop-items-filters filters">
            <Dropdown name={transl.sort} className={'filters__dropdown'} onClick={onDropdown}>
                <SortFilter {...props}/>
            </Dropdown>
            <Dropdown name={transl.price} className={'filters__dropdown'} onClick={onDropdown}>
                <PriceFilter {...props}/>
            </Dropdown>
            <Dropdown name={transl.size} className={'filters__dropdown'} onClick={onDropdown}>
                <SizesFilter {...props}/>
            </Dropdown>
            <Dropdown name={transl.color} className={'filters__dropdown'} onClick={onDropdown}>
                <ColorsFilter {...props}/>
            </Dropdown>
            <Button className={'filters__reset'} onClick={onReset}>
                <div className={'close'}/>
                {transl.reset}
            </Button>
        </div>
    )
}

const MobileFilters = (props: ReturnType<typeof useLayout>) => {
    const {transl, onReset, onDropdown} = props

    return (
        <div className="shop-items-filters filters">
            <SortFilter {...props}/>
            <PriceFilter {...props}/>
            <SizesFilter {...props}/>
            <ColorsFilter {...props}/>
            <Button className={'filters__reset'} onClick={onReset}>
                <div className={'close'}/>
                {transl.reset}
            </Button>
        </div>
    )
}

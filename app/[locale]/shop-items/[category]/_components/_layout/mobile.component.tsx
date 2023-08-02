import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import SortFilter from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.component'
import PriceFilter from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.component'
import SizesFilter from 'app/[locale]/shop-items/[category]/_components/_layout/size-filter/size-filter.component'
import ColorsFilter from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import {ReactNode} from 'react'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import {Categories} from 'app/[locale]/shop-items/[category]/_components/_layout/common.component'

const Mobile = (props: ReturnType<typeof useLayout>) => {
    return (<>
        <MobileTop {...props}/>
        <MobileMain {...props}/>
    </>)
}

export default Mobile

const MobileTop = (props: ReturnType<typeof useLayout>) => {
    const {transl, onShowModal} = props

    return (
        <div className={'shop-items-layout-top layout'}>
            <div className={'layout__title'}>
                {transl.title}
            </div>
            <div className={'layout__space'}>
                {' / '}
            </div>
            <Button onClick={onShowModal} className={'layout__show-filters'}>
                {transl.filters}
            </Button>
        </div>
    )
}

const MobileMain = (props: ReturnType<typeof useLayout>) => {
    const {modalActive, onHideModal, onShowModal, transl} = props

    return (
        <div className={'shop-items-layout-main shop-items-layout-main--mobile layout'}>
            <ModalContent active={modalActive} hideModal={onHideModal} className={'layout__modal'}>
                <Categories {...props}/>
                <MobileFilters {...props}/>
            </ModalContent>
            <Modal active={modalActive} hideModal={onHideModal}/>
        </div>
    )
}

const MobileFilters = (props: ReturnType<typeof useLayout>) => {
    const {transl, onReset, onDropdown} = props

    return (
        <div className="shop-items-filters filters">
            <FilterWrapper title={transl.sort}>
                <SortFilter {...props}/>
            </FilterWrapper>
            <FilterWrapper title={transl.price}>
                <PriceFilter {...props}/>
            </FilterWrapper>
            <FilterWrapper title={transl.size}>
                <SizesFilter {...props}/>
            </FilterWrapper>
            <FilterWrapper title={transl.color}>
                <ColorsFilter {...props}/>
            </FilterWrapper>
            <Button className={'filters__reset'} onClick={onReset}>
                <div className={'close'}/>
                {transl.reset}
            </Button>
        </div>
    )
}

const FilterWrapper = (props: { title: string, children: ReactNode }) => {
    const {children, title} = props

    return (
        <div className={'shop-items-filter-wrapper filter'}>
            <div className={'filter__title'}>
                {title}
            </div>
            <div className={'filter__children'}>
                {children}
            </div>
        </div>
    )
}
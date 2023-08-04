import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import ScrollFixed from 'app/_common/components/scroll-fixed/scroll-fixed.component'
import Dropdown from 'app/_common/components/dropdown/dropdown.component'
import SortFilter from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.component'
import PriceFilter from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.component'
import SizesFilter from 'app/[locale]/shop-items/[category]/_components/_layout/size-filter/size-filter.component'
import ColorsFilter from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.component'
import Button from 'app/_common/components/button/button.component'
import {Categories} from 'app/[locale]/shop-items/[category]/_components/_layout/common.component'

const Desktop = (props: ReturnType<typeof useLayout>) => {
    return (<>
        <Top {...props}/>
        <Main {...props}/>
    </>)
}

export default Desktop

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
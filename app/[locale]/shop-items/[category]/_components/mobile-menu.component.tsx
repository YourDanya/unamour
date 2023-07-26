import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import {Categories} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.component'
import {MobileFilters} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.component'

const MobileMenu = (props: ReturnType<typeof useLayout>) => {
    const {resize, setResize} = props

    return (
        <div className="layout__menu">
            <Categories {...props}/>
            <MobileFilters {...props}/>
        </div>
    )
}
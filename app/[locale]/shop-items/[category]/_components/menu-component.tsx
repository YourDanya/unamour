import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import ScrollFixed from 'app/[locale]/_common/components/scroll-fixed/scroll-fixed.component'
import {Filters} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.component'
import {Categories} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.component'

const Menu = (props: ReturnType<typeof useLayout>) => {
    const {resize, setResize, mobile} = props

    return (
        <div className={`layout__menu`}>
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

export default Menu
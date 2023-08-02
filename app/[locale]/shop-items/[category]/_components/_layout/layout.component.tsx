'use client'

import {FC} from 'react'
import {LayoutProps} from 'app/[locale]/profile/_components/_layout/layout.types'
import Desktop from 'app/[locale]/shop-items/[category]/_components/_layout/desktop.component'
import Mobile from 'app/[locale]/shop-items/[category]/_components/_layout/mobile.component'
import {useLayout} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import {useShopItemsLayout} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'

const Layout: FC<LayoutProps> = (props) => {
    const {children} = props
    const {isItem} = useLayout()

    return (
        <>{isItem ? children : (
            <ShopItemsLayout>
                {children}
            </ShopItemsLayout>
        )}</>
    )
}

export default Layout

const ShopItemsLayout: FC<LayoutProps> = (props) => {
    const {children} = props
    const state = useShopItemsLayout(props)
    const {resize, setResize, mobile, transl} = state

    return (
        <div className={`shop-items-layout layout`}>
            {mobile !== true && (<Desktop {...state}/>)}
            {mobile !== false && (<Mobile {...state}/>)}
            <div className="layout__page">
                {children}
            </div>
        </div>
    )
}

import ShopItemsLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.component'
import {ReactNode} from 'react'

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <ShopItemsLayout>
            {children}
        </ShopItemsLayout>
    )
}

export default Layout
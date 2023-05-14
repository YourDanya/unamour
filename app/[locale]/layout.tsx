//global
import 'app/[locale]/_common/styles/global.sass'
//common
import 'app/[locale]/_common/components/button/button.styles.sass'
import 'app/[locale]/_common/components/form-message/form-message.styles.sass'
import 'app/[locale]/_common/components/nav-link/nav-link.styles.sass'
import 'app/[locale]/_common/components/scroll-fixed/scroll-fixed.styles.sass'
import 'app/[locale]/_common/components/spinner/spinner.styles.sass'
import 'app/[locale]/_common/components/load-image/load-image.styles.sass'
import 'app/[locale]/_common/components/range-slider/range-slider.styles.sass'
import 'app/[locale]/_common/components/checkbox/checkbox.styles.sass'
import 'app/[locale]/_common/components/dropdown/dropdown.styles.sass'
import 'app/[locale]/_common/components/slider/slider.styles.sass'
import 'app/[locale]/_common/components/radio-buttons/radio-buttons.styles.sass'
import 'app/[locale]/_common/components/button/button.styles.sass'
import 'app/[locale]/_common/components/textarea/textarea.styles.sass'
import 'app/[locale]/_common/components/input/input.styles.sass'
import 'app/[locale]/_common/components/modal/modal.styles.sass'
import 'app/[locale]/_common/components/sidebar/sidebar.styles.sass'
import 'app/[locale]/_common/components/modal-content/modal-content.styles.sass'
import 'app/[locale]/_common/components/pagination/pagination/pagination.styles.sass'
import 'app/[locale]/_common/components/slider/slider-v2.styles.sass'
import 'app/[locale]/_common/components/cart-item/cart-item.styles.sass'
//home
import 'app/[locale]/_components/home.styles.sass'
//nav layout
import 'app/[locale]/_components/layout/nav/hamburger/hamburger.styles.sass'
import 'app/[locale]/_components/layout/nav/header/header.styles.sass'
import 'app/[locale]/_components/layout/nav/nav-auth/nav-auth.styles.sass'
import 'app/[locale]/_components/layout/nav/nav-cart/nav-cart.styles.sass'
import 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.styles.sass'
import 'app/[locale]/_components/layout/nav/nav-search/nav-search.styles.sass'
import 'app/[locale]/_components/layout/nav/nav.styles.sass'
//footer layout
import 'app/[locale]/_components/layout/footer/footer.styles.sass'
import 'app/[locale]/_components/layout/footer/links/links.styles.sass'
//admin
import 'app/[locale]/admin/items/_components/admin-items.styles.sass'
import 'app/[locale]/admin/items/_components/item-form/item-form.styles.sass'
//auth
import 'app/[locale]/auth/auth.styles.sass'
//cart
import 'app/[locale]/cart/_components/cart.styles.sass'
import 'app/[locale]/cart/_components/cart-form/cart-form.styles.sass'
import 'app/[locale]/cart/_components/cart-order/cart-order.styles.sass'
import 'app/[locale]/cart/_components/discount/discount.styles.sass'
//client-service
import 'app/[locale]/client-service/_components/_layout/service-layout.styles.sass'
import 'app/[locale]/client-service/clothing-care/_components/clothing-care.styles.sass'
import 'app/[locale]/client-service/delivery/_components/delivery.styles.sass'
import 'app/[locale]/client-service/order-tracking/_components/order-tracking.styles.sass'
import 'app/[locale]/client-service/ordering/_components/ordering.styles.sass'
import 'app/[locale]/client-service/policy/_components/policy.styles.sass'
import 'app/[locale]/client-service/privacy/_components/privacy.styles.sass'
import 'app/[locale]/client-service/return/_components/return.styles.sass'
import 'app/[locale]/client-service/warranty-period/_components/warranty-period.styles.sass'
//conacts
import 'app/[locale]/contacts/_components/contact.styles.sass'
import 'app/[locale]/contacts/_components/contacts-map/contacts-map.styles.sass'
//favorites
import 'app/[locale]/favorites/_components/favorites.styles.sass'
import 'app/[locale]/favorites/_components/favorite-item/favorite-item.styles.sass'
//order
import 'app/[locale]/order/[id]/_components/order.styles.sass'
import 'app/[locale]/order/[id]/_components/order-info/order-info.styles.sass'
import 'app/[locale]/order/[id]/_components/order-item/order-item.styles.sass'
//profile
import 'app/[locale]/profile/_components/_layout/layout.styles.sass'
import 'app/[locale]/profile/purchase-history/purchase-history.styles.sass'
import 'app/[locale]/profile/update-user/components/update-user.styles.sass'
import 'app/[locale]/profile/wishlist/wishlist.styles.sass'
//search
import 'app/[locale]/search/_components/search.styles.sass'
//shop-item
import 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/images/images.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/links/links.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/parameters/parameters.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/present/present-form/present-form.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/present/present.styles.sass'
import 'app/[locale]/shop-items/[category]/[item]/_components/sizes/sizes.styles.sass'
//shop-items
import 'app/[locale]/shop-items/[category]/_components/shop-items.styles.sass'
import 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.styles.sass'
//vacancies
import 'app/[locale]/vacancies/components/vacancies.styles.sass'

import {ReactNode} from 'react'
import {Metadata} from 'next/dist/lib/metadata/types/metadata-interface'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import RootLayout from 'app/[locale]/_components/layout/layout.component'
import {LayoutProps} from 'app/[locale]/layout.types'
import localFont from '@next/font/local'
// shop-item-preview
import 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.styles.sass'

export const metadata: Metadata = {
    title: 'UNAMOUR',
    metadataBase: new URL(`${baseURL}`),
    description: 'Магазин UNAMOUR',
    viewport: 'width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
}

const Layout = (props: LayoutProps) => {
    const {children, params: {locale}} = props

    return (
        <RootLayout locale={locale}>
            {children}
        </RootLayout>
    )
}

export default Layout
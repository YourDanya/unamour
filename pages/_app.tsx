import '../styles/home.sass'
import '../styles/global.sass'

import '/components/common/load-image/load-image.styles.sass'
import '/components/common/range-slider/range-slider.styles.sass'
import '/components/common/checkbox/checkbox.styles.sass'
import '/components/common/dropdown/dropdown.styles.sass'
import '/components/common/slider/slider.styles.sass'
import '/components/common/radio-buttons/radio-buttons.styles.sass'
import '/components/common/form/form.styles.sass'
import '/components/common/button/button.styles.sass'
import '/components/common/textarea/textarea.styles.sass'
import '/components/common/input/input.styles.sass'
import '/components/common/modal/modal.styles.sass'
import '/components/common/sidebar/sidebar.styles.sass'
import '/components/common/modal-content/modal-content.styles.sass'
import '/components/common/map/map.styles.sass'

import '/components/sticky-sidebar/sticky-sidebar.styles.sass'
import '/components/footer/links/links.styles.sass'
import '/components/shop-item/dropdowns/dropdowns.styles.sass'
import '/components/shop-item/links/links.styles.sass'
import '/components/shop-item/images/images.styles.sass'
import '/components/shop-item/parameters/parameters.styles.sass'
import '/components/shop-item/buttons/buttons.styles.sass'
import '/components/shop-item/additional/additional.styles.sass'
import '/components/shop-item/sizes/sizes.styles.sass'
import '/components/shop-item/shop-item.styles.sass'
import '/components/shop-item/present/present.styles.sass'
import '/components/shop-item/present/present-form/present-form.styles.sass'
import '/components/shop-item/present/present-item/present-item.styles.sass'
import '/components/shop-items/scroll-fixed/scroll-fixed.styles.sass'
import '/components/shop-items/price-filter/price-filter.styles.sass'
import '/components/shop-items/shop-items.styles.sass'
import '/components/cart/cart-form/cart-form.styles.sass'
import '/components/cart/order/order.styles.sass'
import '/components/cart-item/cart-item.styles.sass'
import '/components/cart/discount/discount.styles.sass'
import '/components/client-service/service.styles.sass'
import '/components/client-service/menu/menu.styles.sass'
import '/components/nav/nav.styles.sass'
import '/components/nav/nav-menu/nav-menu.styles.sass'
import '/components/nav/nav-search/nav-search.styles.sass'
import '/components/nav/nav-cart/nav-cart.styles.sass'
import '/components/nav/header/header.styles.sass'
import '/components/nav/hamburger/hamburger.styles.sass'
import '/components/shop-items-collection/shop-items-collection.styles.sass'
import '/components/shop-item-preview/shop-item-preview.styles.sass'
import '/components/footer/footer.styles.sass'
import '/components/sign-in-up/sign-in-up.styles.sass'
import '/components/sign-in-up/sign-in/sign-in.styles.sass'
import '/components/sign-in-up/sign-up/sign-up.styles.sass'
import '/components/cookie/cookies.styles.sass'

import '/pages/client-service/ordering/ordering.styles.sass'
import '/pages/client-service/order-tracking/order-tracking.styles.sass'
import '/pages/client-service/privacy/privacy.styles.sass'
import '/pages/client-service/warranty-period/warranty-period.styles.sass'
import '/pages/client-service/policy/policy.styles.sass'
import '/pages/client-service/clothing-care/clothing-care.styles.sass'
import '/pages/client-service/return/return.styles.sass'
import '/pages/client-service/delivery/delivery.styles.sass'
import '/pages/contacts/contact.styles.sass'
import '/pages/vacancies/vacancies.styles.sass'
import '/pages/favorites/favorites.styles.sass'
import '/pages/search/search.styles.sass'
import '/pages/cart/cart.styles.sass'
import '/pages/admin/catalog/catalog.styles.sass'

import Nav from "../components/nav/nav.component"
import Footer from "../components/footer/footer.component"
import {AppPropsWithLayout} from "../types/types"
import { wrapper} from "../redux/store"
import useApp from "./app.hook"

function App(props: AppPropsWithLayout) {

    const {getLayout, Component, pageProps} = useApp(props)

    return (
        <>
            <Nav/>
            <div className={'page'}>
                {getLayout(<Component {...pageProps}/>)}
            </div>
            <Footer/>
            {/*<Cookie/>*/}
        </>
    )
}

export default wrapper.withRedux(App)
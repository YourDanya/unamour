import '/components/scroll-fixed/scroll-fixed.styles.sass'
import '/components/price-filter/price-filter.styles.sass'
import '/components/cart-form/cart-form.styles.sass'
import '../styles/home.sass'
import '../styles/global.sass'
import '/components/common/range-slider/range-slider.styles.sass'
import '/components/common/checkbox/checkbox.styles.sass'
import '/components/common/dropdown/dropdown.styles.sass'
import '/components/common/slider/slider.styles.sass'
import '/components/common/radio-buttons/radio-buttons.styles.sass'
import '/components/common/form/form.styles.sass'
import '/components/common/button/button.styles.sass'
import '/components/common/textarea/textarea.styles.sass'
import '/components/common/input/input.styles.sass'
import '/components/order/order.styles.sass'
import '/components/cart-item/cart-item.styles.sass'
import '/pages/search/search.styles.sass'
import '/pages/cart/cart.styles.sass'
import '/components/discount/discount.styles.sass'
import '/pages/admin/admin.styles.sass'
import '/components/present/present.styles.sass'
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
import '/components/client-service/client-service.styles.sass'
import '/components/nav-menu/nav-menu.styles.sass'
import '/components/modal/modal.styles.sass'
import '/components/sidebar/sidebar.styles.sass'
import '/components/nav/nav.styles.sass'
import '/components/shop-items/shop-items.styles.sass'
import '/components/shop-items-collection/shop-items-collection.styles.sass'
import '/components/shop-item-preview/shop-item-preview.styles.sass'
import '/components/shop-item/shop-item.styles.sass'
import '/components/nav-search/nav-search.styles.sass'
import '/components/nav-shopping-cart/nav-shopping-cart.styles.sass'
import '/components/footer/footer.styles.sass'
import '/components/map/map.styles.sass'
import '/components/sign-in-up/sign-in-up.styles.sass'
import '/components/sign-in-up/sign-in/sign-in.styles.sass'
import '/components/sign-in-up/sign-up/sign-up.styles.sass'
import '/components/cookie/cookies.styles.sass'

import Nav from "../components/nav/nav.component"
import Footer from "../components/footer/footer.component"
import {AppPropsWithLayout, LocaleType} from "../types/types"
import { wrapper} from "../redux/store"
import {useRouter} from "next/router"
import {useDispatch, useSelector} from "react-redux"
import {selectClientItems} from "../redux/shop-items/shop-items.slice"
import {fetchItems} from "../redux/shop-items/shop-items.thunk"
import {useEffect} from "react"
import Cookie from "../components/cookie/cookie.component";

function MyApp({Component, pageProps}: AppPropsWithLayout) {
    let getLayout = Component.getLayout ?? ((page) => page)
    const slug = useRouter().query.slug
    if (slug && slug.length!==1) getLayout = ((page) => page)

    const dispatch = useDispatch()
    const items = useSelector(selectClientItems)

    useEffect(() => {
        if (items.length==0) {
            dispatch(fetchItems())
        }
    }, [])

    return (
        <>
            <Nav/>
            <div className={'page'}>
                {getLayout(<Component {...pageProps}/>)}
            </div>
            <Footer/>
            <Cookie/>
        </>
    )
}

export default wrapper.withRedux(MyApp)
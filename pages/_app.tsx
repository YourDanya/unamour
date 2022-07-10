import '/components/custom-radio-button/custom-radio-button.styles.sass'
import '/components/custom-form/custom-form.styles.sass'
import '/components/present/present.styles.sass'
import '../styles/home.sass'
import '../styles/global.sass'
import '/components/cart-item/cart-item.styles.sass'
import '/pages/search/search.styles.sass'
import '/components/custom-slider/custom-slider.styles.sass'
import '/pages/cart/cart.styles.sass'
import '/pages/admin/admin.styles.sass'
import '/components/custom-range-slider/custom-range-slider.styles.sass'
import '/components/custom-checkbox/custom-checkbox.styles.sass'
import '/components/custom-dropdown/custom-dropdown.styles.sass'
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
import '/components/custom-button/custom-button.styles.sass'
import '/components/custom-textarea/custom-textarea.styles.sass'
import '/components/modal/modal.styles.sass'
import '/components/custom-input/custom-input.styles.sass'
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

import Nav from "../components/nav/nav.component";
import Footer from "../components/footer/footer.component";
import {AppPropsWithLayout} from "../types/types";
import { wrapper} from "../redux/store";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {selectShopItems} from "../redux/shop-items/shop-items.slice";
import {fetchItems} from "../redux/shop-items/shop-items.thunk";
import {LocaleType} from "./shop-items/[[...slug]]";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppPropsWithLayout) {
    let getLayout = Component.getLayout ?? ((page) => page)
    const slug = useRouter().query.slug
    if (slug && slug.length!==1) getLayout = ((page) => page)

    const dispatch = useDispatch()
    const locale = useRouter().locale as LocaleType
    const items = useSelector(selectShopItems(locale))

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
        </>
    )
}

export default wrapper.withRedux(MyApp)
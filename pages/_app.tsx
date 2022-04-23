import '/components/client-service/client-service.styles.sass'
import '/pages/client-service/terms-of-use/terms-of-use.styles.sass'
import '/pages/client-service/policy-and-privacy/policy-and-privacy.styles.sass'
import '/pages/client-service/composition-and-care/composition-and-care.styles.sass'
import '/pages/client-service/return/return.styles.sass'
import '/pages/client-service/payment-and-delivery/payment-and-delivery.styles.sass'
import '/components/nav-menu/nav-menu.styles.sass'
import '/components/custom-button/custom-button.styles.sass'
import '/components/custom-slider/custom-slider.styles.sass'
import '/components/custom-textarea/custom-textarea.styles.sass'
import '/components/modal/modal.styles.sass'
import '/components/custom-input/custom-input.styles.sass'
import '/components/sidebar/sidebar.styles.sass'
import '/components/nav/nav.styles.sass'
import '/components/shop-items/shop-items.styles.sass'
import '/components/items-collection/items-collection.styles.sass'
import '/components/shop-item/shop-item.styles.sass'
import '/components/nav-search/nav-search.styles.sass'
import '/components/nav-shopping-cart/nav-shopping-cart.styles.sass'
import '/components/footer/footer.styles.sass'
import '../components/map/map.styles.sass'
import '/components/sign-in-up/sign-in-up.styles.sass'
import '/components/sign-in-up/sign-in/sign-in.styles.sass'
import '/components/sign-in-up/sign-up/sign-up.styles.sass'
import '/pages/contacts/contact.styles.sass'
import '/pages/vacancies/vacancies.styles.sass'
import '../styles/home.sass'
import '../styles/global.sass'
import type {AppProps} from 'next/app'
import Nav from "../components/nav/nav.component";
import CookieComponent from "../components/cookie/cookie.component";
import Footer from "../components/footer/footer.component";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Nav/>
            <Component {...pageProps}/>
            {/*<CookieComponent/>*/}
            <Footer/>
        </>
    )
}

export default MyApp

import '/components/sidebar/sidebar.styles.sass'
import '/components/nav/nav.styles.sass'
import '/components/shop-items/shop-items.styles.sass'
import '/components/items-collection/items-collection.styles.sass'
import '/components/shop-item/shop-item.styles.sass'
import '/components/nav-search/nav-search.styles.sass'
import '/components/nav-shopping-cart/nav-shopping-cart.styles.sass'
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
            {/*<Footer/>*/}
        </>
    )
}

export default MyApp

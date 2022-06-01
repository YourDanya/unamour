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
import '../styles/home.sass'
import '../styles/global.sass'
import '/components/back/back.styles.sass'
import '/components/client-service/client-service.styles.sass'
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
import '/components/map/map.styles.sass'
import '/components/sign-in-up/sign-in-up.styles.sass'
import '/components/sign-in-up/sign-in/sign-in.styles.sass'
import '/components/sign-in-up/sign-up/sign-up.styles.sass'

import Nav from "../components/nav/nav.component";
import Footer from "../components/footer/footer.component";
import {AppPropsWithLayout} from "../types/types";
import {Provider} from "react-redux";
import store from "../redux/store";
import axios from "axios";

// export async function getStaticProps() {
//     console.log('//////////////////')
//     const res = await axios.get('https://localhost:5000/shop-item/all')
//     console.log(res)
//     return {
//         props: {}
//     }
// }

function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <Provider store={store}>
            <Nav/>
            {
                getLayout(<Component {...pageProps}/>)
            }
            <Footer/>
        </Provider>
    )
}

export default MyApp
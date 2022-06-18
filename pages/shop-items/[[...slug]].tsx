import {AppThunkDispatch, wrapper} from "../../redux/store";
import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";
import {useDispatch, useSelector} from "react-redux";
import {selectShopItems} from "../../redux/shop-items/shop-items.slice";

import {fetchItems} from "../../redux/shop-items/shop-items.thunk";
import {useRouter} from "next/router";

type shopItemsProps = {
    test: string
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async ({req}) => {
        let items = store.getState().shopItems.items

        if (items.length === 0) {
            const dispatch = store.dispatch as AppThunkDispatch
            await dispatch(fetchItems())
            items = store.getState().shopItems.items
        }

        console.log(req.url)

        return { notFound: true }
    }
)

const ShopItemsPage: NextPageWithLayout<shopItemsProps> = ({test}) => {
    const dispatch = useDispatch()
    const shopItems = useSelector(selectShopItems)
    const router = useRouter()
    const {slug} = router.query

    // const isItem = (
    //     () => {
    //         if (slug?.length === 2) {
    //             return false
    //         } else if(slug?.length===3) {
    //             return true
    //         }
    //         else {
    //             router.
    //         }
    //     }
    // )()

    return (
        <div>
            {shopItems.toString()}
        </div>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout

export default ShopItemsPage
import {AppDispatch, AppThunkDispatch, wrapper} from "../../redux/store";
import {selectCounterValue} from "../../redux/counter/counter.slice";
import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";
import {useDispatch, useSelector} from "react-redux";
import {Api} from "../../utils/api-utils";
import {ApiCall} from "../../redux/shop-items/shop-items.slice";
import {AnyAction} from "redux";

type shopItemsProps = {
    test: string
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async () => {
        const items = store.getState().shopItems.items
        const dispatch = store.dispatch as AppThunkDispatch
        await dispatch(ApiCall())
        console.log('inside get server side props')
        return {
            props: {

            }
        }
    }
)

const ShopItemsPage: NextPageWithLayout<shopItemsProps> = ({test}) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(selectCounterValue)
    return (
        <div>
            {counterValue}
        </div>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout

export default ShopItemsPage
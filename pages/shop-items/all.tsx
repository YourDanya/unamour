import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";

const All: NextPageWithLayout = () => {
    return (
        <div className={'shop-items__all'}>
            /all/
        </div>
    )
}

All.getLayout = getShopItemsLayout

export default All
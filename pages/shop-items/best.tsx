import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";

const Best: NextPageWithLayout = () => {
    return (
        <div className={'shop-items__all'}>
            /best/
        </div>
    )
}

Best.getLayout = getShopItemsLayout

export default Best
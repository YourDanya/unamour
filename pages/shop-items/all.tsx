import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";
import {useSelector} from "react-redux";
import {selectCounterValue} from "../../redux/counter/counter.slice";


const All: NextPageWithLayout = () => {
    const counterValue = useSelector(selectCounterValue)
    return (
        <div className={'shop-items__all'}>
            {counterValue}
            /all/
        </div>
    )
}

All.getLayout = getShopItemsLayout

export default All
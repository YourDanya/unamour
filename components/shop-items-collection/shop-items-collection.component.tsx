import React from "react";
import {shopItemObject} from "../../redux/shop-items/shop-items.slice";
import ShopItemPreview from "../shop-item-preview/shop-item-preview.component";
import WithIntern from "../hoc/with-intern/with-intern";

interface itemsCollectionProps {
    items: shopItemObject[],
    title: string,
}

const ShopItemsCollection: React.FC<itemsCollectionProps> = ({items, title}) => {

    return (
        <div className={'items-collection'}>
            <div className="items-collection__title">
                {title}
            </div>
            {
                items && items.map((props) =>  <ShopItemPreview {...props}/>)
            }
        </div>
    )
}

export default ShopItemsCollection
import React from "react";
import {ShopItemObject} from "../../redux/shop-items/shop-items.slice";
import ShopItemPreview from "../shop-item-preview/shop-item-preview.component";

interface itemsCollectionProps {
    items: ShopItemObject['ua'][],
    title: string,
}

const ShopItemsCollection: React.FC<itemsCollectionProps> = ({items, title}) => {

    return (
        <div className={'shop-items-collection'}>
            <div className="shop-items-collection__title">
                {title}
            </div>
            {
                items && items.map((props) =>  <ShopItemPreview {...props}/>)
            }
        </div>
    )
}

export default ShopItemsCollection
import React from "react";
import ShopItem, {shopItemProps} from "../shop-item/shop-item.component";

interface itemsCollectionProps {
    shopItems: shopItemProps[],
    title: string
}

const ItemsCollection: React.FC<itemsCollectionProps> = ({shopItems, title}) => {

    return (
        <div className={'items-collection'}>
            <div className="items-collection__title">
                {title}
            </div>
            {
                shopItems ?
                    shopItems.map((props) =>  <ShopItem {...props}/>)
                    : (
                    <div className={''}>
                        ...
                    </div>
                )
            }
        </div>
    )
}

export default ItemsCollection
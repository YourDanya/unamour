import React from "react";
import ShopItemPreview from "../../shop-item-preview/shop-item-preview.component";
import {ClientItem} from "../../../redux/shop-items/shop-items.types";

type additionalProps = {
    similarItems: ClientItem[],
    viewedItems: ClientItem[]
}

const Additional: React.FC<additionalProps> = ({similarItems, viewedItems}) => {

    return (
        <div className='additional'>
            <div className="additional__title">СХОЖІ ТОВАРИ</div>
            <div className="additional__similar">
                {similarItems.map((props, index) => (
                    // <div className={'shop-item__add'} key={props.name + index}>
                        <ShopItemPreview key={props.slug + index} {...props}/>
                    // </div>
                ))}
            </div>
            <div className="additional__title">ПЕРЕГЛЯНУТІ ТОВАРИ</div>
            <div className="additional__viewed">
                {viewedItems.map((props, index) => (
                    //<div className={'shop-item__add'} key={props.slug + index}>
                        <ShopItemPreview key={props.slug + index} {...props}/>
                    //</div>
                ))}
            </div>
        </div>
    )
}

export default Additional
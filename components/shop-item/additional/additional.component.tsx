import React from "react";
import ShopItemPreview from "../../shop-item-preview/shop-item-preview.component";
import {ClientItem} from "../../../redux/shop-items/shop-items.types";
import {useSelector} from "react-redux";
import {selectClientItems} from "../../../redux/shop-items/shop-items.slice";

type additionalProps = {
    similarItems?: ClientItem[],
    viewedItems?: ClientItem[]
}

const Additional: React.FC<additionalProps> = () => {

    let items: ClientItem[] = useSelector(selectClientItems)

    const similarItems: ClientItem[] = []
    const viewedItems: ClientItem[] = []

    for (let i = 0; i < items.length; i++) {
        if (i < 4) similarItems.push(items[i])
        if (i > items.length - 5) viewedItems.push(items[i])
    }

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
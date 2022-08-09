import React from "react"
import ShopItemPreview from "../../shop-item-preview/shop-item-preview.component"
import {ClientItem} from "../../../redux/shop-items/shop-items.types"
import useAdditional from "./additional.hook"
import Slider from "../../common/slider/slider.component"

type additionalProps = {
    similarItems?: ClientItem[],
    viewedItems?: ClientItem[]
}

const Additional: React.FC<additionalProps> = () => {

    const {similarItems, viewedItems, perSlide} = useAdditional()

    return (
        <div className='additional'>
            <div className="additional__title">СХОЖІ ТОВАРИ</div>
            <Slider perSlide={perSlide} className={'additional__slider'}>
                {similarItems.map((props, index) => (
                    <ShopItemPreview key={props.slug + index} {...props}/>
                ))}
            </Slider>
            <div className="additional__title">ПЕРЕГЛЯНУТІ ТОВАРИ</div>
            <Slider perSlide={perSlide} className={'additional__slider'}>
                {viewedItems.map((props, index) => (
                    <ShopItemPreview key={props.slug + index} {...props}/>
                ))}
            </Slider>
        </div>
    )
}

export default Additional
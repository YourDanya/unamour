import React from "react";
import {ItemVariant} from "../../../redux/shop-items/shop-items.types";

type parametersProps = {
    name: string,
    oldPrice: number,
    price: number,
    sizes: string[],
    handleModalSize: (event: React.MouseEvent) => void,
    activeSize: string | null,
    handleSizeChange: (size: string) => void,
    color: {code: string, name: string},
    variants: ItemVariant[]
}

const Parameters: React.FC<parametersProps> = (props) => {

    const {name, oldPrice, price, sizes, handleModalSize, activeSize, handleSizeChange, color, variants} = props

    return (
        <>
            <div className="shop-item__name">
                {name}
            </div>
            <div className="shop-item__prices">
                <div className={'shop-item__price shop-item__price--old'}>
                    <div className={'shop-item__price-crossed'}/>
                    {oldPrice} ₴
                </div>
                <div className={'shop-item__price'}>{price} ₴</div>
            </div>
            <div className="shop-item__sizes">
                <div className="shop-item__sizes-top">
                    <div className="shop-item__sizes-label">Розміри</div>
                    <div className="shop-item__sizes-choose" onClick={handleModalSize}>Підібрати розмір</div>
                </div>
                <div className={'shop-item__sizes-list'}>
                    {sizes.map(size =>
                        <div
                            className={`shop-item__size ${activeSize === size ? 'shop-item__size--active' : ''}`}
                            key={size}
                            onClick={() => handleSizeChange(size)}
                        >
                            {size}
                        </div>
                    )}
                </div>
            </div>
            <div className="shop-item__colors">
                <div className={'shop-item__colors-label'}>Колір: {color.name}</div>
                <div className="shop-item__colors-list">
                    {<div className='shop-item__color shop-item__color--current'
                          style={{backgroundColor: color.code}}/>
                    }
                    {variants.map(({color: { code}}) => code === color.code ? null : (
                        <button
                            className={`shop-item__color`}
                            key={code}
                            style={{backgroundColor: code}}
                            onClick={(event) => console.log(event.target)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Parameters
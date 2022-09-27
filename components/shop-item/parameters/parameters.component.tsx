import React from 'react'
import {CommonVariant} from 'redux/shop-items/shop-items.types'

type ParametersProps = {
    name: string,
    oldPrice: number,
    price: number,
    sizes: string[],
    activeSize: string | null,
    showModal: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleSizeClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    color: {code: string, name: string},
    variants: CommonVariant[],
    modalState:  Record<"size" | "present", boolean> & {modal: boolean}
}

const Parameters: React.FC<ParametersProps> = (props) => {

    const {name, oldPrice, price, sizes, showModal, activeSize, handleSizeClick, color, variants, modalState} = props

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
                    <button className="shop-item__sizes-choose" name={'size'} onClick={showModal}>
                        Підібрати розмір
                    </button>
                </div>
                <div className={'shop-item__sizes-list'}>
                    {sizes.map(size =>
                        <button
                            className={`shop-item__size ${activeSize === size ? 'shop-item__size--active' : ''}`}
                            key={size}
                            name={size}
                            onClick={handleSizeClick}
                        >
                            {size}
                        </button>
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
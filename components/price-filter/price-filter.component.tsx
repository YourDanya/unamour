import React from "react";
import RangeSlider from "../common/range-slider/range-slider.component";

type priceFilterProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: { num1: string, num2: string }
    translateFrom: string,
    translateTo: string
}

const PriceFilter: React.FC<priceFilterProps> = ({handleChange, values, translateFrom, translateTo}) => {
    return (
        <div className={'shop-items__price'}>
            <div className='shop-items__price-input-block'>
                <label className={'shop-items__price-label'}>
                    {translateFrom}
                </label>
                <input
                    className={'shop-items__price-input'}
                    name='num1'
                    onChange={handleChange}
                    value={values.num1}
                    type={'number'}
                />
                <div className={'shop-items__price-currency'}>₴</div>
            </div>
            <div className='shop-items__price-input-block'>
                <label className={'shop-items__price-label'}>
                    {translateTo}
                </label>
                <input
                    className='shop-items__price-input'
                    name='num2'
                    onChange={handleChange}
                    value={values.num2}
                    type={'number'}
                />
                <div className={'shop-items__price-currency'}>₴</div>
            </div>
            <RangeSlider/>
        </div>
    )
}

export default PriceFilter
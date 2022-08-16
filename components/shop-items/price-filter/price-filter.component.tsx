import React from "react";
import RangeSlider from "../../common/range-slider/range-slider.component"
import usePriceFilter from "./price-filter.hook";

type priceFilterProps = {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    values: { num1: string, num2: string }
    translateFrom: string,
    translateTo: string,
    setValues: (values: {num1: string, num2: string}) => void
}

const PriceFilter: React.FC<priceFilterProps> = (props) => {

    const {handleChange, values, translateFrom, translateTo, setValues} = props

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
            <RangeSlider setValues={setValues} values={values}/>
        </div>
    )
}

export default PriceFilter
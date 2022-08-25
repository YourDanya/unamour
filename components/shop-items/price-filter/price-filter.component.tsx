import React from "react"
import RangeSlider from "../../common/range-slider/range-slider.component"
import usePriceFilter from "./price-filter.hook";

export type priceFilterProps = {
    from: string,
    min: string,
    to: string,
    max: string,
}

const PriceFilter: React.FC<priceFilterProps> = (props) => {

    const {max, min, to, from} = props
    const {price, setPriceValues, handlePriceChange} = usePriceFilter(props)

    return (
        <div className={'shop-items__price'}>
            <div className='shop-items__price-input-block'>
                <label className={'shop-items__price-label'}>{from}</label>
                <input
                    className={'shop-items__price-input'}
                    name='min'
                    onChange={handlePriceChange}
                    value={min}
                    type={'number'}
                />
                <div className={'shop-items__price-currency'}>₴</div>
            </div>
            <div className='shop-items__price-input-block'>
                <label className={'shop-items__price-label'}>{to}</label>
                <input
                    className='shop-items__price-input'
                    name='max'
                    onChange={handlePriceChange}
                    value={max}
                    type={'number'}
                />
                <div className={'shop-items__price-currency'}>₴</div>
            </div>
            <RangeSlider setValues={setPriceValues} values={price}/>
        </div>
    )
}

export default PriceFilter
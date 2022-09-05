import React from "react"
import RangeSlider from "../../common/range-slider/range-slider.component"
import usePriceFilter from "./price-filter.hook"

export type PriceFilterProps = {
    content: {
        min: string,
        max: string,
    },
    translation: {
        coefficient: number
        from: string,
        to: string
    }
    filter: string,
    filters: string[]
}

const PriceFilter: React.FC<PriceFilterProps> = (props) => {

    const {content: {max, min}, translation: {from, to}} = props
    const {price, setPrice, handlePriceChange} = usePriceFilter(props)
    
    return (
        <div className={'shop-items__price'}>
            <div className='shop-items__price-input-block'>
                <label className={'shop-items__price-label'}>{from}</label>
                <input
                    className={'shop-items__price-input'}
                    name='min'
                    onChange={handlePriceChange}
                    value={price.min}
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
                    value={price.max}
                    type={'number'}
                />
                <div className={'shop-items__price-currency'}>₴</div>
            </div>
            <RangeSlider setValues={setPrice} values={price} defMax={+max} defMin={+min}/>
        </div>
    )
}

export default PriceFilter
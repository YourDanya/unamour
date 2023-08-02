import {FC} from 'react'
import usePriceFilter from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.hook'
import RangeSlider from 'app/[locale]/_common/components/range-slider/range-slider.component'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import Input from 'app/[locale]/_common/components/input-v2/input.component'
import {priceParams} from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.content'

const PriceFilter: FC<FilterProps> = (props) => {
    const {values, setValues, onChange, transl, onRangeChange, valuesRef, onMouseUp, onMouseDown} = usePriceFilter(props)

    return (
        <div className={'shop-items-price-filter price'}>
            <div className='price__block'>
                <label className={'price__label'}>
                    {transl.from}
                </label>
                <Input
                    className={'price__input'}
                    name='min'
                    onChange={onChange}
                    value={values.min}
                    type={'number'}
                />
                <div className={'price__currency'}>₴</div>
            </div>
            <div className='price__block price__block--second'>
                <label className={'price__label'}>
                    {transl.to}
                </label>
                <Input
                    className='price__input'
                    name='max'
                    onChange={onChange}
                    value={values.max}
                    type={'number'}
                />
                <div className={'price__currency'}>₴</div>
            </div>
            <RangeSlider
                className={'price__slider'}
                onChange={onRangeChange}
                valuesRef={valuesRef}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
                values={values}
                defMin={+priceParams.min}
                defMax={+priceParams.max}
            />
        </div>
    )
}

export default PriceFilter
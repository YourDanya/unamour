import {FC} from 'react'
import usePriceFilter from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.hook'
import RangeSlider from 'app/[locale]/_common/components/range-slider/range-slider.component'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import Input from 'app/[locale]/_common/components/input-v2/input.component'

const PriceFilter: FC<FilterProps> = (props) => {
    const {values, setValues, onChange, transl} = usePriceFilter(props)
    
    return (
        <div className={'shop-items-price-filter price'}>
            <div className='price__block'>
                <label className={'price__label'}>{transl.from}</label>
                <Input
                    className={'price__input'}
                    name='min'
                    onChange={onChange}
                    value={values.min}
                    type={'number'}
                />
                <div className={'price__currency'}>₴</div>
            </div>
            <div className='price__block'>
                <label className={'price__label'}>{transl.to}</label>
                <Input
                    className='price__input'
                    name='max'
                    onChange={onChange}
                    value={values.max}
                    type={'number'}
                />
                <div className={'price__currency'}>₴</div>
            </div>
            <RangeSlider setValues={setValues} values={values}/>
        </div>
    )
}

export default PriceFilter
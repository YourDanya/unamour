import {FC} from 'react'
import {AdditionalProps} from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.types'

const Additional: FC<AdditionalProps> = () => {

    // const {similarItems, viewedItems, perSlide} = useAdditional()

    return (
        <div className='additional'>
            {/*<div className="additional__title">СХОЖІ ТОВАРИ</div>*/}
            {/*<Slider perSlide={perSlide} className={'additional__slider'}>*/}
            {/*    {similarItems.contacts-map((props, index) => (*/}
            {/*        <ShopItemPreview key={props.slug + index} {...props}/>*/}
            {/*    ))}*/}
            {/*</Slider>*/}
            {/*<div className="additional__title">ПЕРЕГЛЯНУТІ ТОВАРИ</div>*/}
            {/*<Slider perSlide={perSlide} className={'additional__slider'}>*/}
            {/*    {viewedItems.contacts-map((props, index) => (*/}
            {/*        <ShopItemPreview key={props.slug + index} {...props}/>*/}
            {/*    ))}*/}
            {/*</Slider>*/}
        </div>
    )
}

export default Additional
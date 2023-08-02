import {FC} from 'react'
import {AdditionalProps} from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.types'
import useAdditional from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.hook'
import Slider from 'app/[locale]/_common/components/slider/slider.component'
import ShopItemPreview from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.component'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import {CategoryItem} from 'app/[locale]/_common/types/types'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import {LoadedProps} from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.types'

const Additional: FC<AdditionalProps> = (props) => {
    const state = useAdditional(props)
    const {getViewedItems, getSimilarItems} = state
    const loadedState = state as LoadedProps

    return (
        <div className='container shop-items-additional additional'>
            {getViewedItems.loading || getSimilarItems.loading ? (
                <Spinner className={'additional__spinner'}/>
            ) : (
                <Loaded {...loadedState}/>
            )}
        </div>
    )
}

export default Additional

const Loaded = (props: LoadedProps) => {
    const {similarItems, viewedItems} = props

    return (
        <div className={'shop-items-additional-loaded additional'}>
            {similarItems && similarItems.length > 0 && (<Similar {...props}/>)}
            {viewedItems && viewedItems.length > 0 && (<Viewed {...props}/>)}
        </div>
    )
}

const Similar = (props: LoadedProps) => {
    const {transl, similarItems, elemRef, height, onResize} = props

    return (
        <div className={'shop-items-additional-block additional'}>
            <div className="additional__title">
                {transl.similarItems}
            </div>
            <Slider perSlide={3} className={'additional__slider'}>
                {similarItems.map((props, index) => (
                    <ShopItemPreview
                        onMount={index === 0 ? onResize : undefined}
                        itemRef={index === 0 ? elemRef : undefined}
                        key={props.common.slug}
                        {...props.common}
                        height={height}
                    />
                ))}
            </Slider>
        </div>
    )
}

const Viewed = (props: LoadedProps) => {
    const {transl, viewedItems, similarItems, elemRef, height} = props

    return (
        <div className={'shop-items-additional-block additional'}>
            <div className="additional__title">
                {transl.viewedItems}
            </div>
            <Slider perSlide={3} className={'additional__slider'}>
                {viewedItems.map((props, index) => (
                    <ShopItemPreview
                        itemRef={index === 0 && similarItems.length === 0 ? elemRef : undefined}
                        key={props.common.slug}
                        {...props.common}
                        height={height}
                    />
                ))}
            </Slider>
        </div>
    )
}
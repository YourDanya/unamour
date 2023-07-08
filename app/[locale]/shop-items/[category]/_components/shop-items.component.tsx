'use client'

import ShopItemPreview from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.component'
import {FC} from 'react'
import {ShopItemsProps} from 'app/[locale]/shop-items/[category]/_components/shop-items.types'
import useShopItems from 'app/[locale]/shop-items/[category]/_components/shop-items.hook'

const ShopItems: FC<ShopItemsProps> = (props) => {
    const {transl, items, locale, elemRef, height} = useShopItems(props)

    return (
        <div className={'shop-items'}>
            {items && items.length > 0 ? (
                <div className={'shop-items__collection'}>
                    <div className="shop-items__title">
                        {transl.title}
                    </div>
                    <div className={'shop-items__items'}>
                        {items && items.map((props, index) => (
                            <div className='shop-items__item' key={props.common.slug + index}>
                                <ShopItemPreview
                                    {...props.common}
                                    height={height}
                                    itemRef={index === 0 ? elemRef : undefined}
                                />
                                <div className={'shop-items__bottom'}>
                                    <div className="shop-items__name">
                                        {props.translations[locale].name}
                                    </div>
                                    <div className="shop-items__price">
                                        {props.common.price} ₴
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={'container shop-items__not-found'}>
                    {transl.notFound}
                </div>
            )}
        </div>
    )
}

export default ShopItems

'use client'

import ShopItemPreview from 'app/_common/components/shop-item-preview/shop-item-preview.component'
import {FC} from 'react'
import {ShopItemsProps} from 'app/[locale]/shop-items/[category]/_components/shop-items.types'
import useShopItems from 'app/[locale]/shop-items/[category]/_components/shop-items.hook'

const ShopItems: FC<ShopItemsProps> = (props) => {
    const state = useShopItems(props)
    const {transl, items} = state

    return (
        <div className={'shop-items items'}>
            {items && items.length > 0 ? (
                <ItemsCollection {...state}/>
            ) : (
                <div className={'container shop-items__not-found'}>
                    {transl.notFound}
                </div>
            )}
        </div>
    )
}

export default ShopItems

const ItemsCollection = (props: ReturnType<typeof useShopItems>) => {
    const { items, catalogRef} = props

    return (
        <div className={'shop-items-collection collection'} ref={catalogRef}>
            {items && items.map((_, index) => (
                <Item {...props} index={index} key={index}/>
            ))}
        </div>
    )
}

const Item = (props: ReturnType<typeof useShopItems> & {index: number}) => {
    const {items, index, height, elemRef, locale} = props
    const {slug, slugCategory, translations, images, color, price} = items[index]

    return (
        <div className="shop-items-item item">
            <ShopItemPreview
                slug={slug}
                slugCategory={slugCategory}
                images={images}
                color={color}
                height={height}
                itemRef={index === 0 ? elemRef : undefined}
            />
            <div className={'item__bottom'}>
                <div className="item__name">
                    {translations[locale].name}
                </div>
                <div className="item__price">
                    {price} ₴
                </div>
            </div>
        </div>
    )
}
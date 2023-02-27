import {CategoryItem} from 'redux/shop-items/shop-items.types'
import {MutableRefObject} from 'react'

export type ShopItemPreviewProps = CategoryItem & {
    width: number,
    height: number,
    itemRef?: MutableRefObject<HTMLDivElement | null>
}
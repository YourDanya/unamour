import {CategoryItem} from 'app/[locale]/_common/types/types'
import {MutableRefObject} from 'react'

export type ShopItemPreviewProps = {
    images: string [],
    slug: string,
    slugCategory: string,
    color: string,
    width?: number,
    height: number,
    itemRef?: MutableRefObject<HTMLDivElement | null>,
    className?: string
}
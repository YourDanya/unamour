import {CategoryItem} from 'app/_common/types/types'
import {MutableRefObject} from 'react'

export type ShopItemPreviewProps = {
    images: {path: string, url: string} [],
    slug: string,
    slugCategory: string,
    color: string,
    width?: number,
    height: number,
    itemRef?: MutableRefObject<HTMLDivElement | null>,
    className?: string,
    onMount?: () => void
}
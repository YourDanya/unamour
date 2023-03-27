import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {MutableRefObject} from 'react'

export type ItemFormProps = {
    item: FetchedItem,
    itemIndex: number,
    className?: string,
    toAddItem?: boolean
}

export type ItemVariant = { color: string, sizes: string[], images: string[], price: string, _id: string }

export type ImageFiles = Record<string, { file: File | string, color: string }>

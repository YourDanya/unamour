import {FetchedItem} from 'app/_common/types/fetched-item'
import {MutableRefObject} from 'react'

export type ItemFormProps = {
    data: FetchedItem,
    className?: string,
    toAddItem?: boolean
}

export type ItemVariant = { color: string, sizes: string[], images: {path: string, url: string}[], price: string, _id: string }

export type ItemImagesValues = Record<string, {file: File | null, url: string}> []

export type ItemImagesMap = Record<string, {color: string, file: File | null}>
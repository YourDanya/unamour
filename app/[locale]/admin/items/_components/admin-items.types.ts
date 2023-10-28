import {CSSProperties} from 'react'
import {FetchedItem} from 'app/_common/types/fetched-item'

export type ItemPreviewStyles = {
    num: CSSProperties,
    name: CSSProperties,
    category: CSSProperties,
    image: CSSProperties,
    actions: CSSProperties
}

export type FormValue = {
    action: '' | 'update' | 'create',
    item: FetchedItem,
    itemIndex: number
}
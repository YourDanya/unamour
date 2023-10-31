import {CSSProperties} from 'react'
import {AdminItem} from 'app/_common/types/admin-item'

export type ItemPreviewStyles = {
    num: CSSProperties,
    name: CSSProperties,
    category: CSSProperties,
    image: CSSProperties,
    actions: CSSProperties
}

export type FormValue = {
    action: '' | 'update' | 'create',
    item: AdminItem,
    itemIndex: number
}

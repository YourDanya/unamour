import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type ItemCommonProps = {
    slug: string,
    slugCategory: string,
    best: boolean,
    special: boolean,
    coming: boolean,
    oldPrice: string,
    itemValueRef: MutableRefObject<FetchedItem>,
    itemErrRef: MutableRefObject<number>,
    itemIndex: number,
    _id: string
}

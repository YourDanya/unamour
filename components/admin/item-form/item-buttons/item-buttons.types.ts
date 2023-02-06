import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type ItemButtonsProps = {
    itemValueRef: MutableRefObject<FetchedItem>,
    _id: string
}
import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type ItemButtonsProps = {
    slug: string,
    itemValueRef: MutableRefObject<FetchedItem>
}
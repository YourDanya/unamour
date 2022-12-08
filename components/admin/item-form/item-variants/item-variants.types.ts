import {ItemVariant} from 'redux/shop-items/shop-items.types'
import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type ItemVariantsProps = {
    variants: ItemVariant[],
    refObj: MutableRefObject<FetchedItem>
}
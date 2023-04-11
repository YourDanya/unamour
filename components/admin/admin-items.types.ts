import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type AdminItemNode = {
    prev?: AdminItemNode,
    value: FetchedItem,
    next?: AdminItemNode
}
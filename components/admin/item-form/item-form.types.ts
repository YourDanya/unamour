import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type RefObj = {refObj: Record<string, any>}

export type ItemFormProps = FetchedItem & {itemIndex: number}
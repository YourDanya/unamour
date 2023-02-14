import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {MutableRefObject} from 'react'

export type ItemFormProps = FetchedItem & {itemIndex: number, className?: string, toAddItem?: boolean}
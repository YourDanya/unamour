import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {createContext} from 'react'

export type ItemFormContext = {
    itemValue: FetchedItem,
    setItemValue: (item: FetchedItem) => void,
    errorCount: number,
    setErrorCount: (number: number) => void,
    slugs: Record<string, string>,
    setSlugs: (slugs: Record<string, string>) => void
}

export const ItemFormContext = createContext<ItemFormContext>({
    itemValue: {},
    setItemValue: (item) => {},
    errorCount: 0,
    setErrorCount: (number) => {},
    slugs: {},
    setSlugs: (slugs) => {}
} as ItemFormContext)
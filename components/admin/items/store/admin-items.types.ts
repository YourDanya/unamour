import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type AdminItemsState = {
    items: FetchedItem[],
    setItems: (items: FetchedItem[]) => void,
    deleteItem: (index: number) => void,
    addItem: (item: FetchedItem) => void,
    setItem: (item: FetchedItem, index: number) => void,
    addedItemId: string | null,
    setAddedItemId: (addedItemId: string | null) => void
}



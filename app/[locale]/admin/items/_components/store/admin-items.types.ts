import {FetchedItem} from 'app/_common/types/fetched-item'

export type AdminItemsState = {
    items: FetchedItem[],
    setItems: (items: FetchedItem[]) => void,
    deleteItem: (index: number) => void,
    addItem: (item: FetchedItem) => void,
    setItem: (item: FetchedItem, index: number) => void,
    addedItemId: string | null,
    setAddedItemId: (addedItemId: string | null) => void
}

export type AdminItem = FetchedItem & {deleted: boolean}
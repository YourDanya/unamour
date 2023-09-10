import {FetchedItem} from 'app/_common/types/fetched-item'

export type AdminItemsState = {
    items: AdminItem[],
    setItems: (items: AdminItem[]) => void,
    deleteItem: (index: number) => void,
    addItem: (item: AdminItem) => void,
    setItem: (item: AdminItem, index: number) => void,
    addedItemId: string | null,
    setAddedItemId: (addedItemId: string | null) => void
}

export type AdminItem = FetchedItem & {deleted: boolean}
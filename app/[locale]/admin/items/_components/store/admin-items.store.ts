import {create} from 'zustand'
import {AdminItemsState} from 'app/[locale]/admin/items/_components/store/admin-items.types'

export const useAdminItemsStore = create<AdminItemsState>((set) => ({
    items: [],
    setItems: (items) => set({items}),
    addItem: (item) => set(({items}) => {
        items.push(item)
        return {items}
    }),
    deleteItem: (index) => set(({items}) => {
        items.splice(index, 1)
        return {items}
    }),
    setItem: (item, index) => set(({items}) => {
        items[index] = item
        return {items}
    }),
    addedItemId: null,
    setAddedItemId: (addedItemId) => set({addedItemId})
}))



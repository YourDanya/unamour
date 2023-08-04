import {ItemSave} from 'app/_common/types/item-save'
import {FetchedItem} from 'app/_common/types/types'

export type ViewedStore = {
    saved: ItemSave[],
    items: FetchedItem[],
    setSaved: (saved: ItemSave[]) => void,
    setItems: (items: FetchedItem[]) => void
}

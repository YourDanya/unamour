import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {ItemImagesValues} from 'components/admin/items/item-form/item-form.types'
import {ItemImagesMap} from 'components/admin/items/item-form/item-form.types'

export type CreateItemImagesMap = (params: {itemImagesValues: ItemImagesValues, itemValue: FetchedItem}) => ItemImagesMap

export type CreateItemImagesValues = (params: {itemValue: FetchedItem}) => ItemImagesValues
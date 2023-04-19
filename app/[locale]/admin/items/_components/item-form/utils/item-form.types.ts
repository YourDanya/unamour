import {FetchedItem} from 'app/[locale]/_redux/shop-items/shop-items.types'
import {ItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

export type CreateItemImagesMap = (params: {itemImagesValues: ItemImagesValues, itemValue: FetchedItem}) => ItemImagesMap

export type CreateItemImagesValues = (params: {itemValue: FetchedItem}) => ItemImagesValues
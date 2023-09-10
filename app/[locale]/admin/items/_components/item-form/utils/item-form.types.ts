import {FetchedItem} from 'app/_common/types/fetched-item'
import {ItemImagesMap} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemImagesValues} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

export type CreateItemImagesMap = (params: {itemImagesValues: ItemImagesValues, itemValue: FetchedItem}) => ItemImagesMap

export type CreateItemImagesValues = (params: {itemValue: FetchedItem}) => ItemImagesValues
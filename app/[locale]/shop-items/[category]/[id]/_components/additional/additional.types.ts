import {ClientItem} from 'app/[locale]/_redux/shop-items/shop-items.types'

export type AdditionalProps = {
    similarItems?: ClientItem[],
    viewedItems?: ClientItem[]
}
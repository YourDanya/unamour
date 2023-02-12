import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {CategoryItem} from 'redux/shop-items/shop-items.types'

export type ShopItemsPageProps = {
    items: CategoryItem[],
    title: string
}

export type ShopItemPageProps = {
    item: FetchedItem
}
import {ClientItem} from 'redux/shop-items/shop-items.types'

export type ShopItemsPageProps = {
    items: ClientItem[],
    title: string
}

export type ShopItemPageProps = {
    item: ClientItem
}
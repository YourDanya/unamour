import {CategoryItem} from 'redux/shop-items/shop-items.types'

export type FavoriteItem = {
    data: CategoryItem,
    liked: boolean
}
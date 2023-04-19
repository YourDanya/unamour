import {CategoryItem} from 'app/[locale]/_redux/shop-items/shop-items.types'

export type FavoriteItem = {
    data: CategoryItem,
    liked: boolean
}
import {CategoryItem} from 'app/_common/types/category-item'
import {MutableRefObject} from 'react'

export type FavoriteItemProps = {
    item: CategoryItem,
    height: number,
    itemRef?: MutableRefObject<HTMLDivElement | null>
}
import {CategoryItem} from 'app/[locale]/_redux/shop-items/shop-items.types'

export type FilterItems = (items: CategoryItem[], filters: Record<string, string>) => CategoryItem[]
import {CategoryItem} from 'app/[locale]/_common/types/types'

export type FilterItems = (items: CategoryItem[], filters: Record<string, string>) => CategoryItem[]
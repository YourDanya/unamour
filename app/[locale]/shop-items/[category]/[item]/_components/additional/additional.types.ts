import {CategoryItem} from 'app/[locale]/_common/types/types'
import {useShopItem} from 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.hook'
import useAdditional from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.hook'

export type AdditionalProps = ReturnType<typeof useShopItem>

export type LoadedProps = ReturnType<typeof useAdditional> & {similarItems: CategoryItem[], viewedItems: CategoryItem[]}
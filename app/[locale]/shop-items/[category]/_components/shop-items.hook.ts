import {otherCategoriesContent} from 'app/[locale]/_content/content'
import {categoriesContent} from 'app/[locale]/_content/content'
import {filterItems} from 'app/[locale]/_common/utils/component/component.utils'
import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {ShopItemsProps} from 'app/[locale]/shop-items/[category]/_components/shop-items.types'
import {shopItemsContent} from 'app/[locale]/shop-items/[category]/_components/shop-items.content'
import {useRouter} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'
import {useSearchParams} from 'next/navigation'
import {useParams} from 'next/navigation'

export const useShopItems = (props: ShopItemsProps) => {
    const [transl] = useLocale(shopItemsContent)
    const clothingCategories = useLocale(categoriesContent)
    const otherCategories = useLocale(otherCategoriesContent)

    const searchParams = useSearchParams()

    const queryCategory = searchParams.get('category') as string

    let index = clothingCategories[1].findIndex(category => category === queryCategory)
    let title: string
    if (index !== -1) {
        title = clothingCategories[0][index]
    }
    else {
        index = otherCategories[1].findIndex(category => category === queryCategory)
        title = otherCategories[0][index]
    }

    // const {category: _, reset: __, ...other} = searchParams.forEach()
    const filters = {} as Record<string, string>
    const items = props.items ? filterItems(props.items, filters) : []

    const {width, height, elemRef} = useGetParamForImages(4 / 3)

    const locale = useParams().locale as Locale

    return {transl: {...transl, title}, items, width, elemRef, locale}
}

export default useShopItems
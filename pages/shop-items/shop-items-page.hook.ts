import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import {otherCategoriesContent} from 'components/common/content/content'
import {useRouter} from 'next/router'
import {shopItemsPageContent} from 'pages/shop-items/shop-items-page.content'
import {filterItems} from 'utils/component/component.utils'
import {ShopItemsPageProps} from 'pages/shop-items/shop-items-page.types'
import {useGetParamForImages} from 'hooks/other/other.hooks'
import {Locale} from 'types/types'

export const useShopItems = (props: ShopItemsPageProps) => {
    const [transl] = useLocale(shopItemsPageContent)
    const clothingCategories = useLocale(categoriesContent)
    const otherCategories = useLocale(otherCategoriesContent)
    const queryCategory = useRouter().query.category as string
    let index = clothingCategories[1].findIndex(category => category === queryCategory)
    let title: string
    if (index !== -1) {
        title = clothingCategories[0][index]
    }
    else {
        index = otherCategories[1].findIndex(category => category === queryCategory)
        title = otherCategories[0][index]
    }

    const {category: _, reset: __, ...other} = useRouter().query
    const filters = other as Record<string, string>
    const items = filterItems(props.items, filters)

    const {width, height, elemRef} = useGetParamForImages(4 / 3)

    const locale = useRouter().locale as Locale

    return {transl: {...transl, title}, items, width, elemRef, locale}
}

export default useShopItems
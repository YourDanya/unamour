import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import {otherCategoriesContent} from 'components/common/content/content'
import {useRouter} from 'next/router'
import {shopItemPageContent} from 'pages/shop-items/shop-item-page.content'

export const useShopItemsPage = () => {
    const [transl] = useLocale(shopItemPageContent)
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

    return {transl: {...transl, title}}
}

export default useShopItemsPage
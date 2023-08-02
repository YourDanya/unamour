import {linksContent} from 'app/[locale]/shop-items/[category]/[item]/_components/links/links.content'
import {categories} from 'app/[locale]/_content/categories/categories.content'
import {useShopItem} from 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.hook'
import {categoriesDictionary} from 'app/[locale]/_content/categories/categories.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {clothingDictionary} from 'app/[locale]/_content/categories/categories.content'
import {useMemo} from 'react'
import {clothing} from 'app/[locale]/_content/categories/categories.content'

const useLinks = (props: ReturnType<typeof useShopItem>) => {
    const transl = useLocale(linksContent)

    const {props: {common: {slugCategory}}} = props

    const categoriesTransl = useLocale(categoriesDictionary)
    const clothingTransl = useLocale(clothingDictionary)

    const category = useMemo(() => {
        let category

        const categoryIndex = categories.findIndex(category => category === slugCategory)

        if (categoryIndex !== -1) {
            category = categoriesTransl[categoryIndex]
        }

        const clothingIndex = clothing.findIndex(clothing => slugCategory === clothing)

        if (categoryIndex === -1) {
            category = clothingTransl[clothingIndex]
        }

        return category
    }, [slugCategory])

    return {transl: {...transl, category}}
}

export default useLinks
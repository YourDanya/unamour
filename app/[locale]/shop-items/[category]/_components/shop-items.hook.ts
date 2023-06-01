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
import {useRef} from 'react'
import useResize from 'app/[locale]/_common/hooks/component/component.hooks'
import {useState} from 'react'
import {useExternalState} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useEffect} from 'react'
import {useLayoutEffect} from 'react'

export const useShopItems = (props: ShopItemsProps) => {
    const test = useRef(performance.now())

    const [transl] = useLocale(shopItemsContent)
    const clothingCategories = useLocale(categoriesContent)
    const otherCategories = useLocale(otherCategoriesContent)

    const searchParams = useSearchParams()

    const queryCategory = searchParams.get('category') as string

    let index = clothingCategories[1].findIndex(category => category === queryCategory)
    let title: string
    if (index !== -1) {
        title = clothingCategories[0][index]
    } else {
        index = otherCategories[1].findIndex(category => category === queryCategory)
        title = otherCategories[0][index]
    }

    const filters = {} as Record<string, string>
    const items = props.items ? filterItems(props.items, filters) : []

    const locale = useParams().locale as Locale

    const [height, setHeight] = useState(0)

    const elemRef = useRef<HTMLDivElement | null>(null)

    useResize(() => {
        const width = elemRef.current?.getBoundingClientRect().width as number
        setHeight(width * 4 / 3)
    })

    return {transl: {...transl, title}, items, elemRef, locale, height}
}

export default useShopItems
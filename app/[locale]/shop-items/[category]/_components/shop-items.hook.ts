import {otherCategoriesContent} from 'app/_common/content/content'
import {categoriesContent} from 'app/_common/content/content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {ShopItemsProps} from 'app/[locale]/shop-items/[category]/_components/shop-items.types'
import {shopItemsContent} from 'app/[locale]/shop-items/[category]/_components/shop-items.content'
import {useRouter} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import {useSearchParams} from 'next/navigation'
import {useParams} from 'next/navigation'
import {useRef} from 'react'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'
import {useState} from 'react'
import {useEffect} from 'react'
import {useLayoutEffect} from 'react'

export const useShopItems = (props: ShopItemsProps) => {
    const [transl] = useLocale(shopItemsContent)
    const clothing = useLocale(categoriesContent)
    const otherCategories = useLocale(otherCategoriesContent)

    const items = props.items ?? []

    const locale = useParams().locale as Locale

    const [height, setHeight] = useState(0)
    const elemRef = useRef<HTMLDivElement | null>(null)

    useResize(() => {
        const width = elemRef.current?.getBoundingClientRect().width as number
        setHeight(width * 4 / 3)
    })

    return {transl, items, elemRef, locale, height, props}
}

export default useShopItems
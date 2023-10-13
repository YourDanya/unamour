import {ShopItemsProps} from 'app/[locale]/shop-items/[category]/_components/shop-items.types'
import {shopItemsContent} from 'app/[locale]/shop-items/[category]/_components/shop-items.content'
import {Locale} from 'app/_common/types/types'
import {useSearchParams} from 'next/navigation'
import {useParams} from 'next/navigation'
import { useRef} from 'react'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'
import {useState} from 'react'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {useInfiniteItemsLoad} from 'app/_common/hooks/helpers/infinite-items-load/infinite-items-load.hook'
import useOmitFirstEffect from 'app/_common/hooks/helpers/omit-first-effect/omit-first-effect.hook'

export const useShopItems = (props: ShopItemsProps) => {
    const transl = useLocale(shopItemsContent)

    const [items, setItems] = useState(props.items ?? [])

    const locale = useParams().locale as Locale
    const paramColor = useSearchParams().get('color')

    const [height, setHeight] = useState(0)
    const elemRef = useRef<HTMLDivElement | null>(null)

    const catalogRef = useRef<HTMLDivElement | null>(null)

    useResize(() => {
        const width = elemRef.current?.getBoundingClientRect().width as number
        setHeight(width * 4 / 3)
    })

    const category = useParams().category

    const searchParams = useSearchParams()

    let url = `shop-item/category/${category}`
    const searchUrl = searchParams.toString()

    if (searchUrl) {
        url+=`?${searchUrl}`
    }

    const [nextPage, setNextPage ] = useState(2)

    const {getItems} = useInfiniteItemsLoad({items, setItems, nextPage,  setNextPage, url, elemRef: catalogRef})

    useOmitFirstEffect(() => {
        setNextPage(2)
        setItems(props.items ?? [])
    }, [props.items])

    return {transl, items, elemRef, locale, height, props, paramColor, catalogRef, getItems}
}

export default useShopItems
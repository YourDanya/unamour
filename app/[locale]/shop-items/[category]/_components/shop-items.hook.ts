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
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import useSearch from 'app/[locale]/search/_components/search.hook'
import {usePathname} from 'next/navigation'
import {CategoryItem} from 'app/_common/types/category-item'
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

    const [nextPage, setNextPage] = useState(2)

    const getItems = useApiCall<{ items: CategoryItem[] }>({
        onSuccess: ({items: newItems}) => {
            setItems([...items, ...newItems])
            setNextPage(nextPage + 1)
        },
        onError: () => {

        }
    })

    const startRef = useRef<() => void>(() => {})

    const searchParams = useSearchParams()

    const urlRef = useRef('')

    const category = useParams().category

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        params.set('page', nextPage.toString())
        urlRef.current = `shop-item/category/${category}/?${params.toString()}`
    }, [searchParams, nextPage])

    startRef.current = () => getItems.start({url: urlRef.current})

    const shouldSkipRef = useRef(false)

    const onScroll = () => {
        if (!catalogRef.current || shouldSkipRef.current) {
            return
        }

        const bottom = catalogRef.current.getBoundingClientRect().bottom

        if (bottom < window.innerHeight + 50) {
            shouldSkipRef.current = true
            startRef.current()
        }
    }

    useEffect(() => {
        shouldSkipRef.current = props.total === items.length
    }, [items])

    useOmitFirstEffect(() => {
        setItems(props.items ?? [])
        setNextPage(2)
    }, [props.items])

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return {transl, items, elemRef, locale, height, props, paramColor, catalogRef}
}

export default useShopItems
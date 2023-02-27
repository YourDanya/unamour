import {useSelector} from 'react-redux'
import {selectSearchItems} from 'redux/shop-items/shop-items.selector'
import {useLocale} from 'hooks/other/other.hooks'
import searchContent from 'pages/search/search.content'
import {useRouter} from 'next/router'
import {Locale} from 'redux/main/main.types'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectShopItemsField} from 'redux/shop-items/shop-items.selector'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {ChangeEvent} from 'react'
import {searchItemsAsync} from 'redux/shop-items/shop-items.thunk'
import {useEffect} from 'react'
import {useLayoutResizeObserve} from 'hooks/component/component.hooks'
import {useLayoutEffect} from 'react'
import {useRef} from 'react'

const useSearch = () => {
    const [transl] = useLocale(searchContent)

    const router = useRouter()
    const locale = router.locale as Locale
    const query = router.query.query as string

    const items = useSelector(selectSearchItems)
    const searchItems = useParamSelector(selectShopItemsField, 'searchItems')
    const [first, setFirst] = useState(true)

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onSubmit = () => {
        router.push(`/search/?query=${input}`)
    }

    useEffect(() => {
        if (query) {
            dispatch(searchItemsAsync({query, locale}))
        }
    }, [query])

    useEffect(() => {
        if (searchItems.loading && first) {
            setFirst(false)
        }
    }, [searchItems.loading])

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
    }

    const [width, setWidth] = useState(0)

    useLayoutResizeObserve(() => {{
        if (itemRef.current) {
            setWidth(itemRef.current.getBoundingClientRect().width)
        }
    }})

    useLayoutEffect(() => {
        const width = itemRef.current?.getBoundingClientRect().width as number
        setWidth(width)
    }, [])

    const itemRef = useRef<HTMLDivElement>(null)

    return {items, input, onChange, transl, locale, searchItems, onSubmit, first, itemRef, width}
}

export default useSearch
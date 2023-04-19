import {useSelector} from 'react-redux'
import {selectSearchItems} from 'app/[locale]/_redux/shop-items/shop-items.selector'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useRouter} from 'next/navigation'
import {Locale} from 'app/[locale]/_redux/main/main.types'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectShopItemsField} from 'app/[locale]/_redux/shop-items/shop-items.selector'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {ChangeEvent} from 'react'
import {searchItemsAsync} from 'app/[locale]/_redux/shop-items/shop-items.thunk'
import {useEffect} from 'react'
import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'
import searchContent from 'app/[locale]/search/_components/search.content'

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

    const {width, height, elemRef} = useGetParamForImages()

    return {items, input, onChange, transl, locale, searchItems, onSubmit, first, width, height, elemRef}
}

export default useSearch
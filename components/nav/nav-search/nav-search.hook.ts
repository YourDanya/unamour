import {useState, ChangeEvent} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {Locale} from 'redux/main/main.types'
import {useLocale} from 'hooks/other/other.hooks'
import navSearchContent from 'components/nav/nav-search/nav-search.content'
import {selectSearchItems} from 'redux/shop-items/shop-items.selector'
import {useDispatch} from 'react-redux'
import {useDebounce} from 'hooks/enhanced/enhanced.hooks'
import {searchItemsAsync} from 'redux/shop-items/shop-items.thunk'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectShopItemsField} from 'redux/shop-items/shop-items.selector'

const useNavSearch = () => {
    const [transl] = useLocale(navSearchContent)

    const [hidden, setHidden] = useState(true)
    const locale = useRouter().locale as Locale
    const items = useSelector(selectSearchItems)
    const searchItems = useParamSelector(selectShopItemsField, 'searchItems')

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.currentTarget.value
        setInput(query)
        if (!searchItems.loading) {
            onSubmit(query)
        }
    }

    const onSubmit = useDebounce((query: string) => {
        dispatch(searchItemsAsync({query, locale}))
    })

    return {hidden, items, input, onChange, transl, locale, searchItems}
}

export default useNavSearch
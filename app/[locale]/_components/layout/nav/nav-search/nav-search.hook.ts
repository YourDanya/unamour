import {useState, ChangeEvent} from 'react'
import {useRouter} from 'next/navigation'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import navSearchContent from 'app/[locale]/_components/layout/nav/nav-search/nav-search.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {Locale} from 'app/_common/types/types'
import {useParams} from 'next/navigation'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {CategoryItem} from 'app/_common/types/category-item'

const useNavSearch = () => {
    const [transl] = useLocale(navSearchContent)

    const locale = useParams().locale as Locale

    const [input, setInput] = useState('')

    const searchItems = useApiCall<{items: CategoryItem[]}>(`shop-item/search?query=${input}`)

    const items = searchItems?.data?.items

    const onSubmit = useDebounce((query: string) => {
        if (query) {
            console.log('submitting')
            searchItems.start({locale, query})
        }
    })

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.currentTarget.value
        setInput(query)
        if (!searchItems.loading) {
            onSubmit(query)
        }
    }

    return {items, input, onChange, transl, locale, searchItems}
}

export default useNavSearch
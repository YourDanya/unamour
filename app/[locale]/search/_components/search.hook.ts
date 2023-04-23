import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {ChangeEvent} from 'react'
import {useEffect} from 'react'
import {useGetParamForImages} from 'app/[locale]/_common/hooks/other/other.hooks'
import searchContent from 'app/[locale]/search/_components/search.content'
import {useParams} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'
import {useSearchParams} from 'next/navigation'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {CategoryItem} from 'app/[locale]/_common/types/types'

const useSearch = () => {
    const [transl] = useLocale(searchContent)

    const router = useRouter()
    const locale = useParams().locale as Locale
    const query = useSearchParams().get('query') as string

    const [first, setFirst] = useState(true)
    const [input, setInput] = useState('')

    const searchItems = useApiCall<{items: CategoryItem[]}>('shop-item/search', {
        method: 'POST',
        body: {query, locale}
    })

    const items = searchItems?.data?.items

    const onSubmit = () => {
        router.push(`/search/?query=${input}`)
    }

    useEffect(() => {
        if (query) {
            searchItems.start()
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

    return {items, input, onChange, transl, locale, onSubmit, first, width, height, elemRef, searchItems}
}

export default useSearch
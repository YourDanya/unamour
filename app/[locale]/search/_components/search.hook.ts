import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useState} from 'react'
import {ChangeEvent} from 'react'
import {useEffect} from 'react'
import useGetParamForImages from 'app/_common/hooks/helpers/get-param-for-images/get-param-for-images.hook'
import searchContent from 'app/[locale]/search/_components/search.content'
import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'
import {useSearchParams} from 'next/navigation'
import {useInfiniteItemsLoad} from 'app/_common/hooks/helpers/infinite-items-load/infinite-items-load.hook'
import {MouseEvent} from 'react'
import {FormEvent} from 'react'

const useSearch = () => {
    const [transl] = useLocale(searchContent)

    const locale = useParams().locale as Locale
    const query = useSearchParams().get('query') as string

    const [first, setFirst] = useState(true)
    const [input, setInput] = useState(query)

    const [items, setItems] = useState([])
    const [nextPage, setNextPage] = useState(1)

    const {height, elemRef} = useGetParamForImages()

    const url = `shop-item/search?query=${input}`

    const {getItems: searchItems} = useInfiniteItemsLoad({
        url, elemRef, items, setItems, nextPage, setNextPage
    })

    const onSubmit = (event: FormEvent<HTMLFormElement> | MouseEvent) => {
        event.preventDefault()
        setItems([])
        setNextPage(1)
        setFirst(true)
    }

    useEffect(() => {
        if (!first) {
            return
        }
        setFirst(false)
        searchItems.start({url})
    }, [first])

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value)
    }

    return {items, input, onChange, transl, locale, onSubmit, first, height, elemRef, searchItems}
}
export default useSearch
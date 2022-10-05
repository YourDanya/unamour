import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {selectClientItems} from 'redux/shop-items/shop-items.slice'
import {ClientItem} from 'redux/shop-items/shop-items.types'
import {Locale} from 'redux/main/main.types'
import {useLocale} from 'hooks/other/other.hooks'
import navSearchContent from 'components/nav/nav-search/nav-search.content'

const useNavSearch = () => {

    const [transl] = useLocale(navSearchContent)

    const [hidden, setHidden] = useState(true)
    const locale = useRouter().locale as Locale
    const items = useSelector(selectClientItems)
    const [searchItems, setSearchItems] = useState<ClientItem[]>([])
    const [input, setInput] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value
        if (input) {
            const searchItems = items.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
            setSearchItems(searchItems)
        } else {
            setSearchItems([])
        }
        setInput(input)
    }

    return {hidden, searchItems, input, handleChange, transl}
}

export default useNavSearch
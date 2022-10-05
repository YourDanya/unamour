import React, {useEffect, useState} from 'react'
import search from 'public/icons/search.svg'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {LocaleType} from 'types/types'
import {selectClientItems} from 'redux/shop-items/shop-items.slice'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import {ClientItem} from 'redux/shop-items/shop-items.types'
import {NextPage} from 'next'
import Input from 'components/common/input/input.component'

type SearchProps = {}

const SearchPage: NextPage<SearchProps> = () => {

    const query = useRouter().query.query as string
    const locale = useRouter().locale as LocaleType
    const items = useSelector(selectClientItems)
    const [searchItems, setSearchItems] = useState<ClientItem[]>([])
    const [input, setInput] = useState(query)

    useEffect(() => {
        if (input) {
            const searchItems = items.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
            setSearchItems(searchItems)
        } else {
            setSearchItems([])
        }
    }, [input])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <div className={'search-page'}>
            <div className="search-page__top">
                <div className='search-page__title'>РЕЗУЛЬТАТИ ПОШУКУ</div>
                <div className='search-page__input'>
                    <Input
                        placeholder={'Знайти'}
                        value={input}
                        name={'search'}
                        handleChange={onChange}
                    >
                        <img className={'search__icon'} src={search.src} alt={'search icon'}/>
                    </Input>
                </div>
            </div>
            <div className='search-page__results'>
                {searchItems.map((item, index) =>
                    <div className="search-page__item" key={item.slug + 1}>
                        <ShopItemPreview {...item}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchPage
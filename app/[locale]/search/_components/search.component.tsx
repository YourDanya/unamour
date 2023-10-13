'use client'

import {NextPage} from 'next'
import search from 'public/icons/search.svg'
import ShopItemPreview from 'app/_common/components/shop-item-preview/shop-item-preview.component'
import Button from 'app/_common/components/button/button.component'
import Spinner from 'app/_common/components/spinner/spinner.component'
import useSearch from 'app/[locale]/search/_components/search.hook'
import Input from 'app/_common/components/input/input.component'
import {CategoryItem} from 'app/_common/types/category-item'
import {MutableRefObject} from 'react'
import {Locale} from 'app/_common/types/types'

const Search: NextPage = () => {
    const state = useSearch()

    const {searchItems, first} = state

    return (
        <div className={'search-page search'}>
            <SearchTop {...state}/>
            <SearchCatalog {...state}/>
            {searchItems.loading || first && (
                <Spinner className={'search__spinner'}/>
            )}
        </div>
    )
}

export default Search

const SearchTop = (props: ReturnType<typeof useSearch>) => {
    const {transl, input, onChange, onSubmit} = props

    return (
        <div className="container search-top search">
            <div className="search__title">{transl.results}</div>
            <form className="search__input-wrapper" onSubmit={onSubmit}>
                <Input
                    placeholder={transl.input}
                    value={input}
                    name={'search'}
                    onChange={onChange}
                />
                <Button onClick={onSubmit}>
                    <img className={'search__icon'} src={search.src} alt={'search i-description'}/>
                </Button>
            </form>
        </div>
    )
}

const SearchCatalog = (props: ReturnType<typeof useSearch>) => {
    const {items, elemRef, transl, first, searchItems} = props

    return (
        <div className={'search-catalog search'}>
            {items.length > 0 && (
                <SearchResults {...props}/>
            )}
            {items.length === 0 && !(first || searchItems.loading) && (
                <div className="search__not-found">
                    {transl.notFound}
                </div>
            )}
        </div>
    )
}

const SearchResults = (props: ReturnType<typeof useSearch>) => {
    const {items, height, elemRef, locale} = props

    return (
        <div className='search-results search'>
            {(items as CategoryItem[]).map((item, index) => (
                <SearchItem
                    key={item._id + item.color}
                    item={item}
                    height={height}
                    elemRef={elemRef}
                    locale={locale}
                    index={index}
                />
            ))}
        </div>
    )
}

const SearchItem = (
    props: {
        item: CategoryItem,
        height: number,
        elemRef: MutableRefObject<HTMLDivElement | null>,
        index: number,
        locale: Locale
    }
) => {
    const {height, elemRef, index, locale, item} = props
    const {translations, price} = item
    const {name} = translations[locale]

    return (
        <div className={'search-item item'}>
            <ShopItemPreview
                {...item}
                key={item._id + item.color}
                height={height}
                itemRef={index === 0 ? elemRef : undefined}
            />
            <div className={'item__bottom'}>
                <div className={'item__name'}>
                    {name}
                </div>
                <div className={'item__price'}>
                    {price}
                </div>
            </div>
        </div>
    )
}
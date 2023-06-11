'use client'

import {NextPage} from 'next'
import search from 'public/icons/search.svg'
import ShopItemPreview from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import useSearch from 'app/[locale]/search/_components/search.hook'
import Input from 'app/[locale]/_common/components/input/input.component'

const Search: NextPage = () => {
    const {items, onChange, transl, input, onSubmit, searchItems, first, width, height, elemRef} = useSearch()

    return (
        <div className={'search'}>
            <div className="container search__top">
                <div className="search__title">{transl.results}</div>
                <div className="search__input-wrapper">
                    <Input
                        placeholder={transl.input}
                        value={input}
                        name={'search'}
                        onChange={onChange}
                    />
                    <Button onClick={onSubmit}>
                        <img className={'search__icon'} src={search.src} alt={'search i-description'}/>
                    </Button>
                </div>
            </div>
            {searchItems.loading || first ? (
                    <Spinner className={'search__spinner'}/>
                ) : (
                    items && items.length > 0 ? (
                        <div className="search__results">
                            {items.map((item, index) => (
                                <ShopItemPreview
                                    {...item.common}
                                    key={item.common.slug + index}
                                    width={width}
                                    height={height}
                                    itemRef={index === 0 ? elemRef : undefined}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="search__not-found">
                            {transl.notFound}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Search
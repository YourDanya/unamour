import React, {} from 'react'
import {NextPage} from 'next'
import search from 'public/icons/search.svg'
import useSearch from 'pages/search/search.hook'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import Spinner from 'components/common/spinner/spinner.component'

const Search: NextPage = () => {
    const {items, onChange, transl, input, onSubmit, searchItems, first, width, itemRef} = useSearch()

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
                        <img className={'search__icon'} src={search.src} alt={'search icon'}/>
                    </Button>
                </div>
            </div>
            {searchItems.loading || first ? (
                    <Spinner className={'search__spinner'}/>
                ) :
                (items.length > 0 ? (
                        <div className="search__results">
                            {items.map((item, index) => (
                                <ShopItemPreview
                                    {...item}
                                    key={item.common.slug + index}
                                    width={width}
                                    height={width * 4 / 3}
                                    itemRef={index === 0 ? itemRef : undefined}
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
import {NextPage} from 'next'
import useSearch from 'pages/search/search.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import search from 'public/icons/search.svg'
import Spinner from 'components/common/spinner/spinner.component'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'

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
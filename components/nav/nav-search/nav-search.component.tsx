import {FC} from 'react'
import search from 'public/icons/search.svg'
import useNavSearch from 'components/nav/nav-search/nav-search.hook'
import Link from 'next/link'
import Input from 'components/common/input/input.component'
import Spinner from 'components/common/spinner/spinner.component'

const NavSearch: FC = () => {
    const {items, input, onChange, transl, locale, searchItems} = useNavSearch()

    return (
        <div className={`nav-search`}>
            <div className="nav-search__title">
                {transl.search}
            </div>
            <div className="nav-search__input-wrapper">
                <Input
                    className={'nav-search__input'}
                    name={'search'}
                    placeholder={'Знайти'}
                    value={input}
                    onChange={onChange}
                />
                {searchItems.loading ? (
                    <Spinner className={'nav-search__spinner'}/>
                ) : (
                    <img className={'nav-search__icon'} src={search.src} alt={'search icon'}/>
                )}
            </div>
            {items.length > 0 ? (
                <div className="nav-search__results">
                    {items.filter((item, index) => index < 4).map((item, index) =>
                        <Link
                            href={`/shop-items/${item.common.slugCategory}/${item.common.slug}`}
                            key={item.translations[locale].name + index}
                        >
                            <a className="nav-search__item">
                                <img
                                    className="nav-search__item-img"
                                    src={item.common.images[0]}
                                    alt={'search item image'}
                                />
                                <div className="nav-search__item-name">
                                    {item.translations[locale].name}
                                </div>
                            </a>
                        </Link>
                    )}
                    <div className="nav-search__button-wrapper">
                        <Link href={`/search?query=${input}`}>
                            <a className="nav-search__button">{transl.allRes}</a>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="nav-search__popular">
                </div>
            )}
        </div>
    )
}

export default NavSearch
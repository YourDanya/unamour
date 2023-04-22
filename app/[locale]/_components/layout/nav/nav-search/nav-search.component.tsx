'use client'

import {FC} from 'react'
import search from 'public/icons/search.svg'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import useNavSearch from 'app/[locale]/_components/layout/nav/nav-search/nav-search.hook'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import Link from 'next/link'
import Input from 'app/[locale]/_common/components/input/input.component'
import 'app/[locale]/_components/layout/nav/nav-search/nav-search.styles.sass'

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
                    placeholder={transl.search}
                    value={input}
                    onChange={onChange}
                />
                <img className={'nav-search__icon'} src={search.src} alt={'search icon'}/>
            </div>
            {searchItems.loading ? (
                <Spinner className={'nav-search__spinner'}/>
            ) : items && items.length > 0 ? (
                <div className="nav-search__results">
                    {items.filter((item, index) => index < 4).map((item, index) =>
                        <Link
                            href={`/shop-items/${item.common.slugCategory}/${item.common.slug}`}
                            key={item.translations[locale].name + index}
                            className="nav-search__item"
                        >
                            <img
                                className="nav-search__item-img"
                                src={`${baseURL}/images/${item.common.images[0]}`}
                                alt={'search item image'}
                            />
                            <div className="nav-search__item-name">
                                {item.translations[locale].name}
                            </div>
                        </Link>
                    )}
                    <div className="nav-search__button-wrapper">
                        <Link href={`/search?query=${input}`} className="nav-search__button">
                            {transl.allRes}
                        </Link>
                    </div>
                </div>
            ) : searchItems.success && (
                <div className="nav-search__not-found">
                    {transl.notFound}
                </div>
            )}
        </div>
    );
}

export default NavSearch
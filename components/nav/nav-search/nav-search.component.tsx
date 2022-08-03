import React, {useEffect, useState} from 'react'
import search from '/public/icons/search.svg'
import Link from 'next/link'
import Input from "../../common/input/input.component"
import useNavSearch from "./nav-search.hook"

const NavSearch: React.FC = () => {

    const {hidden, setHidden, locale, searchItems, setSearchItems, input, setInput,onChange} = useNavSearch()

    return (
        <div className={`search ${hidden ? 'search--hidden' : ''}`}>
            <div className="search__title">
                ПОШУК
            </div>
            <div className='search__input'>
                <Input
                    placeholder={'Знайти'}
                    value={input}
                    name={'search'}
                    handleChange={onChange}
                >
                    <img className={'search__icon'} src={search.src} alt={'search icon'}/>
                </Input>
            </div>
            {searchItems.length > 0 ? (
                <div className="search__results">
                    {searchItems.filter((item, index) => index < 4).map((item, index) =>
                        <Link href={`/shop-items/${item.slugCategory}/${item.slug}`} key={item.name + index}>
                            <a className='search__item'>
                                <img className='search__item-img' src={item.images[0]} alt={'search item image'}/>
                                <div className='search__item-name'>{item.name}</div>
                            </a>
                        </Link>
                    )}
                    <div className='search__button-wrapper'>
                        <Link href={`/search?query=${input}`}>
                            <a className='search__button'>УСІ РЕЗУЛЬТАТИ</a>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="search__popular">
                    {/*<div className="search-popular-title">ПОПУЛЯРНЫЕ ЗАПРОСЫ</div>*/}
                    {/*<div className="search-popular-element">Платья</div>*/}
                    {/*<div className="search-popular-element">Брюки и шорты</div>*/}
                    {/*<div className="search-popular-element">Жакеты и жилеты</div>*/}
                    {/*<div className="search-popular-element">Верхняя одежда</div>*/}
                    {/*<div className="search-popular-element">Комплекты</div>*/}
                    {/*<div className="search-popular-element">Рубашки и блузы</div>*/}
                    {/*<div className="search-popular-element">Комбинезоны</div>*/}
                    {/*<div className="search-popular-element">Трикотаж</div>*/}
                </div>
            )}
        </div>
    )
}

export default NavSearch
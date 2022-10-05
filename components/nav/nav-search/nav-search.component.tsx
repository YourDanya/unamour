import React, {useEffect, useState} from 'react'
import search from 'public/icons/search.svg'
import useNavSearch from 'components/nav/nav-search/nav-search.hook'
import Link from 'next/link'
import Input from 'components/common/input/input.component'

const NavSearch: React.FC = () => {

    const {hidden, searchItems, input, handleChange, transl} = useNavSearch()

    return (
        <div className={`nav-search ${hidden ? 'nav-search--hidden' : ''}`}>
            <div className="nav-search__title">
                {transl.search}
            </div>
            <div className='nav-search__input'>
                <Input
                    className={'search__input'}
                    name={'search'}
                    placeholder={'Знайти'}
                    value={input}
                    handleChange={handleChange}
                >
                    <img className={'nav-search__icon'} src={search.src} alt={'search icon'}/>
                </Input>
            </div>
            {searchItems.length > 0 ? (
                <div className="nav-search__results">
                    {searchItems.filter((item, index) => index < 4).map((item, index) =>
                        <Link href={`/shop-items/${item.slugCategory}/${item.slug}`} key={item.name + index}>
                            <a className='nav-search__item'>
                                <img className='nav-search__item-img' src={item.images[0]} alt={'search item image'}/>
                                <div className='nav-search__item-name'>{item.name}</div>
                            </a>
                        </Link>
                    )}
                    <div className='nav-search__button-wrapper'>
                        <Link href={`/search?query=${input}`}>
                            <a className='nav-search__button'>{transl.allRes}</a>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="nav-search__popular">
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
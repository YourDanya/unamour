import React, {useEffect, useState} from 'react'
import Cross from "../cross/cross.component";
import search from '/public/icons/search.svg';
import CustomInput from "../custom-input/custom-input.component";
import {useSelector} from "react-redux";
import {selectShopItems, ShopItemObject} from "../../redux/shop-items/shop-items.slice";
import {useRouter} from "next/router";
import {LocaleType} from "../../pages/shop-items/[[...slug]]";

interface SearchResultInterface {
    name: string,
    imgUrl: string
}

const NavSearch: React.FC = () => {

    const [searchArr, setSearchArr] = useState(null)

    const [hidden, setHidden] = useState(true)

    const locale = useRouter().locale as LocaleType

    const items = useSelector(selectShopItems(locale))

    const searchItems = useState<ShopItemObject[LocaleType][]>([])

    const [input, setInput] = useState()

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput()
    }

    return (
        <div className={`search ${hidden ? 'search--hidden' : ''}`}>
            <Cross onClick={() => setHidden(true)}/>
            <div className="search__title">
                ПОШУК
            </div>
            <div className='search__input'>
                <CustomInput placeholder={'Знайти'}
                             value={input}
                             name={'search'}
                             handleChange={onChange}
                             img={<img className={'search__icon'} src={search.src} alt={'search icon'}/>}
                />
            </div>
            {searchArr ? (
                <div className="search__results">

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
            )
            }
        </div>
    )
}

export default NavSearch
import React, {useEffect, useState} from 'react'
import {element} from "prop-types";
import NavSearchResult, {NavSearchResultProps} from "./nav-search-result/nav-search-result.component";
import Cross from "../cross/cross.component";
import search from '/public/icons/search.svg';
import CustomInput from "../custom-input/custom-input.component";

interface SearchResultInterface {
    name: string,
    imgUrl: string
}

const NavSearch: React.FC = () => {

    const [searchArr, setSearchArr] = useState<NavSearchResultProps[] | null>(null)

    // useEffect(() => {
    //     setSearchArr([
    //         {
    //             name: 'юбка',
    //             imgUrl: 'https://cdn3.gulliver-wear.com/219GSGC6104/1070c1295/1.jpg'
    //         },
    //         {
    //             name: 'рыба',
    //             imgUrl: 'data:image/jpeg;base64,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'
    //         },
    //         {name: 'шуба', imgUrl: 'https://kosmo-furs.lv/wp-content/uploads/2021/03/img_7920-scaled.jpg'},
    //         {
    //             name: 'пальто',
    //             imgUrl: 'data:image/jpeg;base64,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'
    //         },
    //         {
    //             name: 'кроссовки',
    //             imgUrl: 'https://static.rendez-vous.ru/files/catalog_models/resize_640x630/1/1868764_krossovki_ash_addict_belyy_kozha_natural_naya.JPG'
    //         },
    //         {
    //             name: 'шорты',
    //             imgUrl: 'https://cdn3.button-blue.com/220BBBS54010800/0/20.jpg'
    //         },
    //     ])
    // }, [])

    const [hidden, setHidden] = useState(true)

    return (
        <div className={`nav__search ${hidden? 'nav__search-hidden' : ''}`}>
            <Cross onClick={() => setHidden(true)}/>
            <div className="nav__search-title">
                ПОИСК
            </div>
            <CustomInput src={search.src} placeholder={'Найти'} name={'search'}/>
            {
                searchArr ? (
                    <div className="nav__search-results">
                        {
                            searchArr.map(({name, imgUrl}) =>
                                <NavSearchResult key={name} name={name} imgUrl={imgUrl}/>
                            )
                        }
                    </div>
                ) : (
                    <div className="nav__search-popular">
                        <div className="nav__search-popular-title">ПОПУЛЯРНЫЕ ЗАПРОСЫ</div>
                        <div className="nav__search-popular-element">Платья</div>
                        <div className="nav__search-popular-element">Брюки и шорты</div>
                        <div className="nav__search-popular-element">Жакеты и жилеты</div>
                        <div className="nav__search-popular-element">Верхняя одежда</div>
                        <div className="nav__search-popular-element">Комплекты</div>
                        <div className="nav__search-popular-element">Рубашки и блузы</div>
                        <div className="nav__search-popular-element">Комбинезоны</div>
                        <div className="nav__search-popular-element">Трикотаж</div>
                    </div>
                )
            }
        </div>
    )
}

export default NavSearch
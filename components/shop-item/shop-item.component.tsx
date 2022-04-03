import React, {useEffect, useState} from "react";
import Link from "next/link";
import ItemsCollection from "../items-collection/items-collection.component";

export interface shopItemProps {
    images: string[],
    colors: string[],
    sizes: string[],
    name: string,
    price: string
}

const ShopItem: React.FC<shopItemProps> = ({images, colors, sizes, name, price}) => {

    // const [images, setImages] = useState(['link1', 'link2', 'link3', 'link4'])
    // const [currentImage, setCurrentImage] = useState('link1')
    // const [colors, setColors] = useState(['brown'])
    // const [color, setColor] = useState(colors[0])
    // const [sizes, setSizes] = useState(['XS', 'S', 'M'])

    const [shopItems, setShopItems ] = useState<shopItemProps[] | null>(null)

    return (
        <div className={'shop-item'}>
            <div className="shop-item__content">
                <div className="shop-item__slider">
                    <div className="shop-item__slider-elements">
                        {
                            images.map(elem =>
                                <img className='shop-item__slider-element' src={elem}/>
                            )
                        }
                    </div>
                    <div className="shop-item__slider-content">
                        <div className="shop-item__slider-arrow shop-item__slider-arrow--left">

                        </div>
                        <img className="shop-item__slider-current" src={'current'}>

                        </img>
                        <div className="shop-item__slider-arrow shop-item__slider-arrow--right">

                        </div>
                    </div>
                </div>
                <div className="shop-item__about">
                    <div className="shop-item__links">
                        <Link href={'/Главная'}>
                            <a className={'shop-item__link'}>Главная</a>
                        </Link>
                        <Link href={'/Каталог'}>
                            <a className={'shop-item__link'}>Каталог</a>
                        </Link>
                        <Link href={'/Трикотаж'}>
                            <a className={'shop-item__link'}>Трикотаж</a>
                        </Link>
                    </div>
                </div>
                <div className="shop-item__name">
                    Шапка резинка
                </div>
                <div className="shop-item__prices">
                    <span className={'shop-item__price shop-item__price-crossed'}>{price}</span>
                    <span className={'shop-item__price'}>{price}</span>
                </div>
                <div className="shop-item__sizes">
                    <div className="shop-item__sizes">
                        Размеры
                    </div>
                </div>
                <div className="shop-item__colors">
                    {
                        colors.map(color =>
                            <div className={`shop-items__color`}
                                 style={{backgroundColor: color}}
                                 id={color}
                                 onClick={(event) => console.log(event.target)}
                            >
                            </div>
                        )
                    }
                </div>
                <button className="shop-item__checkout-button">ДОБАВИТЬ В КОРЗИНУ</button>
                <div className="shop-item__favorite-button"></div>
                <ul className={'shop-item__list'}>
                    <li className={'shop-item__list-item'}>
                        <div className="shop-item__list-item-title">
                            ОПИСАНИЕ
                        </div>
                        <div className="shop-item__list-item-description">
                            <span className={'shop-item__list-item-articul'}>
                               Артикул: Dr207201
                            </span>
                            Платье приталенного силуэта, плотного прилегания, длина мини, открытая зона декольте.
                            Рельефы спереди и по спинке, дополнительные вытачки.
                            В рельефах и боковых швах - регилин (корсетные косточки).
                            Застежка на потайную молнию в среднем шве спинки. Выполнено на подкладке.

                            Сделано в России.
                        </div>
                    </li>
                    <li className={'shop-item__list-item-compose'}>
                        <div className="shop-item__list-item-title">
                            СОСТАВ И УХОД
                        </div>
                        <div className="shop-item__list-item-title">
                            Наружная часть: полиэстер 97%, эластан 3%

                            Подкладка: полиэстер 97%, спандекс 3%


                            - деликатная машинная стирка до 30°С  в мыльном растворе, с применением средства, предназначенного для стирки деликатных тканей;

                            - при ручной стирке не выкручивать и не выжимать изделие;

                            - стирку выполнять отдельно от других вещей, возможно окрашивание;

                            - отбеливание запрещено;

                            - утюжить при температуре до 80°С;

                            - избегать механического воздействия (интенсивное трение о какую-либо поверхность, жесткие ремни сумок, рюкзаков и т.д.).
                        </div>
                    </li>
                    <li className={'shop-item__list-item'}>
                        <div className="shop-item__list-item-title">
                            <div className="shop-item__list-item">
                                XS Длина изделия (по спинке): 50,5 см; Обхват груди: 84 см;
                                Обхват талии: 66 см; Обхват бедер: 96 см; Рекомендуем на рост: 164-170 см;

                                S Длина изделия (по спинке): 53,5 см; Обхват груди: 88 см;
                                Обхват талии: 70 см; Обхват бедер: 102 см; Рекомендуем на рост: 167-176 см;

                                М Длина изделия (по спинке): 54 см; Обхват груди: 92 см; Обхват талии: 72 см;
                                Обхват бедер: 103 см; Рекомендуем на рост: 167-176 см.



                                * Посадка может отличаться даже для товаров одного размера. Допустимые отклонения в пределах размера +/-1-2 см.
                            </div>ПАРАМЕТРЫ ИЗДЕЛИЯ
                        </div>
                    </li>
                    <li className={'shop-item__list-item'}>
                        <div className="shop-item__list-item-title">
                            ДОСТАВКА И ОПЛАТА
                        </div>
                        <div className="shop-item__list-item-description">
                            Сроки доставки могут быть увеличены

                            Оплатить заказ можно только на сайте
                            Мы принимаем к оплате банковские карты платежных систем Visa, Master Card и Мир
                            <Link href={'/'}>
                                <a className="shop-item__list-item-link">
                                    ПОДРОБНЕЕ О ДОСТАВКЕ
                                </a>
                            </Link>
                        </div>
                    </li>
                </ul>
                <div className="shop-item__similar">
                    <div className="shop-item__similar">ПОХОЖИЕ ТОВАРЫ</div>
                    <div className="shop-item__slider">
                        <ItemsCollection title={''} shopItems={shopItems as shopItemProps[]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
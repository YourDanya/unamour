import React from "react";
import ItemsCollection from "../items-collection/items-collection.component";

interface shopItemsProps {

}

const ShopItems: React.FC<shopItemsProps> = () => {
    return (
        <div className={'shop-items'}>
            <div className="shop-items__sidebar">
                <div className="shop-items__categories">
                    <div className="shop-items__category">ПОСМОТРЕТЬ ВСЕ</div>
                    <div className="shop-items__category">ЭКОКОЖА</div>
                    <div className="shop-items__category">ПЛАТЬЯ</div>
                    <div className="shop-items__category">ЮБКИ</div>
                    <div className="shop-items__category">РУБАШКИ И БЛУЗЫ</div>
                    <div className="shop-items__category">ТОПЫ И БОДИ</div>
                    <div className="shop-items__category">ЖАКЕТЫ И ЖИЛЕТЫ</div>
                    <div className="shop-items__category">БРЮКИ И ШОРТЫ</div>
                    <div className="shop-items__category">КОМБИНЕЗОНЫ</div>
                    <div className="shop-items__category">ТРИКОТАЖ</div>
                    <div className="shop-items__category">ВЕРХНЯЯ ОДЕЖДА</div>
                    <div className="shop-items__category">КОМПЛЕКТЫ</div>
                    <div className="shop-items__category">ДЖЕМПЕРЫ</div>
                    <div className="shop-items__category">АКСЕССУАРЫ</div>
                </div>
                <div className="shop-items__params">
                    <div className="shop-items__params-sort">
                        <div className="shop-items__params-sort-title">
                            СОРТИРОВКА
                        </div>
                        <div className="shop-items__params-sort-items">
                            <div className="shop-items__params-sort-item">
                                цена по убыванию
                            </div>
                            <div className="shop-items__params-sort-item">
                                цена по возрастанию
                            </div>
                            <div className="shop-items__params-sort-item">
                                сначала новинки
                            </div>
                        </div>
                    </div>
                    <div className="shop-items__params-color">
                        <div className="shop-items__params-sort-title">
                            ЦВЕТ
                        </div>
                        <div className="shop-items__params-sort-items">
                            <div className="shop-items__params-sort-item">
                                ЧЕРНЫЙ
                            </div>
                            <div className="shop-items__params-sort-item">
                                МОЛОЧНЫЙ
                            </div>
                        </div>
                    </div>
                    <div className="shop-items__params-color">
                        <div className="shop-items__params-sort-title">
                            ЦЕНА
                        </div>
                    </div>
                    <div className="shop-items__params-color">
                        <div className="shop-items__params-sort-title">
                            РАЗМЕР
                        </div>
                        <div className="shop-items__params-sort-items">
                            <div className="shop-items__params-sort-item">
                                XXS
                            </div>
                            <div className="shop-items__params-sort-item">
                                XS
                            </div>
                            <div className="shop-items__params-sort-item">
                                XX-S
                            </div>
                            <div className="shop-items__params-sort-item">
                                S
                            </div>
                            <div className="shop-items__params-sort-item">
                                S-M
                            </div>
                            <div className="shop-items__params-sort-item">
                                M
                            </div>
                            <div className="shop-items__params-sort-item">
                                L
                            </div>
                            <div className="shop-items__params-sort-item">
                                ONESIZE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<ItemsCollection/>*/}
        </div>
    )
}

export default ShopItems
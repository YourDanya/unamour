import React from "react";

type sizesProps = {
    modalActive?: {active: boolean, size: boolean}
}

const Sizes: React.FC<sizesProps> = ({modalActive}) => {

    return (
        <div className={`sizes modal-content ${modalActive?.size ? 'modal-content--active' : ''}`}>
            <div className={'text text--mb-10 text--lh-15'}>
                НЕОБХІДНИЙ ВАМ РОЗМІР ВИ МОЖЕТЕ ПІДІБРАТИ ВИХОДЯЧИ З ІНФОРМАЦІЇ У ВКЛАДЦІ ОБМІРИ НА
                СТОРІНЦІ ТОВАРУ
            </div>
            <div className={'text text--mb-10'}>
                Як визначити відповідний розмір
            </div>
            <div className={'list list--pl-20 list--mb-10'}>
                <div className={'list__item list__item--mb-2'}>
                    Виміряйте обхват грудей по самій опуклій точці бюста.
                </div>
                <div className={'list__item list__item--mb-2'}>
                    Виміряйте обхват талії по найвужчій частині талії.
                </div>
                <div className={'list__item list__item--mb-2'}>
                    Виміряйте обхват стегон по лінії максимальної ширини стегон.
                </div>
            </div>
            <div className={'text text--mb-10'}>
                Розмір Onesize передбачає універсальну посадку, розраховану параметри розмірів XS, S, M.
            </div>
            <div className={'text text--lh-15'}>
                Якщо виникнуть труднощі, ми з радістю допоможемо Вам із вибором розміру. Зв`яжіться з
                нами в онлайн-чаті, Instagram або зателефонуйте за безкоштовним номером 8 (800)
                707-71-04
            </div>
        </div>
    )
}

export default Sizes
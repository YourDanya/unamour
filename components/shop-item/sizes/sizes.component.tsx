import React from "react"

type sizesProps = {

}

const Sizes: React.FC<sizesProps> = () => {

    return (
        <div className='sizes'>
            <div className='sizes__title'>
                НЕОБХІДНИЙ ВАМ РОЗМІР ВИ МОЖЕТЕ ПІДІБРАТИ ВИХОДЯЧИ З ІНФОРМАЦІЇ У ВКЛАДЦІ ОБМІРИ НА
                СТОРІНЦІ ТОВАРУ
            </div>
            <div className='sizes__how'>
                Як визначити відповідний розмір
            </div>
            <ul className='list'>
                <li className='list__item'>
                    Виміряйте обхват грудей по самій опуклій точці бюста.
                </li>
                <li className='list__item'>
                    Виміряйте обхват талії по найвужчій частині талії.
                </li>
                <li className='list__item'>
                    Виміряйте обхват стегон по лінії максимальної ширини стегон.
                </li>
            </ul>
            <div className='sizes__ind'>
                Розмір IND передбачає універсальну посадку, розраховану параметри розмірів XS, S, M.
            </div>
            <div className='sizes__help'>
                Якщо виникнуть труднощі, ми з радістю допоможемо Вам із вибором розміру. Зв`яжіться з
                нами в онлайн-чаті, Instagram або зателефонуйте за номером +380 (66) 384 78 22.
            </div>
        </div>
    )
}

export default Sizes
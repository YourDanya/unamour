import React, {useEffect, useState} from "react"

import Link from "next/link"
import bookmark from '/public/icons/bookmark.svg'
import {selectShopItems, ShopItemObject} from "../../redux/shop-items/shop-items.slice"
import presentImg from '/public/icons/present.svg'
import CustomDropdown from "../custom-dropdown/custom-dropdown.component";
import Modal from "../modal/modal.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomCheckbox from "../custom-checkbox/custom-checkbox.component";
import CustomButton from "../custom-button/custom-button.component";
import CustomSlider from "../custom-slider/custom-slider.component";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {LocaleType} from "../../pages/shop-items/[[...slug]]";
import ShopItemPreview from "../shop-item-preview/shop-item-preview.component";

const ShopItem: React.FC<ShopItemObject['ua']> = ({
                                                      name, color, otherColors, sizes, images,
                                                      price, delivery, description, composition, parameters,
                                                      isAvailable, category, slugCategory, oldPrice
                                                  }) => {

    const [activeSize, setSize] = useState<string | null>(null)

    const handleSizeClick = (size: string) => {
        if (size === activeSize) {
            setSize(null)
        } else {
            setSize(size)
        }
    }

    const [checkout, setCheckout] = useState(true)

    const handleCheckoutButtonMouseEnter = () => {
        if (!activeSize) {
            setCheckout(false)
        }
    }

    const handleCheckoutButtonMouseLeave = () => {
        if (!checkout) {
            setCheckout(true)
        }
    }

    const [modalActive, setModalActive] = useState({modal: false, size: false, present: false})

    const handleModalSize = () => {
        setModalActive({modal: true, size: true, present: false})
    }

    const [presentLabel, setPresentLabel] = useState(true)

    const handlePresentClick = () => {
        if (!activeSize) {
            setPresentLabel(false)
        } else {
            setModalActive({modal: true, size: false, present: true})
        }
    }

    const handlePresentMouseLeave = () => {
        if (!presentLabel) {
            setPresentLabel(true)
        }
    }

    const [deliveryType, setDeliveryType] = useState('novaPoshta')

    const handleDeliveryChange = (event: any) => {
        setDeliveryType(event.target.value)
    }

    const [sliderCount, setSliderCount] = useState(0)

    const slideImages = images.map((url, index) => <img src={url} alt={`image ${index} ${name}`} key={url + index}/>)

    const locale = useRouter().locale as LocaleType

    let items: ShopItemObject[] | ShopItemObject[LocaleType][] = useSelector(selectShopItems(locale))

    const similarItems: ShopItemObject[LocaleType][] = []
    const watchedItems: ShopItemObject[LocaleType][] = []

    for (let i = 0; i < items.length; i++) {
        if (i < 4) similarItems.push(items[i])
        if (i > items.length - 5) watchedItems.push(items[i])
    }

    return (
        <div className='shop-item'>
            <div className="shop-item__content">
                <div className="shop-item__images">
                    <div className="shop-item__tabs">
                        {images.map((url, index) =>
                            <img className='shop-item__tab'
                                 src={url}
                                 alt={`image ${index} ${name}`}
                                 key={url + index}
                                 onChange={() => setSliderCount(index)}
                            />
                        )}
                    </div>
                    <div className="shop-item__slider">
                        <CustomSlider elements={slideImages} current={sliderCount}/>
                    </div>

                    {/*<div className='shop-item__test-div'>*/}
                    {/*    <img className={'shop-item__test-img'} src={images[0]} alt={'bl'}/>*/}
                    {/*</div>*/}
                </div>
                <div className={'shop-item__about'}>
                    <div className="shop-item__links">
                        <Link href={'/'}>
                            <a className={'shop-item__link'}>Головна</a>
                        </Link>
                        <span className={'shop-item__links-slash'}>/</span>
                        <Link href={'/all'}>
                            <a className={'shop-item__link'}>Каталог</a>
                        </Link>
                        <span className={'shop-item__links-slash'}>/</span>
                        <Link href={`/${slugCategory}`}>
                            <a className={'shop-item__link'}>{category}</a>
                        </Link>
                    </div>
                    <div className="shop-item__name">
                        {name}
                    </div>
                    <div className="shop-item__prices">
                        <div className={'shop-item__price shop-item__price--old'}>
                            <div className={'shop-item__price-crossed'}></div>
                            {oldPrice} ₴
                        </div>
                        <div className={'shop-item__price'}>{price} ₴</div>
                    </div>
                    <div className="shop-item__sizes">
                        <div className="shop-item__sizes-top">
                            <div className="shop-item__sizes-label">Розміри</div>
                            <div className="shop-item__sizes-choose" onClick={handleModalSize}>Підібрати розмір</div>
                        </div>
                        <div className={'shop-item__sizes-list'}>
                            {sizes.map(size =>
                                <div
                                    className={`shop-item__size ${activeSize === size ? 'shop-item__size--active' : ''}`}
                                    key={size}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </div>
                            )}
                        </div>
                        <div
                            className={`shop-item__sizes-modal modal-content ${modalActive.size ? 'modal-content--active' : ''}`}>
                            <div className={'close close--right-10 close--top-10'}
                                 onClick={() => setModalActive({modal: false, size: false, present: false})}/>
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
                    </div>
                    <div className="shop-item__colors">
                        <div className={'shop-item__colors-label'}>Колір: {color.name}</div>
                        <div className="shop-item__colors-list">
                            {<div className='shop-item__color shop-item__color--current'
                                  style={{backgroundColor: color.code}}/>
                            }
                            {otherColors.map(({name, code, ref}) =>
                                <Link href={`/shop-items/${slugCategory}/${ref}`} key={code}>
                                    <div className={`shop-item__color`}
                                         style={{backgroundColor: code}}
                                         onClick={(event) => console.log(event.target)}
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className={'shop-item__buttons'}>
                        <button className="shop-item__checkout-button"
                                onMouseEnter={handleCheckoutButtonMouseEnter}
                                onMouseLeave={handleCheckoutButtonMouseLeave}
                        >
                            <div className={`shop-item__checkout-button-text fade
                                ${checkout ? 'fade--show' : ''}`}>
                                ДОДАТИ ДО КОРЗИНИ
                            </div>
                            <div className={`shop-item__checkout-button-text fade
                                ${checkout ? '' : 'fade--show'}`}>
                                ОБЕРІТЬ РОЗМІР
                            </div>
                        </button>
                        <button className="shop-item__favorite-button">
                            <img src={bookmark.src} className={'shop-item__favorite-img'} alt={'shop-item'}/>
                        </button>
                    </div>
                    <div className="shop-item__present"
                         onClick={handlePresentClick}
                         onMouseLeave={handlePresentMouseLeave}
                    >
                        <div className={`shop-item__present-label 
                            fade ${presentLabel ? 'fade--show' : ''}`}>
                            ПОДАРУВАТИ
                        </div>
                        <div className={`shop-item__present-label
                            fade ${presentLabel ? '' : 'fade--show'}`}>
                            ОБЕРІТЬ РОЗМІР
                        </div>
                        <img className='shop-item__present-img' src={presentImg.src}/>
                    </div>
                    <div className={`present modal-content ${modalActive.present ? 'modal-content--active' : ''}`}>
                        <div className='close close--top-10 close--right-10'
                             onClick={() => setModalActive({modal: false, size: false, present: false})}/>
                        <div className="present__item">
                            <img className={'present__img'} src={images[0]}/>
                            <div className={'present__info'}>
                                <div className={'present__name'}>{name}</div>
                                <div className={'present__properties'}>
                                    <div className={'present__property-block'}>
                                        <div className="present__property">Колір</div>
                                        <div className={'present__color'} style={{backgroundColor: color.code}}/>
                                    </div>
                                    <div className={'present__property-block'}>
                                        <div className="present__property">Розмір</div>
                                        <div className="present__size">{activeSize}</div>
                                    </div>
                                    <div className={'present__property-block'}>
                                        <div className="present__property">Ціна</div>
                                        <div className="present__price">{price} ₴</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'present__data'}>
                            <div className={'present__question'}>
                                КОМУ ВИ ХОЧЕТЕ ЗРОБИТИ ПОДАРУНОК?
                            </div>
                            <CustomInput classes={['custom-input--present']} placeholder={'Ім\'я отримувача'}
                                         name={'recName'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'Фамилия получателя'}
                                         name={'recSurname'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'E-mail отримувача'}
                                         name={'recEmail'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'Номер отримувача'}
                                         name={'recPhone'}/>
                            <div className={'present__question'}>ВІД КОГО</div>
                            <CustomInput classes={['custom-input--present']} placeholder={'Ім\'я відправника'}
                                         name={'sendName'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'E-mail відправника'}
                                         name={'sendEmail'}/>
                            <div className={'present__question'}>КУДИ ВІДПРАВИТИ?</div>
                            <CustomInput classes={['custom-input--present']} placeholder={'Країна'} name={'country'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'Місто'} name={'city'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'Індекс'} name={'index'}/>
                            <div className={'present__index'}>Введіть 00000, якщо у вашої країни немає індексу</div>
                            <CustomInput classes={['custom-input--present']} placeholder={'Вулиця'} name={'street'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'Дім'} name={'house'}/>
                            <CustomInput classes={['custom-input--present']} placeholder={'Квартира, офіс'}
                                         name={'apartment'}/>
                            <div className={'present__question'}>ОБЕРІТЬ ДОСТАВКУ</div>
                            <div className={'present__delivery'}>
                                <input className='radio-button'
                                       type="radio"
                                       value='novaPoshta'
                                       name="deliveryType"
                                       onChange={handleDeliveryChange}
                                       checked={deliveryType === 'novaPoshta'}
                                />
                                <input className='radio-button'
                                       type="radio"
                                       value='ukrPoshta'
                                       name="deliveryType"
                                       onChange={handleDeliveryChange}
                                       checked={deliveryType === 'ukrPoshta'}
                                       style={{transform: 'translateY(26px)'}}
                                />
                                <div className='present__delivery-type'>
                                    <div className={`present__delivery-check 
                                        ${deliveryType === 'novaPoshta' ? 'present__delivery-check--active' : ''}`}/>
                                    <div className="present__delivery-label">Кур'єр "Нової Пошти"</div>
                                </div>
                                <div className='present__delivery-type'>
                                    <div className={`present__delivery-check 
                                        ${deliveryType === 'ukrPoshta' ? 'present__delivery-check--active' : ''}`}/>
                                    <div className="present__delivery-label">Кур'єр "Укр Пошти"</div>
                                </div>
                            </div>
                            <div className='present__total'>
                                <div className="present__total-label">Вартість: {price} ₴</div>
                                <div className="present__total-label">Доставка: 0 ₴</div>
                            </div>
                            <div className={'present__checkboxes'}>
                                <CustomCheckbox name={'Подарувати анонімно?'} classes={['checkbox--present']}/>
                                <CustomCheckbox name={'Зробити сюрприз?'} classes={['checkbox--present']}/>
                            </div>
                            <CustomButton text={`СПЛАТИТИ ${price} ₴`} classes={['custom-button--present']}/>
                        </div>
                    </div>
                    <div className='shop-item__dropdowns'>
                        <CustomDropdown
                            content={
                                <div className={'shop-item__dropdown-element'}>
                                    {description}
                                </div>
                            }
                            name={'ОПИС'}
                            plus
                        />
                        <CustomDropdown
                            content={
                                <div className={'shop-item__dropdown-element'}>
                                    {composition}
                                </div>}
                            name={'СКЛАД І ДОГЛЯД'}
                            plus
                        />
                        <CustomDropdown
                            content={
                                <div className={'shop-item__dropdown-element'}>
                                    {parameters}
                                </div>}
                            name={'ПАРАМЕТРИ ВИРОБУ'}
                            plus
                        />
                        <CustomDropdown
                            content={
                                <div className={'shop-item__dropdown-element'}>
                                    {delivery}
                                </div>}
                            name={'ДОСТАВКА І ОПЛАТА'}
                            plus
                        />
                    </div>
                </div>
            </div>
            <div className='shop-item__additional'>
                <div className="shop-item__additional-title">СХОЖІ ТОВАРИ</div>
                <div className="shop-item__similar">
                    {similarItems.map((props, index) => (
                        <div className={'shop-item__add'} key={props.name + index}>
                            <ShopItemPreview key={props.slug + index} {...props}/>
                        </div>
                    ))}
                </div>
                <div className="shop-item__additional-title">ПЕРЕГЛЯНУТІ ТОВАРИ</div>
                <div className="shop-item__viewed">
                    {similarItems.map((props, index) => (
                        <div className={'shop-item__add'} key={props.slug + index}>
                            <ShopItemPreview key={props.slug + index} {...props}/>
                        </div>
                    ))}
                </div>
            </div>
            <Modal active={modalActive.modal} hideModal={() => setModalActive({modal: false, size: false, present: false})}/>
        </div>
    )
}

export default ShopItem
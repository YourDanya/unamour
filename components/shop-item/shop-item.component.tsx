import React from "react"
import Link from "next/link"
import bookmark from '/public/icons/bookmark.svg'
import presentImg from '/public/icons/present.svg'
import Dropdown from "../common/dropdown/dropdown.component"
import Modal from "../modal/modal.component"
import Slider from "../common/slider/slider.component"
import ShopItemPreview from "../shop-item-preview/shop-item-preview.component"
import Present from "../present/present.component"
import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {useShopItem} from "./shop-item.hook";

const ShopItem: React.FC<ClientItem> = (props) => {

    // const {name, color, sizes, images, price, delivery, description, composition, parameters,
    //     category, slugCategory, oldPrice, slug, currency, variants} = useShopItem(props)

    return (
        <div className='shop-item'>
            {/*<div className="shop-item__content">*/}
            {/*    <div className="shop-item__images">*/}
            {/*        <div className="shop-item__tabs">*/}
            {/*            {images.map((url, index) =>*/}
            {/*                <img className='shop-item__tab'*/}
            {/*                     src={url}*/}
            {/*                     alt={`image ${index} ${name}`}*/}
            {/*                     key={url + index}*/}
            {/*                     onChange={() => setSliderCount(index)}*/}
            {/*                />*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        <div className="shop-item__slider">*/}
            {/*            <Slider elements={slideImages} current={sliderCount}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'shop-item__about'}>*/}
            {/*        <div className="shop-item__links">*/}
            {/*            <Link href={'/'}>*/}
            {/*                <a className={'shop-item__link'}>Головна</a>*/}
            {/*            </Link>*/}
            {/*            <span className={'shop-item__links-slash'}>/</span>*/}
            {/*            <Link href={'/all'}>*/}
            {/*                <a className={'shop-item__link'}>Каталог</a>*/}
            {/*            </Link>*/}
            {/*            <span className={'shop-item__links-slash'}>/</span>*/}
            {/*            <Link href={`/${slugCategory}`}>*/}
            {/*                <a className={'shop-item__link'}>{category}</a>*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*        <div className="shop-item__name">*/}
            {/*            {name}*/}
            {/*        </div>*/}
            {/*        <div className="shop-item__prices">*/}
            {/*            <div className={'shop-item__price shop-item__price--old'}>*/}
            {/*                <div className={'shop-item__price-crossed'}/>*/}
            {/*                {oldPrice} ₴*/}
            {/*            </div>*/}
            {/*            <div className={'shop-item__price'}>{price} ₴</div>*/}
            {/*        </div>*/}
            {/*        <div className="shop-item__sizes">*/}
            {/*            <div className="shop-item__sizes-top">*/}
            {/*                <div className="shop-item__sizes-label">Розміри</div>*/}
            {/*                <div className="shop-item__sizes-choose" onClick={handleModalSize}>Підібрати розмір</div>*/}
            {/*            </div>*/}
            {/*            <div className={'shop-item__sizes-list'}>*/}
            {/*                {sizes.map(size =>*/}
            {/*                    <div*/}
            {/*                        className={`shop-item__size ${activeSize === size ? 'shop-item__size--active' : ''}`}*/}
            {/*                        key={size}*/}
            {/*                        onClick={() => handleSizeChange(size)}*/}
            {/*                    >*/}
            {/*                        {size}*/}
            {/*                    </div>*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*            <div className={`shop-item__sizes-modal modal-content ${modalActive.size ? 'modal-content--active' : ''}`}>*/}
            {/*                <div className={'close close--right-10 close--top-10'}*/}
            {/*                     onClick={() => setModalActive({modal: false, size: false, present: false})}/>*/}
            {/*                <div className={'text text--mb-10 text--lh-15'}>*/}
            {/*                    НЕОБХІДНИЙ ВАМ РОЗМІР ВИ МОЖЕТЕ ПІДІБРАТИ ВИХОДЯЧИ З ІНФОРМАЦІЇ У ВКЛАДЦІ ОБМІРИ НА*/}
            {/*                    СТОРІНЦІ ТОВАРУ*/}
            {/*                </div>*/}
            {/*                <div className={'text text--mb-10'}>*/}
            {/*                    Як визначити відповідний розмір*/}
            {/*                </div>*/}
            {/*                <div className={'list list--pl-20 list--mb-10'}>*/}
            {/*                    <div className={'list__item list__item--mb-2'}>*/}
            {/*                        Виміряйте обхват грудей по самій опуклій точці бюста.*/}
            {/*                    </div>*/}
            {/*                    <div className={'list__item list__item--mb-2'}>*/}
            {/*                        Виміряйте обхват талії по найвужчій частині талії.*/}
            {/*                    </div>*/}
            {/*                    <div className={'list__item list__item--mb-2'}>*/}
            {/*                        Виміряйте обхват стегон по лінії максимальної ширини стегон.*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={'text text--mb-10'}>*/}
            {/*                    Розмір Onesize передбачає універсальну посадку, розраховану параметри розмірів XS, S, M.*/}
            {/*                </div>*/}
            {/*                <div className={'text text--lh-15'}>*/}
            {/*                    Якщо виникнуть труднощі, ми з радістю допоможемо Вам із вибором розміру. Зв`яжіться з*/}
            {/*                    нами в онлайн-чаті, Instagram або зателефонуйте за безкоштовним номером 8 (800)*/}
            {/*                    707-71-04*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="shop-item__colors">*/}
            {/*            <div className={'shop-item__colors-label'}>Колір: {color.name}</div>*/}
            {/*            <div className="shop-item__colors-list">*/}
            {/*                {<div className='shop-item__color shop-item__color--current'*/}
            {/*                      style={{backgroundColor: color.code}}/>*/}
            {/*                }*/}
            {/*                {variants.map(({color: { code}}) => code === color.code ? null : (*/}
            {/*                    <button*/}
            {/*                        className={`shop-item__color`}*/}
            {/*                        key={code}*/}
            {/*                        style={{backgroundColor: code}}*/}
            {/*                        onClick={(event) => console.log(event.target)}*/}
            {/*                    />*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={'shop-item__buttons'}>*/}
            {/*            <button className="shop-item__checkout-button"*/}
            {/*                    onMouseEnter={handleCheckoutButtonMouseEnter}*/}
            {/*                    onMouseLeave={handleCheckoutButtonMouseLeave}*/}
            {/*                    onClick={handleCartClick}*/}
            {/*            >*/}
            {/*                <div className={`shop-item__checkout-button-text fade*/}
            {/*                    ${checkout ? 'fade--show' : ''}`}>*/}
            {/*                    ДОДАТИ ДО КОРЗИНИ*/}
            {/*                </div>*/}
            {/*                <div className={`shop-item__checkout-button-text fade*/}
            {/*                    ${checkout ? '' : 'fade--show'}`}>*/}
            {/*                    ОБЕРІТЬ РОЗМІР*/}
            {/*                </div>*/}
            {/*            </button>*/}
            {/*            <button className="shop-item__favorite-button">*/}
            {/*                <img src={bookmark.src} className={'shop-item__favorite-img'} alt={'shop-item'}/>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className="shop-item__present"*/}
            {/*             onClick={handlePresentClick}*/}
            {/*             onMouseLeave={handlePresentMouseLeave}*/}
            {/*        >*/}
            {/*            <div className={`shop-item__present-label */}
            {/*                fade ${presentLabel ? 'fade--show' : ''}`}>*/}
            {/*                ПОДАРУВАТИ*/}
            {/*            </div>*/}
            {/*            <div className={`shop-item__present-label*/}
            {/*                fade ${presentLabel ? '' : 'fade--show'}`}>*/}
            {/*                ОБЕРІТЬ РОЗМІР*/}
            {/*            </div>*/}
            {/*            <img className='shop-item__present-img' src={presentImg.src}/>*/}
            {/*        </div>*/}
            {/*        <Present price={price} name={name} images={images} color={color}*/}
            {/*                 activeSize={activeSize as string} modalActive={modalActive}*/}
            {/*                 setModalActive={setModalActive}/>*/}
            {/*        <div className='shop-item__dropdowns'>*/}
            {/*            <Dropdown name={'ОПИС'} plus>*/}
            {/*                <div className={'shop-item__dropdown-element'}>*/}
            {/*                    {description}*/}
            {/*                </div>*/}
            {/*            </Dropdown>*/}
            {/*            <Dropdown name={'СКЛАД І ДОГЛЯД'} plus>*/}
            {/*                <div className={'shop-item__dropdown-element'}>*/}
            {/*                    {composition}*/}
            {/*                </div>*/}
            {/*            </Dropdown>*/}
            {/*            <Dropdown name={'ПАРАМЕТРИ ВИРОБУ'} plus>*/}
            {/*                <div className={'shop-item__dropdown-element'}>*/}
            {/*                    {parameters}*/}
            {/*                </div>*/}
            {/*            </Dropdown>*/}
            {/*            <Dropdown name={'ДОСТАВКА І ОПЛАТА'} plus>*/}
            {/*                <div className={'shop-item__dropdown-element'}>*/}
            {/*                    {delivery}*/}
            {/*                </div>*/}
            {/*            </Dropdown>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className='shop-item__additional'>*/}
            {/*    <div className="shop-item__additional-title">СХОЖІ ТОВАРИ</div>*/}
            {/*    <div className="shop-item__similar">*/}
            {/*        {similarItems.map((props, index) => (*/}
            {/*            <div className={'shop-item__add'} key={props.name + index}>*/}
            {/*                <ShopItemPreview key={props.slug + index} {...props}/>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*    <div className="shop-item__additional-title">ПЕРЕГЛЯНУТІ ТОВАРИ</div>*/}
            {/*    <div className="shop-item__viewed">*/}
            {/*        {similarItems.map((props, index) => (*/}
            {/*            <div className={'shop-item__add'} key={props.slug + index}>*/}
            {/*                <ShopItemPreview key={props.slug + index} {...props}/>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<Modal active={modalActive.modal} hideModal={() => setModalActive({modal: false, size: false, present: false})}/>*/}
        </div>
    )
}

export default ShopItem
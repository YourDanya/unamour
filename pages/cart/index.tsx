import React from "react"
import {useSelector} from "react-redux"
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.slice"
import CartItem from "../../components/cart-item/cart-item.component"
import CustomInput from "../../components/common/custom-input/custom-input.component"
import {useInput, useSetActive} from "../../hooks/hooks"
import CustomButton from "../../components/common/custom-button/custom-button.component"
import CustomCheckbox from "../../components/common/custom-checkbox/custom-checkbox.component"
import presentImg from '/public/icons/present.svg'
import Link from "next/link"
import CustomRadioButtons from "../../components/common/custom-radio-buttons/custom-radio-buttons.component"
import {createDelivery} from "../../utils/component-utils"
import Discount from "../../components/discount/discount.component"
import {NextPage} from "next"
import CartContent from "./cart.content"

const Cart: NextPage = () => {

    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectTotalPrice)
    const deliveryTypes = createDelivery(CartContent.deliveryTypes)
    const [formValues, handleFormChange] = useInput(['name', 'surname', 'street', 'county', 'index', 'city', 'house', 'apartment', 'number', 'email'] as const)
    const [deliveryActive, handleDeliveryChange] = useSetActive('novaPoshta', 'id')
    const [discount, handleDiscountChange] = useInput(['certificate', 'promo'] as const)

    return (
        <div className='cart'>
            <div className='cart__content'>
                <div className={'cart__items'}>
                    {cartItems.map((props, index) => <CartItem key={props.data.slug + index}  {...props}/>)}
                </div>
                <div className='cart__discount'>
                    <Discount handleChange={handleDiscountChange} values={discount}/>
                </div>
                <form className='cart__form'>
                    <div className='cart__title'>ДОСТАВКА</div>
                    <CustomInput
                        className={'cart__country cart__input'}
                        placeholder={'Країна'}
                        name={'country'}
                        value={formValues.county}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__city cart__input'}
                        placeholder={'Місто'}
                        name={'city'}
                        value={formValues.house}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__index cart__input'}
                        placeholder={'Індекс'}
                        name={'index'}
                        value={formValues.index}
                        handleChange={handleFormChange}
                    />
                    <div className="cart__delivery">
                        <CustomRadioButtons
                            name={'novaPoshta'}
                            inputs={deliveryTypes}
                            handleChange={handleDeliveryChange}
                            active={deliveryActive}
                        />
                    </div>
                    <CustomInput
                        className={'cart__street cart__input'}
                        placeholder={'Вулиця'}
                        name={'street'}
                        value={formValues.street}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__house cart__input'}
                        placeholder={'Дім'}
                        name={'house'}
                        value={formValues.house}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__apartment cart__input'}
                        placeholder={'Квартира, офіс'}
                        name={'apartment'}
                        value={formValues.apartment}
                        handleChange={handleFormChange}
                    />
                    <div className='cart__title'>ДАНІ ОДЕРЖУВАЧА</div>
                    <CustomInput
                        className={'cart__name cart__input'}
                        placeholder={'Ім\'я'}
                        name={'name'}
                        value={formValues.name}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__surname cart__input'}
                        placeholder={'Прізвище'}
                        name={'surname'}
                        value={formValues.surname}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__email cart__input'}
                        placeholder={'Email'}
                        name={'email'}
                        value={formValues.email}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__number cart__input'}
                        placeholder={'Номер'}
                        name={'number'}
                        value={formValues.number}
                        handleChange={handleFormChange}
                    />
                    <CustomInput
                        className={'cart__comment cart__input'}
                        placeholder={'Коментар'}
                        name={'comment'}
                        value={formValues.surname}
                        handleChange={handleFormChange}
                    />
                    <CustomCheckbox name={'Зберегти інформацію для наступних покупок?'} className={'checkbox--cart'}/>
                </form>
            </div>
            <div className='cart__order'>
                <div className='cart__order-title'>ІНФОРМАЦІЯ ПРО ЗАМОВЛЕННЯ</div>
                <div className='cart__order-properties'>
                    <div className='cart__order-property'>
                        <div className='cart__order-label'>Віртість товарів</div>
                        <div className="cart__order-value">{total} ₴</div>
                    </div>
                    <div className='cart__order-property'>
                        <div className='cart__order-label'>Знижка</div>
                        <div className="cart__order-value">0 ₴</div>
                    </div>
                    <div className='cart__order-property'>
                        <div className='cart__order-label'>Доставка</div>
                        <div className="cart__order-value">0 ₴</div>
                    </div>
                    <div className='cart__order-property'>
                        <div className='cart__order-label'>разом до оплати</div>
                        <div className="cart__order-value">{total} ₴</div>
                    </div>
                </div>
                <div className='cart__order-button'>
                    <CustomButton text={'ЗРОБИТИ ЗАМОВЛЕННЯ'}/>
                </div>
                <div className='cart__order-button cart__order-button--present'>
                    <CustomButton className={'custom-button--white'}>
                        <>
                            НАТЯКНУТИ
                            <img className='cart__present-img' src={presentImg.src} alt={'present'}/>
                        </>
                    </CustomButton>
                </div>
                <div className='cart__policy'>
                    {'Завершуючи оформлення замовлення, я даю згоду\n на обробку та передачу моїх '}
                    <Link href={'/'}>
                        <a className='cart__policy-link'>персональных данных</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
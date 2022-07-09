import React, {MouseEventHandler, useState} from "react";
import {useSelector} from "react-redux";
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.slice";
import CartItem from "../../components/cart-item/cart-item.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import {useInput} from "../../hooks/hooks";
import CustomButton from "../../components/custom-button/custom-button.component";

type cartProps = {}

const Cart: React.FC<cartProps> = () => {

    const cartItems = useSelector(selectCartItems)

    const total = useSelector(selectTotalPrice)

    const [certificate, setCertificate] = useState({active1: false, active2: false, value1: '', value2: ''})

    const handleCertificateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {name} = event.target as HTMLButtonElement
        setCertificate({...certificate, [name]: true})
    }

    const handleCertificateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setCertificate({...certificate, [name]: value})
    }

    const [inputValues, handleInputChange] = useInput(['name', 'surname', 'street', 'county', 'index', 'city', 'house', 'apartment', 'number', 'email'] as const)

    return (
        <div className='cart'>
            <div className='cart__content'>
                <div className={'cart__items'}>
                    {cartItems.map((props, index) => <CartItem key={props.data.slug + index}  {...props}/>)}
                </div>
                <div className='cart__discount'>
                    <div className='cart__certificate'>
                        {certificate.active1 ? (
                            <button
                                className="cart__certificate-button"
                                name={'active1'}
                                onClick={handleCertificateClick}>
                            </button>
                        ) : (
                            <>
                                <CustomInput
                                    placeholder={'Сертифікат'}
                                    name={'value1'}
                                    value={certificate.value1}
                                    handleChange={handleCertificateChange}
                                />
                                <div className='cart__certificate-back'>НАЗАД</div>
                            </>
                        )}
                    </div>
                    <div className='cart__certificate'>
                        {certificate.active2 ? (
                            <button
                                className="cart__certificate-button"
                                name={'active2'}
                                onClick={handleCertificateClick}>
                            </button>
                        ) : (
                            <>
                                <CustomInput
                                    placeholder={'Промокод'}
                                    name={'value2'}
                                    value={certificate.value2}
                                    handleChange={handleCertificateChange}
                                />
                                <div className='cart__certificate-back'>НАЗАД</div>
                            </>
                        )}
                    </div>
                </div>
                <form className='cart__delivery'>
                    <div className='cart__title'>ДОСТАВКА</div>
                    <div className="cart__country">
                        <CustomInput
                            placeholder={'Країна'}
                            name={'country'}
                            value={inputValues.county}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__city-input'>
                        <CustomInput
                            placeholder={'Місто'}
                            name={'city'}
                            value={inputValues.house}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__index-input'>
                        <CustomInput
                            placeholder={'Індекс'}
                            name={'index'}
                            value={inputValues.index}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__street'>
                        <CustomInput
                            placeholder={'Вулиця'}
                            name={'street'}
                            value={inputValues.street}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__house'>
                        <CustomInput
                            placeholder={'Дім'}
                            name={'house'}
                            value={inputValues.house}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__apartment'>
                        <CustomInput
                            placeholder={'Квартира, офіс'}
                            name={'apartment'}
                            value={inputValues.apartment}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__title'>ДАНІ ОДЕРЖУВАЧА</div>
                    <div className="cart__name">
                        <CustomInput
                            placeholder={'Ім\'я'}
                            name={'name'}
                            value={inputValues.name}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className="cart__surname">
                        <CustomInput
                            placeholder={'Прізвище'}
                            name={'surname'}
                            value={inputValues.surname}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className="cart__email">
                        <CustomInput
                            placeholder={'Email'}
                            name={'email'}
                            value={inputValues.email}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className="cart__number">
                        <CustomInput
                            placeholder={'Номер'}
                            name={'number'}
                            value={inputValues.number}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__number'>
                        <CustomInput
                            placeholder={'Коментар'}
                            name={'comment'}
                            value={inputValues.surname}
                            handleChange={handleInputChange}
                        />
                    </div>
                    <div className='cart__number'>
                        <CustomInput
                            placeholder={'Прізвище'}
                            name={'Номер'}
                            value={inputValues.surname}
                            handleChange={handleInputChange}
                        />
                    </div>
                </form>
            </div>
            <div className='cart__order'>
                <div className='cart__order-title'>ІНФОРМАЦІЯ ПРО ЗАМОВЛЕННЯ</div>
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
                    <div className="cart__order-value"> ₴</div>
                </div>
                <div className='cart__order-property'>
                    <div className='cart__order-label'>разом до оплати</div>
                    <div className="cart__order-value"></div>
                </div>
                <CustomButton text={'ЗРОБИТИ ЗАМОВЛЕННЯ'}/>
                <CustomButton text={'НАТЯКНУТИ'}/>
            </div>
        </div>
    )
}

export default Cart
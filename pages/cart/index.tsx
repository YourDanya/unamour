import React, {MouseEventHandler, useState} from "react";
import {useSelector} from "react-redux";
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.slice";
import CartItem from "../../components/cart-item/cart-item.component";
import CustomInput from "../../components/custom-input/custom-input.component";

interface cartProps {

}

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

    return (
        <div className='cart'>
            <div className='cart__content'>
                <div className={'cart__items'}>
                    {cartItems.map((props, index) => <CartItem key={props.data.slug + index}  {...props}/>)}
                </div>
                <div className='cart__discount'>
                    <div className='cart__certificate'>
                        {certificate.active1 ? (
                            <button className="cart__certificate-button"
                                    name={'active1'}
                                    onClick={handleCertificateClick}>
                            </button>
                        ) : (
                            <>
                                <CustomInput placeholder={'Сертифікат'}
                                             name={'value1'}
                                             value={certificate.value1}
                                             handleChange={handleCertificateChange}/>
                                <div className='cart__certificate-back'>НАЗАД</div>
                            </>
                        )}
                    </div>
                    <div className='cart__certificate'>
                        {certificate.active2 ? (
                            <button className="cart__certificate-button"
                                    name={'active2'}
                                    onClick={handleCertificateClick}>
                            </button>
                        ) : (
                            <>
                                <CustomInput placeholder={'Промокод'}
                                             name={'value2'}
                                             value={certificate.value2}
                                             handleChange={handleCertificateChange}/>
                                <div className='cart__certificate-back'>НАЗАД</div>
                            </>
                        )}
                    </div>
                </div>
                <div className='cart__delivery'>
                    <div className='cart__delivery-title'>Доставка</div>
                    <CustomInput placeholder={'Країна'} name={'country'}/>
                    <div className={'cart__city'}>
                        <CustomInput placeholder={'Місто'} name={'city'}/>
                        <CustomInput placeholder={'Індекс'} name={'index'}/>
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default Cart
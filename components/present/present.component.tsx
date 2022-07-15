import React, {useState} from "react";
import CustomInput from "../common/custom-input/custom-input.component";
import CustomCheckbox from "../common/custom-checkbox/custom-checkbox.component";
import CustomButton from "../common/custom-button/custom-button.component";

type presentProps = {
    price: number,
    modalActive: object & { present: boolean },
    name: string,
    images: string[],
    setModalActive: (param: any) => void,
    activeSize: string,
    color: object & { code: string }
}

const Present: React.FC<presentProps> = (props) => {

    const {price, name, modalActive, setModalActive, images, activeSize, color} = props

    const [deliveryType, setDeliveryType] = useState('novaPoshta')

    const handleDeliveryChange = (event: any) => {
        setDeliveryType(event.target.value)
    }

    return (
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
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Ім\'я отримувача'}
                        name={'recName'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Фамилия получателя'}
                        name={'recSurname'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'E-mail отримувача'}
                        name={'recEmail'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Номер отримувача'}
                        name={'recPhone'}
                    />
                </div>
                <div className={'present__question'}>ВІД КОГО</div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Ім\'я відправника'}
                        name={'sendName'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'E-mail відправника'}
                        name={'sendEmail'}
                    />
                </div>
                <div className={'present__question'}>КУДИ ВІДПРАВИТИ?</div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Країна'}
                        name={'country'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Місто'}
                        name={'city'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Індекс'}
                        name={'index'}
                    />
                </div>
                <div className={'present__index'}>Введіть 00000, якщо у вашої країни немає індексу</div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Вулиця'}
                        name={'street'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Дім'}
                        name={'house'}
                    />
                </div>
                <div className='present__input'>
                    <CustomInput
                        className='input--present'
                        placeholder={'Квартира, офіс'}
                        name={'apartment'}
                    />
                </div>
                <div className={'present__question'}>ОБЕРІТЬ ДОСТАВКУ</div>
                <div className={'present__delivery'}>
                    <input
                        className='radio-button'
                        type="radio"
                        value='novaPoshta'
                        name="deliveryType"
                        onChange={handleDeliveryChange}
                        checked={deliveryType === 'novaPoshta'}
                    />
                    <input
                        className='radio-button'
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
                    <CustomCheckbox name={'Подарувати анонімно?'} className={'checkbox--present'}/>
                    <CustomCheckbox name={'Зробити сюрприз?'} className={'checkbox--present'}/>
                </div>
                <CustomButton text={`СПЛАТИТИ ${price} ₴`} className={'custom-button--present'}/>
            </div>
        </div>
    )
}

export default Present
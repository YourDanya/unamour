import React from 'react'
import MapComponent from "../../components/map/map.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomTextarea from "../../components/custom-textarea/custom-textarea.component";
import CustomSlider from "../../components/custom-slider/custom-slider.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactComponent: React.FC = () => {

    return (
        <div className={'contacts'}>
            <h2 className="contacts__title">КОНТАКТЫ</h2>
            <div className="contacts__first-section">
                <div className="contacts__text">
                    <div className="contacts__label--main">ИНТЕРНЕТ-МАГАЗИН</div>
                    <div className="contacts__label">+38 (066) 384-78-22 по всей Украине</div>
                    <div className="contacts__label">Режим работы: ПН-ПТ с 9:00 до 18:00</div>
                    <div className="contacts__label">unamour@gmail.com</div>
                    <div className="contacts__label">Мы в Instagram @unamour</div>
                </div>
                <div className="contacts__feedback">
                    <form className={'contacts__form'}>
                        <div className="contacts__form-title">ОБРАТНАЯ СВЯЗЬ</div>
                        <CustomInput
                            name={'name'}
                            placeholder={'Имя'}
                            classes={['custom-input--contact']}/>
                        <CustomInput
                            name={'phone'}
                            placeholder={'Телефон'}
                            classes={['custom-input--contact']}/>
                        <CustomInput
                            name={'email'}
                            placeholder={'Эл. почта'}
                            classes={['custom-input--contact']}/>
                        <CustomTextarea name={'name'} placeholder={'Сообщение'}/>
                        <CustomButton text={'ОТПРАВИТЬ'} classes={['contacts__form-button']}/>
                        <div className="contacts__footnote">
                            Нажимая кнопку Отправить, я даю согласие на обработку и передачу моих персональных данных
                        </div>
                    </form>
                </div>
            </div>
            <div className="contacts__second-section">
                <div className="contacts__address">
                    <div className="contacts__address-elem">Киев</div>
                    <div className="contacts__address-elem">Режим работы: с 11:00 до 22:00</div>
                    <div className="contacts__address-elem">+380 (66) 384-78-22</div>
                </div>
                <CustomSlider/>
                <MapComponent/>
            </div>
        </div>
    )
}

export default ContactComponent
import React from 'react'
import MapComponent from "../../components/map/map.component";

const ContactComponent: React.FC = () => {

    return (
        <div className={'contacts'}>
            <div className="contacts__first-section">
                <div className="contacts__text">
                    <div className="contacts__label">ИНТЕРНЕТ-МАГАЗИН</div>
                    <div className="contacts__label">+38 (066) 384-78-22 бесплатно по всей Украине</div>
                    <div className="contacts__label">Режим работы: ПН-ПТ с 9:00 до 18:00 </div>
                    <div className="contacts__label">info@namelazz.com</div>
                    <div className="contacts__label">Мы в Instagram @namelazz</div>
                </div>
                <div className="contacts__address">
                    <div className="contacts__address-elem">Киев</div>
                    <div className="contacts__address-elem">Режим работы: с 11:00 до 22:00</div>
                    <div className="contacts__address-elem">+380 (66) 384-78-22</div>
                </div>
                <div className="contacts__images">
                    <img src="/" alt="/"/>
                    <img src="/" alt="/"/>
                </div>
                <MapComponent/>
            </div>
            <div className="contacts__second-section">
                <div className="contacts__feedback">
                    <div className="contacts__feedback-title">Обратная связь</div>
                    <form className={'contacts__form'}>
                        <input
                            className={'contacts__form-input'}
                            type="text"
                            placeholder={'Имя'}
                        />
                        <input
                            className={'contacts__form-input'}
                            type="text"
                            placeholder={'Телефон'}
                        />
                        <input
                            className={'contacts__form-input'}
                            type="email"
                            placeholder={'Эл. почта'}
                        />
                        <input
                            className={'contacts__form-input'}
                            type="email"
                            placeholder={'Сообщение'}
                        />
                    </form>
                    <button className={'contacts__form-button'}>Отправить</button>
                </div>
                <div className="contacts__footnote">
                    Нажимая кнопку Отправить, я даю согласие на обработку и передачу моих персональных данных
                </div>
            </div>
        </div>
    )
}

export default ContactComponent
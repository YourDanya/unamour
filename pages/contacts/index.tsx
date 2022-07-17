import React from 'react'
import MapComponent from "../../components/map/map.component"
import Input from "../../components/common/input/input.component"
import Textarea from "../../components/common/textarea/textarea.component"
import Button from "../../components/common/button/button.component"
import {useInput} from "../../hooks/hooks"

const ContactComponent: React.FC = () => {

    const [values, handleChange] = useInput(['name', 'number', 'email'] as const)

    return (
        <div className={'contacts'}>
            <h2 className="contacts__title">КОНТАКТЫ</h2>
            <div className="contacts__first-section">
                <div className="contacts__text">
                    <div className="contacts__label--main">ИНТЕРНЕТ-МАГАЗИН</div>
                    <div className="contacts__label">+38 (066) 384-78-22 по всей Украине</div>
                    <div className="contacts__label">Режим работы: ПН-ПТ с 9:00 до 18:00</div>
                    <div className="contacts__label">Наша почта - unamour@gmail.com</div>
                    <div className="contacts__label">Мы в Instagram - @unamour</div>
                </div>
                <div className="contacts__feedback">
                    <form className={'contacts__form'}>
                        <div className="contacts__form-title">ОБРАТНАЯ СВЯЗЬ</div>
                        <Input
                            name={'name'}
                            value={values.name}
                            placeholder={'Имя'}
                            className={'input--contact'}
                        />
                        <Input
                            name={'number'}
                            value={values.number}
                            placeholder={'Телефон'}
                            className={'input--contact'}
                        />
                        <Input
                            name={'email'}
                            value={values.email}
                            placeholder={'Эл. почта'}
                            className={'input--contact'}
                        />
                        <Textarea name={'name'} placeholder={'Сообщение'}/>
                        <Button className={'contacts__form-button'}>
                            ОТПРАВИТЬ
                        </Button>
                        <div className="contacts__footnote">
                            Нажимая кнопку Отправить, я даю согласие на обработку и передачу моих персональных данных
                        </div>
                    </form>
                </div>
            </div>
            <div className="contacts__second-section">
                <div className="contacts__address">
                    <div className="contacts__address-elem contacts__address-elem--city">КИЕВ</div>
                    <div className="contacts__address-elem">Режим работы: с 11:00 до 22:00</div>
                    <div className="contacts__address-elem contacts__address-elem--number">+380 (66) 384-78-22</div>
                </div>
            </div>
            <MapComponent classes={['map--contact']}/>
        </div>
    )

}

export default ContactComponent
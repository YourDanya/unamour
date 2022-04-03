import React, {MouseEventHandler, useState} from 'react'
import Link from "next/link";
import {AiOutlineGoogle, FaFacebookF} from "react-icons/all";

interface setInterface {
    email: string,
    name: string,
    password: string,
    passwordConfirm: string,
}

const SignUp: React.FC = () => {

    const [values, setValues] = useState<setInterface>({
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    return (
        <div className={'sign'}>
            <div className="sign__form-title">РЕГИСТРАЦИЯ</div>
            <div className="sign__form_link">ВХОД</div>
            <form className={'sign__form'}>
                <input
                    className="sign__form-input"
                    type={'text'}
                    name={'name'}
                    onChange={handleChange}
                    placeholder={'Имя'}
                />
                <input
                    className="sign__form-title"
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    placeholder={'Ваш e-mail'}
                />
                <input
                    className="sign__form-title"
                    type={'password'}
                    name={'name'}
                    onChange={handleChange}
                    placeholder={'Пароль'}
                />
                <input
                    className="sign__form-input"
                    type={'password'}
                    name={'password-confirm'}
                    onChange={handleChange}
                    placeholder={'Подтверждение пароля'}
                />
                <div className="sign__form-button-container">
                    <button className="sign__form-button">СОЗДАТЬ АККАУНТ</button>
                    <p className={'sign__form-text'}>
                        Нажимая кнопку Создать аккаунт, я даю согласие на <br/> обработку и передачу моих персональных данных.
                    </p>
                </div>
                <div className="sign__form-line"/>
            </form>
        </div>
    )
}

export default SignUp
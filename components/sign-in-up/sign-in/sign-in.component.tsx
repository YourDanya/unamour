import React, {MouseEventHandler, useState} from 'react'
import Link from "next/link";
import {AiOutlineGoogle, FaFacebookF} from "react-icons/all";

interface setInterface {
    email: string,
    password: string
}

const SignIn: React.FC = () => {

    const [values, setValues] = useState<setInterface>({
        email: '',
        password: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    return (
        <div className={'sign'}>
            <div className="sign__form-title">ВХОД</div>
            <div className="sign__form_link">РЕГИСТРАЦИЯ</div>
            <form className={'sign__form'}>
                <input
                    className="sign__form-input"
                    type={'text'}
                    name={'name'}
                    onChange={handleChange}
                />
                <input
                    className="sign__form-title"
                    type={'password'}
                    name={'name'}
                    onChange={handleChange}
                />
                <div className="sign__form-button-container">
                    <button className="sign__form-button">ВОЙТИ</button>
                    <Link href={'/'}>
                        <a className="sign__form-forget">Забыли пароль?</a>
                    </Link>
                    <p className={'sign__form-text'}>
                        Нажимая кнопку Войти, я даю согласие на обработку и <br/> передачу моих персональных данных.
                    </p>
                </div>
                <div className="sign__form-line"/>
            </form>
        </div>
    )
}

export default SignIn
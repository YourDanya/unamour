import React, {MouseEventHandler, useState} from 'react'
import Link from "next/link";
import CustomInput from "../../common/custom-input/custom-input.component";
import {useInput} from "../../../hooks/hooks";

type setType = {
    email: string,
    password: string,
}

type propsType= {
    setSign: () => void
}

const SignIn: React.FC<propsType> = ({setSign}) => {

    const [values, handleChange] = useInput(['email', 'password'])

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">ВХОД</div>
                <div className="sign__content-link" onClick={setSign}>РЕГИСТРАЦИЯ</div>
            </div>
            <form className={'sign__form'}>
                <CustomInput
                    placeholder={'Ваш e-mail'}
                    className={'input--sign'}
                    name={'email'}
                    value={values.email}
                    handleChange={handleChange}
                />
                <CustomInput
                    placeholder={'Ваш пароль'}
                    className={'input--sign'}
                    name={'password'}
                    value={values.password}
                    handleChange={handleChange}
                />
                <div className="sign__form-footer">
                    <button className="sign__form-button">ВОЙТИ</button>
                    <Link href={'/'}>
                        <a className="sign__form-forget">Забыли пароль?</a>
                    </Link>
                    <p className='sign__form-text'>
                        Нажимая кнопку Войти, я даю согласие на обработку и <br/> передачу моих персональных данных.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignIn
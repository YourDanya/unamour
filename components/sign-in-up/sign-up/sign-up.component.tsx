import React, {MouseEventHandler, useState} from 'react'
import Link from "next/link";
import {AiOutlineGoogle, FaFacebookF} from "react-icons/all";
import CustomInput from "../../custom-input/custom-input.component";

type setType = {
    email: string,
    name: string,
    password: string,
    passwordConfirm: string,
}

type propsType = {
    setSign : () => void
}

const SignUp: React.FC<propsType> = ({setSign}) => {

    const [values, setValues] = useState<setType>({
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
    })

    const [errors, setErrors] = useState<setType>({
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">РЕГИСТРАЦИЯ</div>
                <div className="sign__content-link" onClick={setSign}>ВХОД</div>
            </div>
            <form className={'sign__form'}>
                <CustomInput
                    className={'custom-input--sign'}
                    placeholder={'Имя'}
                    name={'name'}
                    error={errors.name}
                />
                <CustomInput
                    className={'custom-input--sign'}
                    placeholder={'Ваш e-mail'}
                    name={'email'}
                    error={errors.email}
                />
                <CustomInput
                    className={'custom-input--sign'}
                    placeholder={'Пароль'}
                    name={'password'}
                    error={errors.password}
                />
                <CustomInput
                    className={'custom-input--sign'}
                    placeholder={'Подтверждение пароля'}
                    name={'passwordConfirm'}
                    error={errors.password}
                />
                <div className="sign__form-footer">
                    <button className="sign__form-button sign__form-button--up">СОЗДАТЬ АККАУНТ</button>
                    <p className={'sign__form-text'}>
                        Нажимая кнопку Создать аккаунт, я даю согласие на <br/> обработку и передачу моих персональных данных.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
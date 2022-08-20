import React, {MouseEventHandler, useState} from 'react'
import Link from "next/link"
import {AiOutlineGoogle, FaFacebookF} from "react-icons/all"
import Input from "../../common/input/input.component"
import {usePlainInput} from "../../../hooks/input.hooks";

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

    const [errors, setErrors] = useState<setType>({
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
    })

    const [values, handleChange] = usePlainInput({email: '', password: ''})
    
    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">РЕГИСТРАЦИЯ</div>
                <div className="sign__content-link" onClick={setSign}>ВХОД</div>
            </div>
            <form className={'sign__form'}>
                <Input
                    className={'input--sign'}
                    placeholder={'Имя'}
                    name={'name'}
                    error={errors.name}
                />
                <Input
                    className={'input--sign'}
                    placeholder={'Ваш e-mail'}
                    name={'email'}
                    error={errors.email}
                />
                <Input
                    className={'input--sign'}
                    placeholder={'Пароль'}
                    name={'password'}
                    error={errors.password}
                />
                <Input
                    className={'input--sign'}
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
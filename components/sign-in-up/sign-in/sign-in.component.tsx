import React, {MouseEventHandler, useState} from 'react'
import Link from "next/link"
import Input from "../../common/input/input.component"
import {usePlainInput} from "../../../hooks/input.hooks"

type setType = {
    email: string,
    password: string,
}

type propsType= {
    setSign: () => void
}

const SignIn: React.FC<propsType> = ({setSign}) => {

    const [values, handleChange] = usePlainInput({email: '', password: ''})

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">ВХІД</div>
                <div className="sign__content-link" onClick={setSign}>РЕЄСТРАЦІЯ</div>
            </div>
            <form className={'sign__form'}>
                <Input
                    placeholder={'Ваш e-mail'}
                    className={'sign__input'}
                    name={'email'}
                    value={values.email}
                    handleChange={handleChange}
                />
                <Input
                    placeholder={'Ваш пароль'}
                    className={'sign__input'}
                    name={'password'}
                    value={values.password}
                    handleChange={handleChange}
                />
                <div className="sign__form-footer">
                    <button className="sign__form-button">УВІЙТИ</button>
                    <Link href={'/'}>
                        <a className="sign__form-forget">Забули пароль?</a>
                    </Link>
                    <p className='sign__form-text'>
                        Натискаючи кнопку Увійти, я даю згоду на обробку та <br/> передачу моїх персональних даних.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignIn
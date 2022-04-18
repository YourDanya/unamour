import React, {MouseEventHandler, useState} from 'react'
import Link from "next/link";
import CustomInput from "../../custom-input/custom-input.component";

type setType = {
    email: string,
    password: string,
}

type propsType= {
    setSign: () => void
}

const SignIn: React.FC<propsType> = ({setSign}) => {

    const [values, setValues] = useState<setType>({
        email: '',
        password: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">ВХОД</div>
                <div className="sign__content-link" onClick={setSign}>РЕГИСТРАЦИЯ</div>
            </div>
            <form className={'sign__form'}>
                <CustomInput
                    placeholder={'Ваш e-mail'}
                    sign={true}
                    name={'email'}
                    onTopChange={handleChange}/>
                <CustomInput
                    placeholder={'Ваш пароль'}
                    sign={true}
                    name={'password'}
                    onTopChange={handleChange}/>
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
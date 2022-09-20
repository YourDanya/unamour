import React from 'react'
import Input from "../../common/input/input.component"
import useSignUp from "./sign-up.hook"

export type SignUpProps = {
    setSign: () => void
}

const SignUp: React.FC<SignUpProps> = (props) => {

    const {setSign} = props
    const {values, handleChange} = useSignUp()

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">РЕЄСТРАЦІЯ</div>
                <div className="sign__content-link" onClick={setSign}>ВХІД</div>
            </div>
            <form className={'sign__form'}>
                <Input
                    className={'sign__input'}
                    placeholder={'Ім\'я'}
                    name={'name'}
                    value={values.name}
                    handleChange={handleChange}
                />
                <Input
                    className={'sign__input'}
                    placeholder={'Ваш e-mail'}
                    name={'email'}
                    value={values.email}
                    handleChange={handleChange}
                />
                <Input
                    className={'sign__input'}
                    placeholder={'Пароль'}
                    name={'password'}
                    value={values.password}
                    handleChange={handleChange}
                />
                <Input
                    className={'sign__input'}
                    placeholder={'Підтвердження пароля'}
                    name={'passwordConfirm'}
                    value={values.passwordConfirm}
                    handleChange={handleChange}
                />
                <div className="sign__bottom">
                    <button className="sign__button sign__button--up">СТВОРИТИ АКАУНТ</button>
                    <div className={'sign__text'}>
                        Натискаючи кнопку Створити акаунт, я даю згоду на обробку та <br/> передачу моїх персональних даних.
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
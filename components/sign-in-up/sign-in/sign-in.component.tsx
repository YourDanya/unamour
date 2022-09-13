import React from 'react'
import Link from "next/link"
import Input from "../../common/input/input.component"
import Button from "../../common/button/button.component"
import useSignIn from "./sign-in.hook"

type SignInProps= {
    setSign: () => void
}

const SignIn: React.FC<SignInProps> = (props) => {

    const {setSign} = props
    const {values, handleChange, handleClick, signInError, user} = useSignIn()

    console.log(user)
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
                    type={'password'}
                    placeholder={'Ваш пароль'}
                    className={'sign__input'}
                    name={'password'}
                    value={values.password}
                    handleChange={handleChange}
                />
                <div className={`form-message ${signInError? 'form-message--error' : ''} ${user ? 'form-message--success' : ''}`}>
                    {signInError}
                    {user && 'Ви успішно увійшли. Через секунду вас буде пернаправлено.'}
                </div>
                <div className="sign__bottom">
                    <Button className="sign__button" onClick={handleClick}>
                        УВІЙТИ
                    </Button>
                    <Link href={'/'}>
                        <a className="sign__forget">Забули пароль?</a>
                    </Link>
                    <p className='sign__text'>
                        Натискаючи кнопку Увійти, я даю згоду на обробку та <br/> передачу моїх персональних даних.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignIn
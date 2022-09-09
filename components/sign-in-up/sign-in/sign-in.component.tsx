import React from 'react'
import Link from "next/link"
import Input from "../../common/input/input.component"
import Button from "../../common/button/button.component"
import useSignIn from "./sign-in.hook"
import Form from "../../common/form/form.component"

type SignInProps= {
    setSign: () => void
}

const SignIn: React.FC<SignInProps> = (props) => {

    const {setSign} = props
    const {values, handleChange, handleClick, signInError} = useSignIn()

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">ВХІД</div>
                <div className="sign__content-link" onClick={setSign}>РЕЄСТРАЦІЯ</div>
            </div>
            <Form className={'sign__form'} error={signInError}>
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
                <div className="sign__form-footer">
                    <Button className="sign__form-button" onClick={handleClick}>
                        УВІЙТИ
                    </Button>
                    <Link href={'/'}>
                        <a className="sign__form-forget">Забули пароль?</a>
                    </Link>
                    <p className='sign__form-text'>
                        Натискаючи кнопку Увійти, я даю згоду на обробку та <br/> передачу моїх персональних даних.
                    </p>
                </div>
            </Form>
        </div>
    )
}

export default SignIn
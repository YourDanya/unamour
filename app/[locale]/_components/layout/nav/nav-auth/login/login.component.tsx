'use client'

import useLogin from 'app/[locale]/_components/layout/nav/nav-auth/login/login.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import {SignInProps} from 'app/[locale]/_components/layout/nav/nav-auth/login/login.types'
import LoginForm from 'app/[locale]/_components/layout/nav/nav-auth/login/login-form/login-form.component'
import ResetPass from 'app/[locale]/_components/layout/nav/nav-auth/login/reset-pass/reset-pass.component'
import {FC} from 'react'

const Login: FC<SignInProps> = (props) => {
    const {sign, handleSign} = props
    const {transl, resetPass, toggleResetPass} = useLogin()

    return (
        <div className={`nav-auth__content ${sign === 'login' ? '' : 'nav-auth__content--hidden'}`}>
            <div className="nav-auth__content-top">
                <div className="nav-auth__content-title">{transl.signIn}</div>
                <Button className="nav-auth__content-link" name={'register'} onClick={handleSign}>
                    {transl.switch}
                </Button>
            </div>
            {resetPass ? (
                <ResetPass handleResetPass={toggleResetPass}/>
            ) : (
                <LoginForm handleResetPass={toggleResetPass}/>
            )}
        </div>
    )
}

export default Login
import React from 'react'
import LoginForm from 'components/nav-auth/login/login-form/login-form.component'
import ResetPass from 'components/nav-auth/login/reset-pass/reset-pass.component'
import {SignInProps} from 'components/nav-auth/login/login.types'
import Button from 'components/common/button/button.component'
import useLogin from 'components/nav-auth/login/login.hook'

const Login: React.FC<SignInProps> = (props) => {
    const {sign, handleSign} = props
    const {transl, resetPass, handleResetPass} = useLogin()

    return (
        <div className={`nav-auth__content ${sign === 'login' ? '' : 'nav-auth__content--hidden'}`}>
            <div className="nav-auth__content-top">
                <div className="nav-auth__content-title">{transl.signIn}</div>
                <Button className="nav-auth__content-link" name={'register'} onClick={handleSign}>
                    {transl.switch}
                </Button>
            </div>
            {resetPass ? (
                <ResetPass handleResetPass={handleResetPass}/>
            ) : (
                <LoginForm handleResetPass={handleResetPass}/>
            )}
        </div>
    )
}

export default Login
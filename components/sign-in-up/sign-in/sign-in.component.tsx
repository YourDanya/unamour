import React from 'react'
import useSignIn from 'components/sign-in-up/sign-in/sign-in.hook'
import Login from 'components/sign-in-up/sign-in/login/login.component'
import Reset from 'components/sign-in-up/sign-in/reset/reset.component'
import {SignInProps} from 'components/sign-in-up/sign-in/sign-in.types'
import Button from 'components/common/button/button.component'
import {useState} from 'react'

const SignIn: React.FC<SignInProps> = (props) => {
    const {sign, handleSign} = props
    const {transl, resetPass, handleResetPass} = useSignIn()

    return (
        <div className={`sign__content ${sign === 'login' ? '' : 'sign__content--hidden'}`}>
            <div className="sign__content-top">
                <div className="sign__content-title">{transl.signIn}</div>
                <Button className="sign__content-link" name={'sign-up'} onClick={handleSign}>
                    {transl.switch}
                </Button>
            </div>
            {resetPass ? (
                <Reset handleResetPass={handleResetPass}/>
            ) : (
                <Login handleResetPass={handleResetPass}/>
            )}
        </div>
    )
}

export default SignIn
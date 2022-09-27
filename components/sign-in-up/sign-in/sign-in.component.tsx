import React from 'react'
import useSignIn from 'components/sign-in-up/sign-in/sign-in.hook'
import Login from 'components/sign-in-up/sign-in/login/login.component'
import Reset from 'components/sign-in-up/sign-in/reset/reset.component'

type SignInProps = {
    setSign: () => void
}

const SignIn: React.FC<SignInProps> = (props) => {

    const {setSign} = props
    const {transl, resetPass, handleResetPass} = useSignIn()

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">{transl.signIn}</div>
                <div className="sign__content-link" onClick={setSign}>{transl.switch}</div>
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
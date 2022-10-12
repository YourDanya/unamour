import React from 'react'
import useSignUp from 'components/sign-in-up/sign-up/sign-up.hook'
import Register from 'components/sign-in-up/sign-up/register/register.component'
import Activate from 'components/sign-in-up/sign-up/activate/activate.component'

export type SignUpProps = {
    setSign: () => void
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const {setSign} = props
    const {transl, register} = useSignUp()

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">{transl.signUp}</div>
                <div className="sign__content-link" onClick={setSign}>{transl.switch}</div>
            </div>
            {register.success ? (
                <Activate/>
            ) : (
                <Register register={register}/>
            )}
        </div>
    )
}

export default SignUp
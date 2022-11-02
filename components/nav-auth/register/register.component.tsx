import React from 'react'
import useSignUp from 'components/nav-auth/register/register.hook'
import Register from 'components/nav-auth/register/register-form/register-form.component'
import ActivateUser from 'components/nav-auth/register/activate-user/activate-user.component'
import {SignUpProps} from 'components/nav-auth/register/register.types'
import Button from 'components/common/button/button.component'

const SignUp: React.FC<SignUpProps> = (props) => {
    const {sign, handleSign} = props
    const {transl, register, sendRegisterCode} = useSignUp()

    return (
        <div className={`nav-auth__content ${sign==='register'? '' : 'nav-auth__content--hidden'}`}>
            <div className="nav-auth__content-top">
                <div className="nav-auth__content-title">{transl.signUp}</div>
                <Button className="nav-auth__content-link" name={'login'} onClick={handleSign}>
                    {transl.switch}
                </Button>
            </div>
            {sendRegisterCode.success || sendRegisterCode.error ? (
                <ActivateUser sendRegisterCode={sendRegisterCode}/>
            ) : (
                <Register register={register}/>
            )}
        </div>
    )
}

export default SignUp
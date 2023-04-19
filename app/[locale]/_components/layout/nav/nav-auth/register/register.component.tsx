'use client'

import {FC} from 'react'
import useSignUp from 'app/[locale]/_components/layout/nav/nav-auth/register/register.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import ActivateUser from 'app/[locale]/_components/layout/nav/nav-auth/register/activate-user/activate-user.component'
import RegisterForm from 'app/[locale]/_components/layout/nav/nav-auth/register/register-form/register-form.component'
import {RegisterProps} from 'app/[locale]/_components/layout/nav/nav-auth/register/register.types'

const Register: FC<RegisterProps> = (props) => {
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
                <RegisterForm register={register}/>
            )}
        </div>
    )
}

export default Register
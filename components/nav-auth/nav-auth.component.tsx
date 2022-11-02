import React, {memo} from 'react'
import SignUp from 'components/nav-auth/register/register.component'
import SignIn from 'components/nav-auth/login/login.component'
import useSignInUp from 'components/nav-auth/nav-auth.hook'

const SignInUp: React.FC = () => {
    const {sign, handleSign} = useSignInUp()

    return (
        <div className={'nav-auth'}>
            <SignIn sign={sign} handleSign={handleSign}/>
            <SignUp sign={sign} handleSign={handleSign}/>
        </div>
    )
}

export default memo(SignInUp)
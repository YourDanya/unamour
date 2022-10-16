import React, {memo} from 'react'
import SignUp from 'components/sign-in-up/sign-up/sign-up.component'
import SignIn from 'components/sign-in-up/sign-in/sign-in.component'
import useSignInUp from 'components/sign-in-up/sign-in-up.hook'
import {useState} from 'react'
import Button from 'components/common/button/button.component'

const SignInUp: React.FC = () => {
    const {sign, handleSign} = useSignInUp()

    console.log('render sign-in-up')

    return (
        <div className={'sign'}>
            <SignIn sign={sign} handleSign={handleSign}/>
            <SignUp sign={sign} handleSign={handleSign}/>
        </div>
    )
}

export default memo(SignInUp)
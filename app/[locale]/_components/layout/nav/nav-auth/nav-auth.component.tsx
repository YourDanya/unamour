'use client'

import {memo} from 'react'
import useSignInUp from 'app/[locale]/_components/layout/nav/nav-auth/nav-auth.hook'
import {FC} from 'react'
import Login from 'app/[locale]/_components/layout/nav/nav-auth/login/login.component'
import Register from 'app/[locale]/_components/layout/nav/nav-auth/register/register.component'

const NavAuth: FC = () => {
    const {sign, onSetSign} = useSignInUp()

    return (
        <div className={'nav-auth'}>
            <Login sign={sign} handleSign={onSetSign}/>
            <Register sign={sign} handleSign={onSetSign}/>
        </div>
    )
}

export default memo(NavAuth)
import React, {memo} from 'react'
import SignUp from 'components/sign-in-up/sign-up/sign-up.component'
import SignIn from 'components/sign-in-up/sign-in/sign-in.component'
import useSignInUp from 'components/sign-in-up/sign-in-up.hook'
export type SignInUpProps = {}

const SignInUp: React.FC<SignInUpProps> = () => {

    const {sign, setSign} = useSignInUp()

    return (
        <div className={'sign'}>
            {sign === 'in' ? (
                <SignIn setSign={() => setSign('up')}/>
            ) : (
                <SignUp setSign={() => setSign('in')}/>
            )}
        </div>
    )
}

export default memo(SignInUp)
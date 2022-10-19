import React from 'react'
import useSignUp from 'components/sign-in-up/sign-up/sign-up.hook'
import Register from 'components/sign-in-up/sign-up/register/register.component'
import Activate from 'components/sign-in-up/sign-up/activate/activate.component'
import {SignUpProps} from 'components/sign-in-up/sign-up/sign-up.types'
import Button from 'components/common/button/button.component'

const SignUp: React.FC<SignUpProps> = (props) => {
    const {sign, handleSign} = props
    const {transl, register, sendCode} = useSignUp()

    return (
        <div className={`sign__content ${sign==='sign-up'? '' : 'sign__content--hidden'}`}>
            <div className="sign__content-top">
                <div className="sign__content-title">{transl.signUp}</div>
                <Button className="sign__content-link" name={'login'} onClick={handleSign}>
                    {transl.switch}
                </Button>
            </div>
            {sendCode.success || sendCode.error ? (
                <Activate sendCode={sendCode}/>
            ) : (
                <Register register={register}/>
            )}
            {/*<Button className={'sign__test-btn'} onClick={() => setCounter(counter+1)}>*/}
            {/*    {counter}*/}
            {/*</Button>*/}
        </div>
    )
}

export default SignUp
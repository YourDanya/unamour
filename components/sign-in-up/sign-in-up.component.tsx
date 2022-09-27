import React, {useState, memo} from 'react'
import googleIcon from 'public/icons/google.svg'
import facebookIcon from 'public/icons/facebook.svg'
import SignUp from 'components/sign-in-up/sign-up/sign-up.component'
import SignIn from 'components/sign-in-up/sign-in/sign-in.component'


export type SignInUpProps = {}

const SignInUp: React.FC<SignInUpProps> = () => {

    const [sign, setSign] = useState<'in' | 'up'>('in')

    return (
        <div className={'sign'}>
            {sign === 'in' ? (
                <SignIn setSign={() => setSign('up')}/>
            ) : (
                <SignUp setSign={() => setSign('in')}/>
            )}
            <div className="sign__socials">
                <div className="sign__socials-text">ВХІД ЧЕРЕЗ СОЦМЕРЕЖІ</div>
                <div className="sign__socials-items">
                    <div className="sign__socials-item">
                        <img src={googleIcon.src} alt="social image" className={'sign__social-item-img'}/>
                    </div>
                    <div className="sign__socials-item sign__socials-item--last">
                        <img src={facebookIcon.src} alt="social image" className={'sign__social-item-img'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(SignInUp)
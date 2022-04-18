import React, {useState} from 'react'
import SignIn from "./sign-in/sign-in.component";
import googleIcon from '/public/icons/google.svg'
import facebookIcon from '/public/icons/facebook.svg'
import SignUp from "./sign-up/sign-up.component";


const SignInUp: React.FC = () => {
    const [sign, setSign] = useState<'in' | 'up'>('in')

    console.log('in')
    console.log('up')

    return (
        <div className={'sign'}>
            {
                sign==='in' ? (
                    <SignIn setSign={() => setSign('up')}/>
                ) : (
                    <SignUp setSign={() => setSign('in')}/>
                )
            }
            <div className="sign__socials">
                <div className="sign__socials-text">ВХОД ЧЕРЕЗ СОЦСЕТИ</div>
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

export default SignInUp
import React, {useState} from 'react'
import SignIn from "./sign-in/sign-in.component";
import {AiOutlineGoogle, FaFacebookF} from "react-icons/all";

interface signInUpProps {

}

const SignInUp: React.FC<signInUpProps> = () => {
    const [sign, setSign] = useState<'in' | 'up'>('in')
    return (
        <div className={'sign-in-up'}>
            {
                sign ? (
                    <SignIn/>
                ) : (
                    <SignInUp/>
                )
            }
            <div className="sign__socials">
                <div className="sign__socials-text">ВХОД ЧЕРЕЗ СОЦСЕТИ</div>
                <div className="sign__socials-items">
                    <div className="sign__social-item">
                        <AiOutlineGoogle/>
                    </div>
                    <div className="sign__social-item">
                        <FaFacebookF/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInUp
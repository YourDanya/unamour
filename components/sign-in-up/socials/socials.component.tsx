import React from 'react'
import useSocials from 'components/sign-in-up/socials/socials.hook'
import googleIcon from 'public/icons/google.svg'
import facebookIcon from 'public/icons/facebook.svg'

const Socials: React.FC = () => {

    const {transl} = useSocials()

    return (
        <div className="sign__socials">
            <div className="sign__socials-text">{transl.title}</div>
            <div className="sign__socials-items">
                <div className="sign__socials-item">
                    <img src={googleIcon.src} alt="social image" className={'sign__social-item-img'}/>
                </div>
                <div className="sign__socials-item sign__socials-item--last">
                    <img src={facebookIcon.src} alt="social image" className={'sign__social-item-img'}/>
                </div>
            </div>
        </div>
    )
}

export default Socials
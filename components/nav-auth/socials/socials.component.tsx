import React from 'react'
import useSocials from 'components/nav-auth/socials/socials.hook'
import googleIcon from 'public/icons/google.svg'
import facebookIcon from 'public/icons/facebook.svg'

const Socials: React.FC = () => {

    const {transl} = useSocials()

    return (
        <div className="nav-auth__socials">
            <div className="nav-auth__socials-text">{transl.title}</div>
            <div className="nav-auth__socials-items">
                <div className="nav-auth__socials-item">
                    <img src={googleIcon.src} alt="social image" className={'nav-auth__social-item-img'}/>
                </div>
                <div className="nav-auth__socials-item nav-auth__socials-item--last">
                    <img src={facebookIcon.src} alt="social image" className={'nav-auth__social-item-img'}/>
                </div>
            </div>
        </div>
    )
}

export default Socials
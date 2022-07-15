import React from 'react'
import telegram from '/public/icons/telegram.svg'
import CustomInput from "../common/custom-input/custom-input.component"

const Footer: React.FC = () => {

    return (
        <footer className={'footer'}>
            <div className="footer__social-section">
                <div className="footer__social-items">
                    <div className="footer__social-item">КОНТАКТИ</div>
                    <div className="footer__social-item">INSTAGRAM</div>
                    <div className="footer__social-item">WHATSAPP</div>
                    <div className="footer__social-item">TELEGRAM</div>
                </div>
                <div className="footer__social-subscription">
                    <div className="footer__social-subscription-text">НОВИНИ UNAMOUR</div>
                    <CustomInput className={'input--footer'} placeholder={'Email'} name={'email'}>
                        <img src={telegram.src}/>
                    </CustomInput>
                </div>
            </div>
            <div className="footer__copyright-section">
                <div className="footer__copyright-text">
                    © 2020-2022
                    <span className={'footer__copyright-name'}>UNAMOUR</span>
                </div>
                <div className="footer__copyright-made-by">Сделано на Next.js</div>
            </div>
        </footer>
    )
}

export default Footer
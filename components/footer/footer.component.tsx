import React from 'react'
import telegram from '/public/icons/telegram.svg'
import CustomInput from "../custom-input/custom-input.component";

const Footer: React.FC = () => {

    return (
        <footer className={'footer'}>
            <div className="footer__social-section">
                <div className="footer__social-items">
                    <div className="footer__social-item">КОНТАКТЫ</div>
                    <div className="footer__social-item">INSTAGRAM</div>
                    <div className="footer__social-item">WHATSAPP</div>
                    <div className="footer__social-item">TELEGRAM</div>
                </div>
                <div className="footer__social-subscription">
                    <div className="footer__social-subscription-text">НОВОСТИ UNAMOUR</div>
                    <CustomInput
                        placeholder={'Email'}
                        src={telegram.src}
                        onSubmit={() => {}}
                        name={'email'}
                    />
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
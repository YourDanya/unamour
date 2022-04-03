import React from 'react'


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
                <div className="footer__subscription">
                    <div className="footer__subscription-text">НОВОСТИ NAMELAZZ</div>
                    <input type="footer__subscription-input"/>
                </div>
            </div>
            <div className="footer__copyright-section">
                <div className="footer__copyright">© 2017-2022 NAMELAZZ</div>
                <div className="footer__made-by">Сделано мной</div>
            </div>
        </footer>
    )
}

export default Footer
import React from 'react'
import telegram from '/public/icons/telegram.svg'
import react from '/public/logo/react.svg'
import Input from "../common/input/input.component"
import {useInput} from "../../hooks/input.hooks"
import Link from "next/link";

const Footer: React.FC = () => {

    const [footer, handleChange] = useInput({email: {value: '', validations: {isEmail: true}}})

    return (
        <footer className={'footer'}>
            <div className="footer__social">
                <div className="footer__links">
                    <Link href="/">
                        <a className='footer__link'>КОНТАКТИ</a>
                    </Link>
                    <Link href="/">
                        <a className='footer__link'>INSTAGRAM</a>
                    </Link>
                    <Link href={'/'}>
                        <a className='footer__link'>WHATSAPP</a>
                    </Link>
                    <Link href={'/'}>
                        <a className='footer__link'>TELEGRAM</a>
                    </Link>
                </div>
                <div className="footer__subscription">
                    <div className="footer__news">НОВИНИ UNAMOUR</div>
                    <Input
                        className='footer__input'
                        placeholder={'Email'}
                        name={'email'}
                        value={footer.email.value}
                        handleChange={handleChange}
                    >
                        <img src={telegram.src} alt={'footer icon'}/>
                    </Input>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="footer__years">© 2020-2022</div>
                <span className='footer__name'>UNAMOUR</span>
                <div className="footer__logo">
                    Зроблено на
                    <img src={react.src} className={'footer__logo-img'} alt={'footer icon'}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
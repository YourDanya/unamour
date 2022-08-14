import React from 'react'
import telegram from '/public/icons/telegram.svg'
import react from '/public/logo/next.svg'
import Input from "../common/input/input.component"
import Link from "next/link"
import useFooter from "./footer.hook"
import Links from "./links/links.component"
import ModalContent from "../common/modal-content/modal-content.component"

const Footer: React.FC = () => {

    const {footer, handleChange, modal, showModal, hideModal} = useFooter()

    return (
        <footer className='footer'>
            <div className="container footer__social">
                <Links className='footer__links--desc'/>
                <div className="footer__subscription">
                    <div className="footer__news">НОВИНИ UNAMOUR</div>
                    <div className='footer__form'>
                        <Input
                            placeholder={'Email'}
                            name={'email'}
                            value={footer.email.value}
                            handleChange={handleChange}
                        >
                            <button className='footer__submit'>
                                <img src={telegram.src} alt={'footer icon'}/>
                            </button>
                            <div className='footer__policy'>
                                Натискаючи на іконку, ви походжуєтесь з
                                <Link href={'/client-service/policy'}>
                                    <a className='footer__policy-link'>політикою конфіденційність</a>
                                </Link>
                            </div>
                        </Input>
                    </div>
                </div>
            </div>
            <div className="container footer__copyright">
                <div className="footer__years">© 2020-2022</div>
                <div className='footer__name'>
                    UNAMOUR
                    <button onClick={showModal} className='footer__contact' name={'links'}>
                        Звя'затися з нами
                    </button>
                </div>
                <div className="footer__logo">
                    Зроблено на
                    <Link href={'https://nextjs.org/'}>
                        <a><img src={react.src} className={'footer__logo-img'} alt={'footer icon'}/></a>
                    </Link>
                </div>
            </div>
            <ModalContent active={modal.links} hideModal={hideModal} className={'footer__modal'}>
                <div className={'footer__title'}>UNAMOUR</div>
                <Links/>
            </ModalContent>
        </footer>
    )
}

export default Footer
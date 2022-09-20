import React from 'react'
import telegram from '/public/icons/telegram.svg'
import react from '/public/logo/next.svg'
import Input from "../common/input/input.component"
import Link from "next/link"
import useFooter from "./footer.hook"
import Links from "./links/links.component"
import ModalContent from "../common/modal-content/modal-content.component"
import Button from "../common/button/button.component"

const Footer: React.FC = () => {

    const {handleChange, modal, showModal, hideModal, content, inputs, transl} = useFooter()

    return (
        <footer className='footer'>
            <div className="container footer__social">
                <Links className='footer__links--desc'/>
                <div className="footer__subscription">
                    <div className="footer__news">{transl.news}</div>
                    <div className='footer__form'>
                        <Input
                            placeholder={transl.input.email}
                            name={'email'}
                            value={inputs.values.email}
                            handleChange={handleChange}
                        >
                            <button className='footer__submit'>
                                <img src={telegram.src} alt={'footer icon'}/>
                            </button>
                            <div className='footer__policy'>
                                {transl.policy}
                                <Link href={'/client-service/policy'}>
                                    <a className='footer__policy-link'>{transl.policyLink}</a>
                                </Link>
                            </div>
                        </Input>
                    </div>
                </div>
            </div>
            <div className="container footer__copyright">
                <div className="footer__years">{content.years}</div>
                <div className='footer__name'>
                    {content.name}
                    <Button onClick={showModal} className='footer__contact' name={'links'}>
                        {transl.contact}
                    </Button>
                </div>
                <div className="footer__logo">
                    Зроблено на
                    <Link href={'https://nextjs.org/'}>
                        <a><img src={react.src} className={'footer__logo-img'} alt={'footer icon'}/></a>
                    </Link>
                </div>
            </div>
            <ModalContent active={modal.links} hideModal={hideModal} className={'footer__modal'}>
                <div className={'footer__title'}>{content.name}</div>
                <Links/>
            </ModalContent>
        </footer>
    )
}

export default Footer
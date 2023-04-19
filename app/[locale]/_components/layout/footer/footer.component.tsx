'use client'

import {FC} from 'react'
import telegram from 'public/icons/telegram.svg'
import react from 'public/logo/next.svg'
import useFooter from 'app/[locale]/_components/layout/footer/footer.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import Links from 'app/[locale]/_components/layout/footer/links/links.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import Link from 'next/link'
import Input from 'app/[locale]/_common/components/input/input.component'
import 'app/[locale]/_components/layout/footer/footer.styles.sass'

const Footer: FC = () => {
    const {onChange, modal, showModal, hideModal, content, inputs, transl, onFocus, focused} = useFooter()

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
                            onChange={onChange}
                            onFocus={onFocus}
                            onBLur={onFocus}
                        />
                        <div className={`footer__form-add ${focused? 'footer__form-add--focused' : ''}`}>
                            <button className='footer__submit'>
                                <img src={telegram.src} alt={'footer icon'}/>
                            </button>
                            <div className='footer__policy'>
                                {transl.policy}
                                <Link href={'/client-service/policy'} className='footer__policy-link'>
                                    {transl.policyLink}
                                </Link>
                            </div>
                        </div>
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
                    {transl.logo}
                    <Link href={'https://nextjs.org/'}>
                        <img src={react.src} className={'footer__logo-img'} alt={'footer icon'}/>
                    </Link>
                </div>
            </div>
            <ModalContent active={modal.links} hideModal={hideModal} className={'footer__modal'}>
                <div className={'footer__title'}>{content.name}</div>
                <Links/>
            </ModalContent>
        </footer>
    );
}

export default Footer
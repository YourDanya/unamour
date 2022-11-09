import React from 'react'
import telegram from 'public/icons/telegram.svg'
import react from 'public/logo/next.svg'
import useFooter from 'components/footer/footer.hook'
import Button from 'components/common/button/button.component'
import ModalContent from 'components/common/modal-content/modal-content.component'
import Link from 'next/link'
import Links from 'components/footer/links/links.component'
import Input from 'components/common/input/input.component'

const Footer: React.FC = () => {

    const {onChange, modal, showModal, hideModal, content, inputs, transl} = useFooter()

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
                    {transl.logo}
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
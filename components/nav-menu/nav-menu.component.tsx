import React, {useState} from "react";
import Link from "next/link";

type navMenuProps = {
    active: { hamburger: boolean },
    hideModal: (event: React.MouseEvent<HTMLElement>) => void,
    showTopNav: (event: React.MouseEvent<HTMLElement>) => void,
}

const NavMenu: React.FC<navMenuProps> = ({active, hideModal, showTopNav}) => {
    const [clientService, setClientService] = useState(false)

    const handleClientClick = () => setClientService(!clientService)

    console.log('inside nav menu')

    return (
        <>
            <div className="menu">
                <div className="menu__links menu__links--first">
                    <Link href={'/'}>
                        <a className={'menu__link'}>НОВЫЕ ПОСТУПЛЕНИЯ</a>
                    </Link>
                    <Link href={'/'}>
                        <a className={'menu__link'}>ОДЕЖДА И АКСЕСУАРЫ</a>
                    </Link>
                    <Link href={'/'}>
                        <a className={'menu__link'}>БЕСТСЕЛЛЕРЫ</a>
                    </Link>
                    <Link href={'/'}>
                        <a className={'menu__link'}>СПЕЦИАЛЬНАЯ ЦЕНА</a>
                    </Link>
                </div>
                <div className={`menu__links menu__links--second ${active.hamburger ? 'menu__links2--active' : ''}`}>
                    <Link href={'/'}>
                        <a className={'menu__link'}>ИЗБРАННОЕ</a>
                    </Link>
                    <a className={'menu__link'} onClick={handleClientClick}>КЛИЕНТСКИЙ СЕРВИС</a>
                    <Link href={'/vacancies'}>
                        <a className={'menu__link'}>ВАКАНСИИ</a>
                    </Link>
                    <Link href={'/contacts'}>
                        <a className={'menu__link'}>КОНТАКТЫ</a>
                    </Link>
                    <a id='sign' className={'menu__link'} onClick={
                        showTopNav}>
                        ВОЙТИ
                    </a>
                </div>
            </div>
            {
                clientService && (
                    <div className={'menu service-menu'}>
                        <div className="menu__links">
                            <a className="menu__link menu__link--bold">
                                КЛИЕНТСКИЙ СЕРВИС
                            </a>
                            <Link href={'/client-service/payment-and-delivery'}>
                                <a className="menu__link">
                                    ОПЛАТА И ДОСТАВКА
                                </a>
                            </Link>
                            <Link href={'/client-service/return'}>
                                <a className="menu__link">
                                    ВОЗВРАТ
                                </a>
                            </Link>
                            <Link href={'/client-service/composition-and-care'}>
                                <a className="menu__link">
                                    СОТСАВ И УХОД
                                </a>
                            </Link>
                            <Link href={'/client-service/policy-and-privacy'}>
                                <a className="menu__link">
                                    ПОЛИТИКА И КОНФИДЕЦИАЛЬНОСТЬ
                                </a>
                            </Link>
                            <Link href={'/client-service/terms-of-use'}>
                                <a className="menu__link">
                                    ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
                                </a>
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default NavMenu
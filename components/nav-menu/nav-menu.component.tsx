import React, {useEffect, useState} from "react";
import Link from "next/link";
import Back from "../back/back.component";

type navMenuProps = {
    active: boolean,
    hideModal: (event: React.MouseEvent<HTMLElement>) => void,
    showTopNav: (event: React.MouseEvent<HTMLElement>) => void,
}

const NavMenu: React.FC<navMenuProps> = ({active, hideModal, showTopNav}) => {
    const [clientService, setClientService] = useState(false)

    const handleClientClick = () => setClientService(!clientService)

    useEffect(() => {
        if (active && clientService) handleClientClick()
    }, [active])

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
                <div className={`menu__links menu__links--second`}>
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
            <div className={`menu service-menu ${clientService && 'service-menu--active'}`}>
                <div className="service-menu__back" onClick={handleClientClick}>
                    <Back
                        handleClick={() => setClientService(false)}
                        mainClasses={['service-menu__arrow']}
                        lineClasses={{
                            left: ['service-menu__arrow-line--left'],
                            right: ['service-menu__arrow-line--right']
                        }}/>
                    <div className="service-menu__back-title">
                        НАЗАД
                    </div>
                </div>
                <div className="menu__links">
                    <a className="menu__link menu__link--bold">
                        КЛИЕНТСКИЙ СЕРВИС
                    </a>
                    <Link href={'/client-service/delivery'}>
                        <a className="menu__link">
                            ОПЛАТА И ДОСТАВКА
                        </a>
                    </Link>
                    <Link href={'/client-service/return'}>
                        <a className="menu__link">
                            ВОЗВРАТ
                        </a>
                    </Link>
                    <Link href={'/client-service/clothing-care'}>
                        <a className="menu__link">
                            СОТСАВ И УХОД
                        </a>
                    </Link>
                    <Link href={'/client-service/policy'}>
                        <a className="menu__link">
                            ПОЛИТИКА И КОНФИДЕЦИАЛЬНОСТЬ
                        </a>
                    </Link>
                    <Link href={'/client-service/warranty-period'}>
                        <a className="menu__link">
                            ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavMenu
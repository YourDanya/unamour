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
                    <Link href={'/shop-items/all'}>
                        <a className={'menu__link'}>ОДЯГ ТА АКСЕСУАРИ</a>
                    </Link>
                    <Link href={'/shop-items/new'}>
                        <a className={'menu__link'}>НОВІ НАДХОДЖЕННЯ</a>
                    </Link>
                    <Link href={'/shop-items/best'}>
                        <a className={'menu__link'}>БЕСТСЕЛЕРИ</a>
                    </Link>
                    <Link href={'/shop-items/coming'}>
                        <a className={'menu__link'}>СКОРО У ПРОДАЖІ</a>
                    </Link>
                    <Link href={'/shop-items/special-price'}>
                        <a className={'menu__link'}>СПЕЦІАЛЬНА ЦІНА</a>
                    </Link>
                </div>
                <div className={`menu__links menu__links--second`}>
                    <Link href={'/'}>
                        <a className={'menu__link'}>ОБРАНЕ</a>
                    </Link>
                    <a className={'menu__link'}
                       onClick={handleClientClick}>
                        КЛІЄНТСЬКИЙ СЕРВІС
                    </a>
                    <Link href={'/vacancies'}>
                        <a className={'menu__link'}>ВАКАНСІЇ</a>
                    </Link>
                    <Link href={'/contacts'}>
                        <a className={'menu__link'}>КОНТАКТИ</a>
                    </Link>
                    <a id='sign' className={'menu__link'} onClick={
                        showTopNav}>
                        УВІЙТИ
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
                        КЛІЄНТСЬКИЙ СЕРВІС
                    </a>
                    <Link href={'/client-service/delivery'}>
                        <a className="menu__link">
                            ОПЛАТА І ДОСТАВКА
                        </a>
                    </Link>
                    <Link href={'/client-service/return'}>
                        <a className="menu__link">
                            ПОВЕРНЕННЯ
                        </a>
                    </Link>
                    <Link href={'/client-service/clothing-care'}>
                        <a className="menu__link">
                            СКЛАД І ДОГЛЯД
                        </a>
                    </Link>
                    <Link href={'/client-service/policy'}>
                        <a className="menu__link">
                            ПОЛІТИКА І КОНФІДЕЦІЙНІСТЬ
                        </a>
                    </Link>
                    <Link href={'/client-service/warranty-period'}>
                        <a className="menu__link">
                             УГОДА КОРИСТУВАЧА
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NavMenu
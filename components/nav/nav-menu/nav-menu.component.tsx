import React from "react"
import Link from "next/link"
import Button from "../../common/button/button.component"
import useNavMenu from "./nav-menu.hook"

type navMenuProps = {
    showTopModal: (event: React.MouseEvent<HTMLElement>) => void
}

const NavMenu: React.FC<navMenuProps> = (props) => {

    const {showTopModal} = props
    const {clientService, handleClientClick, user} = useNavMenu()
    
    return (
        <>
            <div className="container menu">
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
                    <Button className={'menu__link'} onClick={handleClientClick}>
                        КЛІЄНТСЬКИЙ СЕРВІС
                    </Button>
                    <Link href={'/vacancies'}>
                        <a className={'menu__link'}>ВАКАНСІЇ</a>
                    </Link>
                    <Link href={'/contacts'}>
                        <a className={'menu__link'}>КОНТАКТИ</a>
                    </Link>
                    {user ? (
                        <Link href={'/profile/update-user'}>
                            <a className={'menu__link'}>ПРОФІЛЬ</a>
                        </Link>
                        ) : (
                        <Button className={'menu__link'} onClick={showTopModal} name={'sign'}>
                            УВІЙТИ
                        </Button>
                    )}
                </div>
            </div>
            <div className={`menu service-menu ${clientService ? 'service-menu--active' : ''}`}>
                <Button className="service-menu__back" onClick={handleClientClick}>
                    <div className={'arrow-back service-menu__arrow'}/>
                    НАЗАД
                </Button>
                <div className="menu__links">
                    <div className="menu__link menu__link--bold">
                        КЛІЄНТСЬКИЙ СЕРВІС
                    </div>
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
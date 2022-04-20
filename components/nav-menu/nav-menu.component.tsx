import React, {useState} from "react";
import Link from "next/link";

type navMenuProps= {
    active: {hamburger: boolean},
    hideModal: (event: React.MouseEvent<HTMLElement>) => void,
    showTopNav: (event: React.MouseEvent<HTMLElement>) => void,
}

const NavMenu: React.FC<navMenuProps> = ({active, hideModal, showTopNav}) => {
    const [clientService, setClientService] = useState(false)

    const handleClientClick = () => setClientService(!clientService)


    return (
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
                <Link href={'/'}>
                    <a className={'menu__link'} onClick={handleClientClick}>КЛИЕНТСКИЙ СЕРВИС</a>
                </Link>
                <Link href={'/vacancies'}>
                    <a className={'menu__link'}
                       onClick={hideModal}
                    >ВАКАНСИИ</a>
                </Link>
                <Link href={'/contacts'}>
                    <a className={'menu__link'} onClick={hideModal}>КОНТАКТЫ</a>
                </Link>
                <a id='sign' className={'menu__link'} onClick={
                    showTopNav}>
                    ВОЙТИ
                </a>
            </div>
        </div>
    )
}

export default NavMenu
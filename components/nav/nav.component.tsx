import React, {useState} from 'react'
import Link from "next/link";
import search from '/public/search.svg'
import bookmark from '/public/bookmark.svg'
import shoppingCart from '/public/shopping-cart.svg'
import Sidebar from "../sidebar/sidebar.component";
import NavSearch from "../nav-search/nav-search.component";
import NavShoppingCart from "../nav-shopping-cart/nav-shopping-cart.component";

const Nav: React.FC = () => {

    const [hamburgerActive, setHamburgerActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
    const [shoppingCartActive, setShoppingCartActive] = useState(false)

    return (
        <>
            <nav className={'nav'}>
                <div className="nav__header">
                    <div className="hamburger-wrapper">
                        <div className={`hamburger ${hamburgerActive ? 'hamburger--active' : ''}`}
                             onClick={() => setHamburgerActive(!hamburgerActive)}>
                            <span className="hamburger__line"/>
                            <span className="hamburger__line"/>
                            <span className="hamburger__line"/>
                        </div>
                    </div>
                    <div className="nav__title">UNAMOUR</div>
                    <div className="nav__shop-items">
                        <a onClick={() => setSearchActive(true)}>
                            <img src={search.src} className={'nav__shop-item'} style={{marginLeft: '0'}}/>
                        </a>
                        <Link href={'/'}>
                            <a>
                                <img src={bookmark.src} className={'nav__shop-item'}/>
                            </a>
                        </Link>
                        <a onClick={() => setShoppingCartActive(true)}>
                            <img src={shoppingCart.src} className={'nav__shop-item'} style={{marginRight: '0'}}/>
                        </a>
                    </div>
                </div>
                <Sidebar left={true} active={hamburgerActive} setActive={setHamburgerActive}>
                    <div className="nav__menu">
                        <div className="nav__menu-links nav__menu-links-first">
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>НОВЫЕ ПОСТУПЛЕНИЯ</a>
                            </Link>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>ОДЕЖДА И АКСЕСУАРЫ</a>
                            </Link>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>БЕСТСЕЛЛЕРЫ</a>
                            </Link>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>СПЕЦИАЛЬНАЯ ЦЕНА</a>
                            </Link>
                        </div>
                        <div
                            className={`nav__menu-links nav__menu-links-second ${hamburgerActive ? 'nav__menu-links2--active' : ''}`}>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>ИЗБРАННОЕ</a>
                            </Link>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>КЛИЕНТСКИЙ СЕРВИС</a>
                            </Link>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>ВАКАНСИИ</a>
                            </Link>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>КОНТАКТЫ</a>
                            </Link>
                            <Link href={'/'}>
                                <a className={'nav__menu-link'}>ВОЙТИ</a>
                            </Link>
                        </div>
                    </div>
                </Sidebar>
                <Sidebar left={false} active={searchActive} setActive={setSearchActive}>
                    <NavSearch/>
                </Sidebar>
                <Sidebar left={false} active={shoppingCartActive} setActive={setShoppingCartActive}>
                    <NavShoppingCart/>
                </Sidebar>
            </nav>
        </>
    )
}

export default Nav
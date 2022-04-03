import React, {useState} from 'react'
import {AiOutlineShopping} from "react-icons/ai"
import {BiSearch} from "react-icons/bi"
import {VscBookmark} from "react-icons/vsc"
import Link from "next/link";

const Nav: React.FC = () => {

    const [active, setActive] = useState(false)

    return (
        <>
            <nav className={'nav'}>
                <div className="nav__header">
                    <div className="hamburger" onClick={() => setActive(!active)}>
                        <span className="hamburger__line"/>
                        <span className="hamburger__line"/>
                        <span className="hamburger__line"/>
                    </div>
                    <div className="nav__title"/>
                    <div className="nav__shop-items">
                        <Link href={'/'}>
                            <BiSearch className={'nav__shop-item'}/>
                        </Link>
                        <Link href={'/'}>
                            <VscBookmark className={'nav__shop-item'}/>
                        </Link>
                        <Link href={'/'}>
                            <AiOutlineShopping className={'nav__shop-item'}/>
                        </Link>
                    </div>
                </div>
                <div className="sidebar nav__menu">
                    <div className="nav__menu-links1">
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
                    <div className={`nav__menu-links2 ${active? 'nav__menu-links2--active' : ''}`}>
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
            </nav>
        </>
    )
}

export default Nav
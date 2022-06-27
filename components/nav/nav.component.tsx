import React, {useEffect, useState} from 'react'
import Link from "next/link";
import search from '/public/icons/search.svg'
import bookmark from '/public/icons/bookmark.svg'
import shoppingCart from '/public/icons/shopping-cart.svg'
import Sidebar from "../sidebar/sidebar.component";
import NavSearch from "../nav-search/nav-search.component";
import NavShoppingCart from "../nav-shopping-cart/nav-shopping-cart.component";
import SignInUp from "../sign-in-up/sign-in-up.component";
import Modal from "../modal/modal.component";
import NavMenu from "../nav-menu/nav-menu.component";
import {useRouter} from "next/router";

const Nav: React.FC = () => {

    const initialModalState = {hamburger: false, search: false, shopping: false, sign: false, modal: false}

    const [active, setActive] = useState(initialModalState)

    const hideModal = (event: React.MouseEvent<HTMLElement>) => {
        setActive(initialModalState)
    }

    const toggleModal = (event: React.MouseEvent<HTMLElement>) => {
        const param = event.currentTarget.id
        setActive(prevState => ({
                ...prevState,
                modal: !prevState.modal,
                [param]: !prevState[param as keyof typeof active]
            })
        )
    }

    const hideTopNav = (param: keyof typeof active) => {
        setActive(prevState => ({
                ...prevState,
                [param]: false
            })
        )
    }

    const showTopNav = (event: React.MouseEvent<HTMLElement>) => {
        const param = event.currentTarget.id
        setActive(prevState => ({
                ...prevState,
                [param]: !prevState[param as keyof typeof active]
            })
        )
    }

    const router= useRouter()

    useEffect(() => {
        router.events.on('routeChangeComplete', hideModal)
        return () => {
        }
    }, [])

    return (
        <>
            <nav className={'nav'}>
                <div className="hamburger-wrapper">
                    <div id={'hamburger'}
                         className={`hamburger ${active.hamburger ? 'hamburger--active' : ''}`}
                         onClick={toggleModal}>
                        <span className="hamburger__line"/>
                        <span className="hamburger__line"/>
                        <span className="hamburger__line"/>
                    </div>
                </div>
                <div className="nav__header">
                    <div style={{width: '45%'}}/>
                    <Link href={'/'}>
                        <a className="nav__title">UNAMOUR</a>
                    </Link>
                    <div className="nav__shop-items">
                        <a id='search' onClick={toggleModal}>
                            <img src={search.src} className={'nav__shop-item'} alt={'shop-item'}/>
                        </a>
                        <Link href={'/favorites'}>
                            <a>
                                <img src={bookmark.src} className={'nav__shop-item'} alt={'shop-item'}/>
                            </a>
                        </Link>
                        <a id='shopping' onClick={toggleModal}>
                            <img src={shoppingCart.src} className={'nav__shop-item'} alt={'shop-item'}/>
                        </a>
                    </div>
                </div>
                <Sidebar left={true} active={active.hamburger} hideModal={hideModal}>
                    <NavMenu active={active.hamburger} hideModal={hideModal} showTopNav={showTopNav}/>
                </Sidebar>
                <Sidebar left={true} active={active.sign} top={true} hideTopNav={() =>hideTopNav('sign')}>
                    <SignInUp/>
                </Sidebar>
                <Sidebar left={false} active={active.search} hideModal={hideModal}>
                    <NavSearch/>
                </Sidebar>
                <Sidebar left={false} active={active.shopping} hideModal={hideModal}>
                    <NavShoppingCart/>
                </Sidebar>
                <Modal active={active.modal} hideModal={hideModal}/>
            </nav>
        </>
    )
}

export default Nav
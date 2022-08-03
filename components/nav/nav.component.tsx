import React from 'react'
import Link from "next/link"
import search from '/public/icons/search.svg'
import searchWhite from '/public/icons/search-white.svg'
import shoppingCart from '/public/icons/shopping-cart.svg'
import shoppingCartWhite from '/public/icons/shopping-cart-white.svg'
import bookmark from '/public/icons/bookmark.svg'
import bookmarkWhite from '/public/icons/bookmark-white.svg'
import SignInUp from "../sign-in-up/sign-in-up.component"
import useNav from "./nav.hook"
import Modal from "../common/modal/modal.component"
import NavSearch from "./nav-search/nav-search.component"
import NavMenu from "./nav-menu/nav-menu.component"
import Sidebar from "../common/sidebar/sidebar.component"
import NavShoppingCart from "./nav-cart/nav-cart.component"

const Nav: React.FC = () => {

    const {
        initialModalState, active, setActive, hideModal, toggleModal, hideTopNav, showTopNav, home, setHome
    } = useNav()

    return (
        <nav className={`nav ${home ? 'nav--home' : ''}`}>
            <div className="hamburger-wrapper">
                <div
                    id={'hamburger'}
                    className={`hamburger ${active.hamburger ? 'hamburger--active' : ''}`}
                    onClick={toggleModal}
                >
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
                        <img
                            src={home ? searchWhite.src : search.src}
                            className={'nav__shop-item'}
                            alt={'shop item'}
                        />
                    </a>
                    <Link href={'/favorites'}>
                        <a>
                            <img
                                src={home ? bookmarkWhite.src : bookmark.src}
                                className={'nav__shop-item'}
                                alt={'shop item'}
                            />
                        </a>
                    </Link>
                    <a id='shopping' onClick={toggleModal}>
                        <img
                            src={home ? shoppingCartWhite.src : shoppingCart.src}
                            className={'nav__shop-item'}
                            alt={'shop item'}
                        />
                    </a>
                </div>
            </div>
            <Sidebar left={true} active={active.hamburger} hideModal={hideModal}>
                <NavMenu active={active.hamburger} hideModal={hideModal} showTopNav={showTopNav}/>
            </Sidebar>
            <Sidebar left={true} active={active.sign} top={true} hideTopNav={() => hideTopNav('sign')}>
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
    )
}

export default Nav
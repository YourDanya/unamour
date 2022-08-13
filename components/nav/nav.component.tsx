import React from 'react'
import SignInUp from "../sign-in-up/sign-in-up.component"
import useNav from "./nav.hook"
import Modal from "../common/modal/modal.component"
import NavSearch from "./nav-search/nav-search.component"
import NavMenu from "./nav-menu/nav-menu.component"
import Sidebar from "../common/sidebar/sidebar.component"
import NavCart from "./nav-cart/nav-cart.component"
import NavHeader from "./header/header.component"
import Hamburger from "./hamburger/hamburger.component"

const Nav: React.FC = () => {

    const {modalState, showModal, hideModal, home} = useNav()

    return (
        <nav className={`nav ${home ? 'nav--home' : ''}`}>
            <Hamburger hamburger={modalState.hamburger} showModal={showModal} hideModal={hideModal}/>
            <NavHeader home={home} showModal={showModal}/>
            <Sidebar left active={modalState.hamburger}>
                <NavMenu/>
            </Sidebar>
            <Sidebar left active={modalState.sign}top>
                <SignInUp/>
            </Sidebar>
            <Sidebar active={modalState.search} hideModal={hideModal}>
                <NavSearch/>
            </Sidebar>
            <Sidebar active={modalState.shopping} hideModal={hideModal}>
                <NavCart/>
            </Sidebar>
            <Modal active={modalState.modal} hideModal={hideModal}/>
        </nav>
    )
}

export default Nav
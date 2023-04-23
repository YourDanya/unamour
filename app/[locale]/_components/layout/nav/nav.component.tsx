'use client'

import {FC} from 'react'
import Hamburger from 'app/[locale]/_components/layout/nav/hamburger/hamburger.component'
import NavSearch from 'app/[locale]/_components/layout/nav/nav-search/nav-search.component'
import NavHeader from 'app/[locale]/_components/layout/nav/header/header.component'
import useNav from 'app/[locale]/_components/layout/nav/nav.hook'
import NavCart from 'app/[locale]/_components/layout/nav/nav-cart/nav-cart.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import NavMenu from 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.component'
import Sidebar from 'app/[locale]/_common/components/sidebar/sidebar.component'
import NavAuth from 'app/[locale]/_components/layout/nav/nav-auth/nav-auth.component'
import 'app/[locale]/_components/layout/nav/nav.styles.sass'

const Nav: FC = () => {
    const {modalState, showModal, hideModal, home, onHideTopModal} = useNav()

    return (
        <nav className={`nav ${home ? 'nav--home' : ''}`}>
            <Hamburger hamburger={modalState.hamburger} showModal={showModal} hideModal={hideModal}/>
            <NavHeader home={home} showModal={showModal}/>
            <Sidebar left active={modalState.hamburger}>
                <NavMenu showTopModal={showModal}/>
            </Sidebar>
            <Sidebar left active={modalState.sign} hideTopModal={onHideTopModal} name={'sign'}>
                <NavAuth/>
            </Sidebar>
            <Sidebar active={modalState.search} hideModal={hideModal}>
                <NavSearch/>
            </Sidebar>
            <Sidebar active={modalState.shopping} hideModal={hideModal}>
                <NavCart modal={modalState.shopping} showModal={showModal} hideModal={hideModal}/>
            </Sidebar>
            <Modal active={modalState.modal} hideModal={hideModal}/>
        </nav>
    )
}

export default Nav
import {FC} from 'react'
import Hamburger from 'components/nav/hamburger/hamburger.component'
import NavSearch from 'components/nav/nav-search/nav-search.component'
import NavHeader from 'components/nav/header/header.component'
import useNav from 'components/nav/nav.hook'
import NavCart from 'components/nav/nav-cart/nav-cart.component'
import Modal from 'components/common/modal/modal.component'
import NavMenu from 'components/nav/nav-menu/nav-menu.component'
import Sidebar from 'components/common/sidebar/sidebar.component'
import NavAuth from 'components/nav-auth/nav-auth.component'

const Nav: FC = () => {
    const {modalState, showModal, hideModal, home, showTopModal, hideTopModal} = useNav()

    return (
        <nav className={`nav ${home ? 'nav--home' : ''}`}>
            <Hamburger hamburger={modalState.hamburger} showModal={showModal} hideModal={hideModal}/>
            <NavHeader home={home} showModal={showModal}/>
            <Sidebar left active={modalState.hamburger}>
                <NavMenu showTopModal={showTopModal}/>
            </Sidebar>
            <Sidebar left active={modalState.sign} hideTopModal={hideTopModal} name={'sign'}>
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
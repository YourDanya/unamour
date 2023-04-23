import Button from 'app/[locale]/_common/components/button/button.component'
import ProfileMenu from 'app/[locale]/profile/_components/_layout/profile-menu/profile-menu.component'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import {FC} from 'react'
import {LayoutProps} from 'app/[locale]/profile/_components/_layout/layout.types'
import useLayout from 'app/[locale]/profile/_components/_layout/layout.hook'

const Layout: FC<LayoutProps> = (props) => {
    const {children} = props
    const {user, transl, content, modalState, hideModal, showModal, onLogout, logout} = useLayout()

    return (
        <>
            <div className={`profile ${!user ? 'profile--hidden' : ''}`}>
                <div className={'profile__top'}>
                    <div className={'profile__sign-out'}>
                        <Button className={'profile__sign-out-btn'} onClick={onLogout} loading={logout.loading}>
                            {transl.logout}
                        </Button>
                    </div>
                    <div className={'profile__name'}>
                        {transl.greeting} {user?.name}!
                    </div>
                    <ProfileMenu
                        className={'profile__menu--hide'}
                        menu={content.menu}
                        translMenu={transl.menu}
                        user={user}
                    />
                    <Button className={'profile__menu-btn'} onClick={showModal} name={'menu'}>
                        {transl.profileMenu}
                    </Button>
                </div>
                <ModalContent active={modalState.menu} hideModal={hideModal} className={'profile__menu-modal'}>
                    <ProfileMenu
                        className={'profile__menu--modal'}
                        menu={content.menu}
                        translMenu={transl.menu}
                        user={user}
                    />
                </ModalContent>
                <Modal active={modalState.modal} hideModal={hideModal}/>
                <div className={'profile__page'}>
                    {children}
                </div>
            </div>
            {!user && (<Spinner className={`profile-spinner`}/>)}
        </>
    )
}

export default Layout

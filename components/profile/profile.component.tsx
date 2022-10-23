import React, {ReactNode} from 'react'
import Button from 'components/common/button/button.component'
import ProfileMenu from 'components/profile/profile-menu/profile-menu.component'
import ModalContent from 'components/common/modal-content/modal-content.component'
import Modal from 'components/common/modal/modal.component'
import useProfile from 'components/profile/profile.hook'
import {ProfileProps} from 'components/profile/profile.types'

const Profile: React.FC<ProfileProps> = (props) => {

    const {children} = props
    const {user, transl, content, modalState, hideModal, showModal, handleLogout, logout} = useProfile()

    return user &&
        (<div className={'profile'}>
            <div className={'profile__top'}>
                <div className={'profile__sign-out'}>
                    <Button className={'profile__sign-out-btn'} onClick={handleLogout} loading={logout.loading}>
                        {transl.logout}
                    </Button>
                </div>
                <div className={'profile__name'}>
                    {transl.greeting} {user.name}!
                </div>
                <ProfileMenu className={'profile__menu--hide'} menu={content.menu} translMenu={transl.menu}/>
                <Button className={'profile__menu-btn'} onClick={showModal} name={'menu'}>
                    {transl.profileMenu}
                </Button>
            </div>
            <ModalContent active={modalState.menu} hideModal={hideModal} className={'profile__menu-modal'}>
                <ProfileMenu className={'profile__menu--modal'} menu={content.menu} translMenu={transl.menu}/>
            </ModalContent>
            <Modal active={modalState.modal} hideModal={hideModal}/>
            <div className={'profile__page'}>
                {children}
            </div>
        </div>)
}

export const getProfileLayout = (page: ReactNode) => {
    return (
        <Profile>
            {page}
        </Profile>
    )
}

export default Profile
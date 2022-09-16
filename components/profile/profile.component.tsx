import React, {ReactNode} from "react"
import useProfile from "./profile.hook"
import Button from "../common/button/button.component"
import ModalContent from "../common/modal-content/modal-content.component"
import Modal from "../common/modal/modal.component"
import ProfileMenu from "./profile-menu/profile-menu.component"

type profileProps = {}

const Profile: React.FC<profileProps> = (props) => {

    const {children} = props
    const {user, translation, content, modalState, hideModal, showModal} = useProfile()

    return user &&
        (<div className={'profile'}>
            <div className={'profile__top'}>
                <div className={'profile__sign-out'}>
                    <Button className={'profile__sign-out-btn'} onClick={() => {}}>
                        {translation.signOut}
                    </Button>
                </div>
                <div className={'profile__name'}>
                    {translation.greeting} {user.name}!
                </div>
                <ProfileMenu className={'profile__menu--hide'} menu={content.menu} translMenu={translation.menu}/>
                <Button className={'profile__menu-btn'} onClick={showModal} name={'menu'}>
                    {translation.profileMenu}
                </Button>
            </div>
            <ModalContent active={modalState.menu} hideModal={hideModal} className={'profile__menu-modal'}>
                <ProfileMenu className={'profile__menu--modal'} menu={content.menu} translMenu={translation.menu}/>
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
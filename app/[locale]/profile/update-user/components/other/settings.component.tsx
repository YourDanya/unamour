import {FC} from 'react'
import lock from 'public/icons/lock.svg'
import trashCan from 'public/icons/trash-can.svg'
import email from 'public/icons/email.svg'
import React from 'react'
import useUpdateUserSettings from 'app/[locale]/profile/update-user/components/other/settings.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import UpdatePass from 'app/[locale]/profile/update-user/components/other/update-pass/update-pass.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import DeleteUser from 'app/[locale]/profile/update-user/components/other/delete-user/delete-user.component'
import UpdateEmail from 'app/[locale]/profile/update-user/components/other/update-email/update-email.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'

const UpdateUserSettings: FC = () => {
    const {transl, modalState, showModal, hideModal} = useUpdateUserSettings()

    return (
        <div className={'update-user__settings'}>
            <div className={'update-user__change-pass'}>
                <div className={'update-user__setting-title'}>
                    {transl.password}
                </div>
                <Button className={'update-user__setting-btn'} name={'updatePass'} onClick={showModal}>
                    <img className={'update-user__setting-img'} src={lock.src}/>
                    <div className={'update-user__setting-text'}>
                        {transl.changePassword}
                    </div>
                </Button>
            </div>
            <div className={'update-user__other-settings'}>
                <div className={'update-user__setting-title'}>
                    {transl.otherSettings}
                </div>
                <Button
                    className={'update-user__setting-btn update-user__setting-btn--email'}
                    name={'updateEmail'}
                    onClick={showModal}
                >
                    <img className={'update-user__setting-img'} src={email.src}/>
                    <div className={'update-user__setting-text'}>
                        {transl.updateEmail}
                    </div>
                </Button>
                <Button
                    className={'update-user__setting-btn'}
                    name={'deleteUser'}
                    onClick={showModal}
                >
                    <img className={'update-user__setting-img'} src={trashCan.src}/>
                    <div className={'update-user__setting-text'}>
                        {transl.delete}
                    </div>
                </Button>
            </div>
            <ModalContent
                className={'update-user__modal update-user__modal--pass'}
                active={modalState.updatePass}
                hideModal={hideModal}
            >
                <UpdatePass hideModal={hideModal}/>
            </ModalContent>
            <ModalContent
                className={'update-user__modal update-user__modal--email'}
                active={modalState.updateEmail}
                hideModal={hideModal}
            >
                <UpdateEmail hideModal={hideModal}/>
            </ModalContent>
            <ModalContent
                className={'update-user__modal update-user__modal--delete'}
                active={modalState.deleteUser}
                hideModal={hideModal}
            >
                <DeleteUser hideModal={hideModal}/>
            </ModalContent>
            <Modal active={modalState.modal} hideModal={hideModal}/>
        </div>
    )
}

export default UpdateUserSettings
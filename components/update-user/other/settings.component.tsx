import {FC} from 'react'
import Button from 'components/common/button/button.component'
import lock from 'public/icons/lock.svg'
import trashCan from 'public/icons/trash-can.svg'
import email from 'public/icons/email.svg'
import React from 'react'
import Modal from 'components/common/modal/modal.component'
import ModalContent from 'components/common/modal-content/modal-content.component'
import UpdatePass from 'components/update-user/other/update-pass/update-pass.component'
import DeleteUser from 'components/update-user/other/delete-user/delete-user.component'
import UpdateEmail from 'components/update-user/other/update-email/update-email.component'
import useUpdateUserSettings from 'components/update-user/other/settings.hook'

const UpdateUserSettings: FC = () => {
    const {transl, modalState, showModal, hideModal} = useUpdateUserSettings()

    return (
        <div className={'update-input-user__settings'}>
            <div className={'update-input-user__change-pass'}>
                <div className={'update-input-user__setting-title'}>
                    {transl.password}
                </div>
                <Button className={'update-input-user__setting-btn'} name={'updatePass'} onClick={showModal}>
                    <img className={'update-input-user__setting-img'} src={lock.src}/>
                    <div className={'update-input-user__setting-text'}>
                        {transl.changePassword}
                    </div>
                </Button>
            </div>
            <div className={'update-input-user__other-settings'}>
                <div className={'update-input-user__setting-title'}>
                    {transl.otherSettings}
                </div>
                <Button
                    className={'update-input-user__setting-btn update-input-user__setting-btn--email'}
                    name={'updateEmail'}
                    onClick={showModal}
                >
                    <img className={'update-input-user__setting-img'} src={email.src}/>
                    <div className={'update-input-user__setting-text'}>
                        {transl.updateEmail}
                    </div>
                </Button>
                <Button
                    className={'update-input-user__setting-btn'}
                    name={'deleteUser'}
                    onClick={showModal}
                >
                    <img className={'update-input-user__setting-img'} src={trashCan.src}/>
                    <div className={'update-input-user__setting-text'}>
                        {transl.delete}
                    </div>
                </Button>
            </div>
            <ModalContent
                className={'update-input-user__modal update-input-user__modal--pass'}
                active={modalState.updatePass}
                hideModal={hideModal}
            >
                <UpdatePass hideModal={hideModal}/>
            </ModalContent>
            <ModalContent
                className={'update-input-user__modal update-input-user__modal--email'}
                active={modalState.updateEmail}
                hideModal={hideModal}
            >
                <UpdateEmail hideModal={hideModal}/>
            </ModalContent>
            <ModalContent
                className={'update-input-user__modal update-input-user__modal--delete'}
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
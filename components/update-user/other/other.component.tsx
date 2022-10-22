import {FC} from 'react'
import useUpdateUserOther from 'components/update-user/other/other.hook'
import Button from 'components/common/button/button.component'
import lock from 'public/icons/lock.svg'
import trashCan from 'public/icons/trash-can.svg'
import React from 'react'
import Modal from 'components/common/modal/modal.component'
import ModalContent from 'components/common/modal-content/modal-content.component'
import UpdatePass from 'components/update-user/other/update-pass/update-pass.component'
import DeleteUser from 'components/update-user/other/delete-user/delete-user.component'

const UpdateUserOther: FC = () => {

    const {transl, modalState, showModal, hideModal} = useUpdateUserOther()

    return (
        <div className={'update-user__other'}>
            <div className={'update-user__change-pass'}>
                <div className={'update-user__change-pass-title'}>
                    {transl.password}
                </div>
                <Button className={'update-user__change-pass-btn'} name={'updatePass'} onClick={showModal}>
                    <img className={'update-user__change-pass-img'} src={lock.src}/>
                    <div className={'update-user__change-pass-text'}>
                        {transl.changePassword}
                    </div>
                </Button>
            </div>
            <div className={'update-user__delete'}>
                <div className={'update-user__delete-title'}>
                    {transl.otherSettings}
                </div>
                <Button className={'update-user__delete-btn'} name={'deleteUser'} onClick={showModal}>
                    <img className={'update-user__delete-img'} src={trashCan.src}/>
                    <div className={'update-user__delete-text'}>
                        {transl.delete}
                    </div>
                </Button>
            </div>
            <ModalContent
                className={'update-user__modal'}
                active={modalState.updatePass}
                hideModal={hideModal}
            >
                <UpdatePass hideModal={hideModal}/>
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

export default UpdateUserOther
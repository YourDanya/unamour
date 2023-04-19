import useItemActions from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import ItemMessage from 'app/[locale]/admin/items/_components/item-form/item-actions/item-message/item-message.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import {ItemActionsProps} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import {FC} from 'react'

const ItemActions: FC<ItemActionsProps> = (props) => {
    const {deleted} = props

    const {
        transl, onSave, onDelete, messages, onClose, onTimerExpiration, actions, loading, modalState, onCloseModal,
        closeModal, onDeleteConfirm
    } = useItemActions(props)

    return (
        <>
            {!deleted && (
                <>
                    <Button
                        className={'item-form__button item-form__button--delete'}
                        onClick={onDelete}
                        loading={actions.deleteItem.loading}
                    >
                        {transl.delete}
                    </Button>
                    <Button
                        className={'item-form__button item-form__button--save'}
                        onClick={onSave}
                        loading={loading}
                    >
                        {transl.save}
                    </Button>
                </>
            )}
            <div className="item-form__messages">
                {getEntries(messages).map(([messageName, messageValue]) => (
                    <ItemMessage
                        key={messageName}
                        name={messageName}
                        onClose={onClose}
                        message={messageValue.text}
                        onTimerExpiration={messageName !== 'client' ? onTimerExpiration : undefined}
                        isError={messageValue.isError}
                        isSuccess={messageValue.isSuccess}
                    />
                ))}
            </div>
            <ModalContent active={modalState.deleteItem} hideModal={closeModal} className={'item-form__modal'}>
                <div className={'item-form__modal-content'}>
                    <div className={'item-form__modal-title'}>
                        {transl.sureDeleteItem}
                    </div>
                    <Button onClick={onDeleteConfirm} className={'item-form__button item-form__modal-button'}>
                        {transl.yes}
                    </Button>
                    <Button onClick={onCloseModal} className={'item-form__button item-form__modal-button'}>
                        {transl.no}
                    </Button>
                </div>
            </ModalContent>
            <Modal active={modalState.modal} hideModal={onCloseModal}/>
        </>
    )
}

export default ItemActions
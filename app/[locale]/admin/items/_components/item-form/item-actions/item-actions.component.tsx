import useItemActions from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.hook'
import Button from 'app/_common/components/button/button.component'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import ItemMessage
    from 'app/[locale]/admin/items/_components/item-form/item-actions/item-message/item-message.component'
import {ItemActionsProps} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import Modal from 'app/_common/components/modal/modal.component'
import {FC} from 'react'

const ItemActions: FC<ItemActionsProps> = (props) => {
    const {} = props

    const {
        transl, onSave, messages, onClose, onTimerExpiration , loading, modalState, onCloseModal,
    } = useItemActions(props)

    return (
        <>
            {(
                <Button
                    className={'item-form__button item-form__button--save'}
                    onClick={onSave}
                    loading={loading}
                >
                    {transl.save}
                </Button>
            )}
            <div className="item-form__messages">
                {getEntries(messages).map(([messageName, messageValue]) => (
                    <ItemMessage
                        key={messageName as string}
                        name={messageName}
                        onClose={onClose}
                        message={messageValue.text}
                        onTimerExpiration={messageName !== 'client' ? onTimerExpiration : undefined}
                        isError={messageValue.isError}
                        isSuccess={messageValue.isSuccess}
                    />
                ))}
            </div>
            <Modal active={modalState.modal} hideModal={onCloseModal}/>
        </>
    )
}

export default ItemActions
import Button from 'app/_common/components/button/button.component'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import Modal from 'app/_common/components/modal/modal.component'
import {FC} from 'react'
import {ItemActionsProps} from 'app/[locale]/admin/items/_components/item-form/actions/item-actions.types'
import useItemActions from 'app/[locale]/admin/items/_components/item-form/actions/item-actions.hook'
import Message from 'app/[locale]/admin/items/_components/item-form/actions/message/message.component'

const ItemActions: FC<ItemActionsProps> = (props) => {
    const {} = props

    const {
        transl, onSave, messages, onClose, onTimerExpiration , loading, modalState, onCloseModal,
    } = useItemActions(props)

    return (
        <>
            {(

            )}
            <div className="item-form__messages">
                {getEntries(messages).map(([messageName, messageValue]) => (
                    <Message
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
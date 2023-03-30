import useItemButtons from 'components/admin/items/item-form/item-buttons/item-buttons.hook'
import {FC} from 'react'
import Button from 'components/common/button/button.component'
import {ItemButtonsProps} from 'components/admin/items/item-form/item-buttons/item-buttons.types'
import ItemMessage from 'components/admin/items/item-form/item-buttons/item-message/item-message.component'

const ItemButtons: FC<ItemButtonsProps> = (props) => {
    const {deleted} = props

    const {
        transl, onSave, onDelete, isMessage, onClose, onTimerExpiration, actions, loading, errorCount
    } = useItemButtons(props)

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
                {Object.entries(isMessage).map(([messageName, isMessage]) => (
                    <ItemMessage
                        key={messageName}
                        isMessage={isMessage}
                        name={messageName}
                        success={messageName !== 'client' && actions[messageName]?.success ? transl.success[messageName] : ''}
                        error={messageName !== 'client' && actions[messageName]?.success ? transl.errors[messageName] : errorCount !== 0 ? transl.clientError(errorCount) : ''}
                        onClose={onClose}
                        onTimerExpiration={onTimerExpiration}
                    />
                ))}
            </div>
        </>
    )
}

export default ItemButtons
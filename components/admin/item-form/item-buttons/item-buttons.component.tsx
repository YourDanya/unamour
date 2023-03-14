import useItemButtons from 'components/admin/item-form/item-buttons/item-buttons.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import {FC} from 'react'
import Button from 'components/common/button/button.component'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'
import closeRed from 'public/icons/close-red.svg'
import ItemMessage from 'components/admin/item-form/item-buttons/item-message/item-message.component'

const ItemButtons: FC<ItemButtonsProps> = (props) => {
    const {deleted} = props

    const {
        transl, onSave, onDelete, isMessage, onClose, onTimerExpiration, actionsList, actions, loading
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
                {actionsList.map(([actionName, actionValue]) => (
                    <ItemMessage
                        key={actionName}
                        isMessage={isMessage.deleteItemImages}
                        field={actionName}
                        success={actionValue.success ? transl.success[actionName] : ''}
                        error={actionValue.error ? transl.errors[actionName] : '' }
                        onClose={onClose}
                        onTimerExpiration={onTimerExpiration}
                    />
                ))}
                {isMessage.client && (
                    <FormMessage
                        className={'item-form__message'}
                        error={0 ? transl.clientError(0) : ''}
                    >
                        <Button className={'item-form__message-close'} onClick={onClose} data-value={'client'}>
                            <img className={'item-form__message-close-img'} src={closeRed.src} alt={'close'}/>
                        </Button>
                    </FormMessage>
                )}
            </div>
        </>
    )
}

export default ItemButtons
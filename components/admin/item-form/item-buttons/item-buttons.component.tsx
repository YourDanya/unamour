import useItemButtons from 'components/admin/item-form/item-buttons/item-buttons.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import {FC, memo} from 'react'
import Button from 'components/common/button/button.component'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'
import closeRed from 'public/icons/close-red.svg'
import ItemMessage from 'components/admin/item-form/item-buttons/item-message/item-message.component'

const ItemButtons: FC<ItemButtonsProps> = (props) => {
    const {updateItemState, transl, onSave, onDelete, isMessage, onClose, onTimerExpiration, createItemState,
    deleteItemState} = useItemButtons(props)
    
    return (
        <>
            <Button
                className={'item-form__button item-form__button--delete'}
                onClick={onDelete}
                loading={deleteItemState.loading}
            >
                {transl.delete}
            </Button>
            <Button
                className={'item-form__button item-form__button--save'}
                onClick={onSave}
                loading={updateItemState.loading || createItemState.loading}
            >
                {transl.save}
            </Button>
            {/*<Timer*/}
            {/*    clearInitTimer={onSuccessTimerExpiration}*/}
            {/*    initTimer={updateItemState.success || createItemState.success ? 5000 : undefined}*/}
            {/*>*/}
            {/*    {(timer, _) => isMessage.server && (*/}
            {/*    */}
            {/*    )}*/}
            {/*</Timer>*/}
            <ItemMessage
                isMessage={isMessage.updateItem}
                field={'updateItem'}
                success={updateItemState.success}
                error={updateItemState.error.server}
                onClose={onClose}
                onTimerExpiration={onTimerExpiration}
            />
            <ItemMessage
                isMessage={isMessage.createItem}
                field={'createItem'}
                success={createItemState.success}
                error={createItemState.error.server}
                onClose={onClose}
                onTimerExpiration={onTimerExpiration}
            />
            {/*<ItemMessage*/}
            {/*    success={createItemState.success}*/}
            {/*    error={createItemState.error}*/}
            {/*    onClose={onClose}*/}
            {/*    onTimerExpiration={onTimerExpiration}*/}
            {/*/>*/}
            {isMessage.client && (
                <FormMessage
                    className={'item-form__message'}
                    error={updateItemState.error?.client || createItemState.error.client}
                >
                    <Button className={'item-form__message-close'} onClick={onClose} data-value={'client'}>
                        <img className={'item-form__message-close-img'} src={closeRed.src} alt={'close'}/>
                    </Button>
                </FormMessage>
            )}
        </>
    )
}

export default memo(ItemButtons)
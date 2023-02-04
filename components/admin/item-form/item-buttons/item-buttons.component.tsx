import useItemButtons from 'components/admin/item-form/item-buttons/item-buttons.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import {FC, memo} from 'react'
import Button from 'components/common/button/button.component'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'
import closeRed from 'public/icons/close-red.svg'
import closeGreen from 'public/icons/close-green.svg'
import Timer from 'components/common/timer/timer.component'

const ItemButtons: FC<ItemButtonsProps> = (props) => {
    const {updateItemState, transl, onSave, onDelete, isMessage, onClose, onSuccessTimerExpiration, count, onIncrement} = useItemButtons(props)
    
    return (
        <>
            <Button
                className={'item-form__button item-form__button--delete'}
                onClick={onDelete}
            >
                {transl.delete}
            </Button>
            <Button
                className={'item-form__button item-form__button--save'}
                onClick={onSave}
                loading={updateItemState.loading}
            >
                {transl.save}
            </Button>
            <Timer
                clearInitTimer={onSuccessTimerExpiration}
                initTimer={updateItemState.success? 5000 : undefined}
            >
                {(timer, _) => isMessage.server && (
                    <FormMessage
                        className={'item-form__message'}
                        success={updateItemState.success && `${updateItemState.success} ${timer}`}
                        error={updateItemState.error?.server}
                    >
                        {updateItemState.success && (
                            <Button className={'item-form__message-close'} onClick={onClose} data-value={'server'}>
                                <img className={'item-form__message-close-img'} src={closeGreen.src} alt={'close'}/>
                            </Button>
                        )}
                        {updateItemState.error.server && (
                            <Button className={'item-form__message-close'} onClick={onClose} data-value={'server'}>
                                <img className={'item-form__message-close-img'} src={closeRed.src} alt={'close'}/>
                            </Button>
                        )}
                    </FormMessage>
                )}
            </Timer>
            {isMessage.client && (
                <FormMessage
                    className={'item-form__message'}
                    error={updateItemState.error?.client}
                >
                    <Button className={'item-form__message-close'} onClick={onClose} data-value={'client'}>
                        <img className={'item-form__message-close-img'} src={closeRed.src} alt={'close'}/>
                    </Button>
                </FormMessage>
            )}
            <Button className='item-form__button' onClick={onIncrement}>
                {count}
            </Button>
        </>
    )
}

export default memo(ItemButtons)
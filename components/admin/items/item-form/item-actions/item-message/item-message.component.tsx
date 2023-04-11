import Button from 'components/common/button/button.component'
import closeGreen from 'public/icons/close-green.svg'
import closeRed from 'public/icons/close-red.svg'
import FormMessage from 'components/common/form-message/form-message.component'
import useItemMessage from 'components/admin/items/item-form/item-actions/item-message/item-message.hook'
import {FC} from 'react'
import {ItemMessageProps} from 'components/admin/items/item-form/item-actions/item-message/item-message.types'

const ItemMessage: FC<ItemMessageProps> = (props) => {
    const {onClose, name, message, isError, isSuccess} = props
    const {timer} = useItemMessage(props)

    return (
        <>
            {message && (
                <FormMessage
                    className="item-form__message"
                    success={isSuccess ? `${message} ${timer}` : ''}
                    error={isError ? `${message}` : ''}
                >
                    {isSuccess && (
                        <Button className={'item-form__message-close'} onClick={onClose} data-value={name}>
                            <img className={'item-form__message-close-img'} src={closeGreen.src} alt={'close'}/>
                        </Button>
                    )}
                    {isError && (
                        <Button className={'item-form__message-close'} onClick={onClose} data-value={name}>
                            <img className={'item-form__message-close-img'} src={closeRed.src} alt={'close'}/>
                        </Button>
                    )}
                </FormMessage>
            )}
        </>
    )
}

export default ItemMessage


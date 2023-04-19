import closeGreen from 'public/icons/close-green.svg'
import closeRed from 'public/icons/close-red.svg'
import {ItemMessageProps} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-message/item-message.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import useItemMessage from 'app/[locale]/admin/items/_components/item-form/item-actions/item-message/item-message.hook'
import {FC} from 'react'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'

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


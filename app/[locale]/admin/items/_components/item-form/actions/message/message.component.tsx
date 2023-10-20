import closeGreen from 'public/icons/close-green.svg'
import closeRed from 'public/icons/close-red.svg'
import {FC} from 'react'
import FormMessage from 'app/_common/components/form-message/form-message.component'
import useMessage from 'app/[locale]/admin/items/_components/item-form/actions/message/message.hook'
import {MessageProps} from 'app/[locale]/admin/items/_components/item-form/actions/message/message.types'
import Button from 'app/_common/components/button/button.component'

const Message: FC<MessageProps> = (props) => {
    const {onClose, name, message, isError, isSuccess} = props
    const {timer} = useMessage(props)

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

export default Message


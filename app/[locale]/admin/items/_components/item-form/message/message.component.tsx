import closeGreen from 'public/icons/close-green.svg'
import closeRed from 'public/icons/close-red.svg'
import {FC} from 'react'
import FormMessage from 'app/_common/components/form-message/form-message.component'
import useMessage from 'app/[locale]/admin/items/_components/item-form/message/message.hook'
import {MessageProps} from 'app/[locale]/admin/items/_components/item-form/message/message.types'
import Button from 'app/_common/components/button/button.component'

const Message: FC<MessageProps> = (props) => {
    const { name, success, error} = props
    const {onClose} = useMessage(props)

    return (
        <div className={`admin-item-form-message 
        ${error ? 'admin-item-form-message--error' : ''} 
        ${success ? 'admin-item-form-message--success' : ''} 
        form`}
        >
            <FormMessage
                className="form__message"
                success={success}
                error={error}
            />
            {error || success && (
                <Button
                    className={'form__close'}
                    onClick={onClose}
                    data-value={name}
                >
                    <img
                        className={'form__close-img'}
                        src={error? closeRed.src : closeGreen.src}
                        alt={'close'}
                    />
                </Button>
            )}
        </div>
    )
}
export default Message


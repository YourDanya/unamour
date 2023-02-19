import Button from 'components/common/button/button.component'
import closeGreen from 'public/icons/close-green.svg'
import closeRed from 'public/icons/close-red.svg'
import FormMessage from 'components/common/form-message/form-message.component'
import useItemMessage from 'components/admin/item-form/item-buttons/item-message/item-message.hook'
import {FC} from 'react'
import {ItemMessageProps} from 'components/admin/item-form/item-buttons/item-message/item-message.types'

const ItemMessage: FC<ItemMessageProps> = (props) => {
    const {success, error, onClose, isMessage, field} = props
    const {timer} = useItemMessage(props)
    
    return (<>
        {isMessage && (
            <FormMessage
                className='item-form__message'
                success={success && `${success} ${timer}`}
                error={error}
            >
                {success && (
                    <Button className={'item-form__message-close'} onClick={onClose} data-value={field}>
                        <img className={'item-form__message-close-img'} src={closeGreen.src} alt={'close'}/>
                    </Button>
                )}
                {error && (
                    <Button className={'item-form__message-close'} onClick={onClose} data-value={field}>
                        <img className={'item-form__message-close-img'} src={closeRed.src} alt={'close'}/>
                    </Button>
                )}
            </FormMessage>
        )}
    </>)
}

export default ItemMessage


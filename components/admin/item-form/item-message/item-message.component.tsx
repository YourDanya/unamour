import useItemMessage from 'components/admin/item-form/item-message/item-message.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import {FC} from 'react'

const ItemMessage: FC<any> = () => {
    const {success, error} = useItemMessage()

    return (
        <FormMessage className={'item-form__message'} success={success} error={error}/>
    )
}

export default ItemMessage
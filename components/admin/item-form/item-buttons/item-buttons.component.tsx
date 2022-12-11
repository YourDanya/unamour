import useItemButtons from 'components/admin/item-form/item-buttons/item-buttons.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import {FC} from 'react'
import Button from 'components/common/button/button.component'
import React from 'react'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'

const ItemButtons: FC<ItemButtonsProps> = (props) => {
    const {updateItemState, transl, onSave, onDelete} = useItemButtons(props)

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
            <FormMessage
                className={'item-form__message'}
                success={updateItemState.success}
                error={updateItemState.error?.server}
            />
            <FormMessage
                className={'item-form__message'}
                error={updateItemState.error?.client}
            />
        </>
    )
}

export default ItemButtons
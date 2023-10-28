'use client'

import {FC} from 'react'
import useItemForm from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import Common from 'app/[locale]/admin/items/_components/item-form/common/common.component'
import Translations from 'app/[locale]/admin/items/_components/item-form/translations/translations.component'
import {ItemFormProps} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import Message from 'app/[locale]/admin/items/_components/item-form/message/message.component'
import Modal from 'app/_common/components/modal/modal.component'
import Variants from 'app/[locale]/admin/items/_components/item-form/variants/variants.component'
import Button from 'app/_common/components/button/button.component'

const ItemForm: FC<ItemFormProps> = (props) => {
    const {itemIndex} = props.formValue
    const state = useItemForm(props)
    const {transl} = state

    return (
        <form className={`admin-item-form form ${false ? 'item-form--deleted' : ''}`}>
            <div className={'form__title'}>
                {transl.item} №{itemIndex + 1}
            </div>
            <Common {...state}/>
            <Translations {...state}/>
            <Variants {...state}/>
            <Buttons {...state}/>
            <Messages {...state}/>
        </form>
    )
}
export default ItemForm

const Buttons = (state: ItemFormState) => {
    const {onSave, transl, loading, onBack} = state

    return (
        <div className={'admin-item-form-block admin-item-form-buttons form'}>
            <Button
                className={'form__button form__button--save'}
                onClick={onBack}
            >
                {transl.back}
            </Button>
            <Button
                className={'form__button form__button--save'}
                onClick={onSave}
                loading={loading}
            >
                {transl.save}
            </Button>
        </div>
    )
}

const Messages = (state: ItemFormState) => {
    const {messages, onClose, onTimerExpiration} = state

    return (
        <div className="admin-item-form-messages form">
            {getEntries(messages).map(([messageName, messageValue]) => (
                <Message
                    key={messageName as string}
                    name={messageName}
                    onClose={onClose}
                    onTimerExpiration={messageName !== 'client' ? onTimerExpiration : undefined}
                    error={messageValue.error}
                    success={messageValue.success}
                />
            ))}
        </div>
    )
}
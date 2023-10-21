import {MessageName} from 'app/[locale]/admin/items/_components/item-form/item-form.types'

export type MessageProps = {
    success?: string,
    error?: string,
    onClose: (name: MessageName) => void,
    onTimerExpiration?: (field: MessageName) => void
    name: MessageName,
}
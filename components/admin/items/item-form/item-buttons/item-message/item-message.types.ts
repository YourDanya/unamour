import {MouseAction} from 'types/types'
import {ItemButtonsActionName} from 'components/admin/items/item-form/item-buttons/item-buttons.types'

export type ItemMessageProps = {
    success: string | null,
    error: string | null,
    onClose: MouseAction,
    onTimerExpiration: (field: ItemButtonsActionName) => void
    field: ItemButtonsActionName,
    isMessage: boolean
}
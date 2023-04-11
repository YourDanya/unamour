import {MouseAction} from 'types/types'
import {ItemActionName} from 'components/admin/items/item-form/item-actions/item-actions.types'

export type ItemMessageProps = {
    isSuccess: boolean | undefined,
    isError: boolean | undefined,
    onClose: MouseAction,
    onTimerExpiration: ((field: ItemActionName) => void) | undefined
    name: ItemActionName | 'client',
    message: string
}
import {ItemActionName} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.types'
import {MouseAction} from 'app/[locale]/_common/types/types'

export type ItemMessageProps = {
    isSuccess: boolean | undefined,
    isError: boolean | undefined,
    onClose: MouseAction,
    onTimerExpiration: ((field: ItemActionName) => void) | undefined
    name: ItemActionName | 'client',
    message: string
}
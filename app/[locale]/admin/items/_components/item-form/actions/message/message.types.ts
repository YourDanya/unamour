import {MouseAction} from 'app/_common/types/types'
import {ItemActionName} from 'app/[locale]/admin/items/_components/item-form/actions/item-actions.types'

export type MessageProps = {
    isSuccess: boolean | undefined,
    isError: boolean | undefined,
    onClose: MouseAction,
    onTimerExpiration: ((field: ItemActionName) => void) | undefined
    name: ItemActionName | 'client',
    message: string
}
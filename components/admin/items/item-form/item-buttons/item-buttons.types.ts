import {useApiCall} from 'utils/api/api-v2.utils'
import {itemButtonsContent} from 'components/admin/items/item-form/item-buttons/item-buttons.content'

export type ItemButtonsProps = {
    deleted: boolean,
    itemIndex: number
}

export type ItemButtonsActionName = keyof typeof itemButtonsContent.common.actions

export type ItemButtonsActions = Record<ItemButtonsActionName, ReturnType<typeof useApiCall>>
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {actions} from 'app/[locale]/admin/items/_components/item-form/item-actions/item-actions.content'

export type ItemActionsProps = {
    deleted: boolean
}

export type ItemActionName = keyof typeof actions

export type ItemActionsValues = Record<ItemActionName, ReturnType<typeof useApiCall>>

export type ItemActionsMessages = Record<ItemActionName | 'client',
    {text: string, isError?: boolean, isSuccess?: boolean}>

export type CreateItemImagesData = {files: FormData, colors: string[], _id: string}
export type UpdateItemImagesData = {data: FormData, _id: string}
export type DeleteItemImagesData = {images: {id: string, color: string}[], _id: string}

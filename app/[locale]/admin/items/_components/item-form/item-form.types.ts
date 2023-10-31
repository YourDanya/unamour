import useItemForm from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {apiActions} from 'app/[locale]/admin/items/_components/item-form/item-form.content'
import {useGestState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {useApi} from 'app/[locale]/admin/items/_components/item-form/api'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {ImageValue} from 'app/_common/types/image-value'
import {getData} from 'app/[locale]/admin/items/_components/item-form/save'
import {FormValue} from 'app/[locale]/admin/items/_components/admin-items.types'
import {SetStateAction} from 'react'
import {Dispatch} from 'react'
import {AdminItem} from 'app/_common/types/admin-item'

export type ItemFormProps = {
    formValue: FormValue,
    setFormValue: Dispatch<SetStateAction<FormValue | null>>,
    onBack: () => void,
    onCreate: (item: AdminItem) => void
}

export type ItemFormState = ReturnType<typeof useItemForm>
export type ItemFormMainState = ReturnType<typeof useGestState>
export type ItemFormApiState = ReturnType<typeof useApi>

export type ApiSuccessState = ItemFormMainState & {data: {item: FetchedItem}, name: ActionName}
export type ApiErrorState = ItemFormMainState & {name: ActionName}

export type NewImageValue = {file: File, url: string}
export type FormImageValue = {url: string, file?: File, path?: string}

export type ActionName = keyof typeof apiActions
export type MessageName = ActionName | 'client'
export type MessageValues = Record<MessageName, {error?: string, success?: string}>

export type ActionsValues = Record<MessageName, ReturnType<typeof useApiCall>>

export type ShouldActions = {create: boolean, update: boolean, delete: boolean}

export type DeleteData = {_id: string, images: string[]}

export type AppendImageDataParams = ReturnType<typeof getData> & {
    newImage: FormImageValue, oldImage: ImageValue, variantIndex: number, imageIndex: number
}
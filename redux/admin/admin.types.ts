import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {ServerError} from 'redux/store.types'
import {Locale} from 'types/types'
import {SelectField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {PayloadAction} from '@reduxjs/toolkit'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {AppThunk} from 'redux/store'

export type AdminState = {
    fields: Record<AdminField, StateField> & Record<'updateItem' | 'createItem', Record<string, WithClientErrValue>>
        & Record<'deleteItem' | 'updateItemImages' | 'deleteItemImages' | 'createItemImages', Record<string, StateField>>,
    items: FetchedItem []
}

export type WithClientErrValue = {loading: boolean, success: boolean, error: {server: ServerError | null, client: number}}
export type WithClientErrValues = Record<string, WithClientErrValue>

export type SelectWithClientErr = {loading: boolean, success: string, error: {server: string, client: string}}
export type SelectAdminField = (field: AdminField | AdminIdField, _id?: string) =>
     ((state: AppState) => SelectField | SelectWithClientErr)
export type SelectIsSlugUnique = (_id: string, index: number) => ((state: AppState) => boolean)
export type SelectAdminFieldParams = (state: AppState, field: AdminField | 'updateItem', _id?: string) =>
    {field: AdminField | 'updateItem', _id?: string}

export type AdminField = 'getItems'
export type AdminIdField = 'updateItem' | 'createItem' | 'deleteItem' | 'updateItemImages' | 'deleteItemImages' | 'createItemImages'
export type AdminErrors = ContentErrors<AdminField | AdminIdField>
export type AdminSuccess = ContentSuccess<AdminField | AdminIdField>

export type GetAdminClientErrors = (params: {field: 'updateItem' | 'createItem', locale: Locale, count?: number}) => string

export type SetAdminFieldStartAction = PayloadAction<{field: AdminIdField | AdminField, _id?: string}>
export type SetAdminFieldFailureAction = PayloadAction<{error: ServerError, field: AdminIdField | AdminField, _id?: string}>
export type SetAdminFieldSuccessAction = PayloadAction<{ field: AdminIdField | AdminField, _id?: string}>
export type ResetAdminFieldSuccessAction = PayloadAction <{field: AdminIdField | AdminField, _id?: string}>
export type SetAdminFieldAction = PayloadAction<{field: AdminIdField | AdminField, _id?: string,
    value: Partial<WithClientErrValue> | Partial<StateField>}>
export type DeleteUpdateItemFieldAction = PayloadAction<{_id: string}>
export type SetAdminItemsAction = PayloadAction<{items: FetchedItem[]}>

export type CreateItemAsync = (item: FetchedItem, _id: string) => AppThunk
export type UpdateItemAsync = (item: FetchedItem, _id: string) => AppThunk
export type DeleteItemAsync = (_id: string) => AppThunk

export type CreateItemImagesAsync = (data: FormData) => AppThunk
export type UpdateItemImagesAsync = (data: UpdateItemImagesData) => AppThunk
export type DeleteItemImagesAsync = (data: DeleteItemImagesData) => AppThunk

export type CreateItemImagesData = {files: FormData, colors: string[], _id: string}
export type UpdateItemImagesData = {data: FormData, _id: string}
export type DeleteItemImagesData = {images: {id: string, color: string}[], _id: string}


// export type SelectAdminField = <TField extends AdminField | AdminObjField> (field: TField) =>
//     TField extends AdminObjField ? StateField : ''
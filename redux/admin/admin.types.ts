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
    fields: Record<AdminField, StateField> & {updateItem: Record<string, UpdateItemValue>}
}

export type UpdateItemValue = {loading:boolean, success: boolean, error: {server: ServerError | null, client: number}}

export type SelectUpdateItem = {loading: boolean, success: string, error: {server: string, client: string}}
export type SelectAdminField = (field: AdminField | 'updateItem', _id?: string) =>
     ((state: AppState) => SelectField | SelectUpdateItem)
export type SelectIsSlugUnique = (_id: string, index: number) => ((state: AppState) => boolean)
export type SelectAdminFieldParams = (state: AppState, field: AdminField | 'updateItem', _id?: string) =>
    {field: AdminField | 'updateItem', _id?: string}

export type AdminField = 'updateItems'
export type AdminErrors = ContentErrors<AdminField | 'updateItem'>
export type AdminSuccess = ContentSuccess<AdminField | 'updateItem'>

export type GetAdminClientErrors = (params: {field: 'updateItem', locale: Locale, count?: number}) => string

export type SetAdminFieldStartAction = PayloadAction<{field: 'updateItem' | AdminField, _id: string}>
export type SetAdminFieldFailureAction = PayloadAction<{error: ServerError, field: 'updateItem' | AdminField, _id: string}>
export type SetAdminFieldSuccessAction = PayloadAction<{ field: 'updateItem' | AdminField, _id: string}>
export type ResetAdminFieldSuccessAction = PayloadAction <{field: 'updateItem' | AdminField, _id: string}>
export type SetAdminFieldAction = PayloadAction<{field: 'updateItem' | AdminField, _id: string,
    value: Partial<UpdateItemValue> | Partial<StateField>}>
export type DeleteUpdateItemFieldAction = PayloadAction<{_id: string}>

export type UpdateItemAsync = (item: FetchedItem, _id: string) => AppThunk

// export type SelectAdminField = <TField extends AdminField | AdminObjField> (field: TField) =>
//     TField extends AdminObjField ? StateField : ''
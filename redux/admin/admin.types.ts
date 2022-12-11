import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {StateError} from 'redux/store.types'
import {Locale} from 'types/types'
import {SelectField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {CheckTimerField} from 'redux/store.types'
import {UserField} from 'redux/user/user.types'

export type AdminState = {
    fields: Record<AdminField, StateField> & {updateItem: Record<string, UpdateItemValue>}
}

export type UpdateItemValue = {loading:boolean, success: boolean, error: {server: StateError | null, client: number}}

export type SelectUpdateItem = {loading: boolean, success: string, error: {server: string, client: string}}

export type SelectAdminField = (field: AdminField | 'updateItem', slug?: string) =>
     ((state: AppState) => SelectField | SelectUpdateItem)

// export type AdminObjField = 'updateItem'

export type AdminField = 'updateItems'

export type AdminErrors = ContentErrors<AdminField | 'updateItem'>

export type AdminSuccess = ContentSuccess<AdminField | 'updateItem'>

export type GetAdminClientErrors = (params: {field: 'updateItem', locale: Locale, count?: number}) => string


// export type SelectAdminField = <TField extends AdminField | AdminObjField> (field: TField) =>
//     TField extends AdminObjField ? StateField : ''
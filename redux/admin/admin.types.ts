import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {StateError} from 'redux/store.types'

export type AdminState = {
    fields: Record<AdminField, StateField> & {updateItem: Record<string, updateItemValue>}
}

export type updateItemValue = {loading:boolean, success: boolean, error: {server: StateError | null, client: number}}

export type AdminObjField = 'updateItem'

export type AdminField = 'updateItems'

export type AdminErrors = ContentErrors<AdminField & 'updateItem'>

export type AdminSuccess = ContentSuccess<AdminField & 'updateItem'>

// export type SelectAdminField = <TField extends AdminField | AdminObjField> (field: TField) =>
//     TField extends AdminObjField ? StateField : ''
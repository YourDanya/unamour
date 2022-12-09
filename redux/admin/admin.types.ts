import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {AppState} from 'redux/store'
import {CheckTimerField} from 'redux/store.types'
import {UserField} from 'redux/user/user.types'

export type AdminState = {
    fields: Record<AdminObjField, Record<string, StateField>> & Record<AdminField, StateField>
}

export type AdminObjField = 'updateItem'

export type AdminField = 'updateItems'

export type AdminErrors = ContentErrors<AdminField & AdminObjField>

export type AdminSuccess = ContentSuccess<AdminField & AdminObjField>

// export type SelectAdminField = <TField extends AdminField | AdminObjField> (field: TField) =>
//     TField extends AdminObjField ? StateField : ''
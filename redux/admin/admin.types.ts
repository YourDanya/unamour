import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'

export type AdminState = {
    fields: Record<AdminObjField, Record<string, StateField>> & Record<AdminField, StateField>
}

export type AdminObjField = 'updateItem'

export type AdminField = 'updateItems'

export type AdminErrors = ContentErrors<AdminField & AdminObjField>

export type AdminSuccess = ContentSuccess<AdminField & AdminObjField>
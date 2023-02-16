import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {Locale} from 'types/types'
import {SelectField} from 'redux/store.types'
import {ServerError} from 'redux/store.types'
import {AppState} from 'redux/store'
import {WithClientErrValue} from 'redux/admin/admin.types'
import {SelectWithClientErr} from 'redux/admin/admin.types'

export type MapField = <TField extends string> (field: TField, stateField: StateField, locale: Locale, errors: ContentErrors,
                        success: ContentSuccess) => SelectField

export type MapWithClientErrField = <TField extends string> (params: {field: TField, stateField: WithClientErrValue,
    locale: Locale, contentErrors: ContentErrors, contentSuccess: ContentSuccess, clientErrors: ContentErrors | (() => string)
}) => SelectWithClientErr

export type CapitalizeString = <T extends string> (string: T) => Capitalize<T>

export type GetError = <TField extends string,> (field: TField,error: ServerError | null, contentErrors: ContentErrors, locale: Locale) => string

export type NullObj = <TObj> (obj: TObj) => TObj

export type GetLocalStorage = <K extends keyof AppState> (key : K) => AppState[K]
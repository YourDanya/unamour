import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {Locale} from 'types/types'
import {SelectField} from 'redux/store.types'
import {ServerError} from 'redux/store.types'

export type MapField = <TField extends string> (field: TField, stateField: StateField, locale: Locale, errors: ContentErrors,
                        success: ContentSuccess) => SelectField

export type CapitalizeString = <T extends string> (string: T) => Capitalize<T>

export type GetError = <TField extends string,> (field: TField,error: ServerError | null, contentErrors: ContentErrors, locale: Locale) => string
import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {Locale} from 'types/types'
import {SelectField} from 'redux/store.types'

export type MapField = <TField extends string> (field: TField, stateField: StateField, locale: Locale, errors: ContentErrors,
                        success: ContentSuccess) => SelectField

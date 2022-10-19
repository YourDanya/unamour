import {Locale} from 'redux/main/main.types'

export type StateError = { code: string, message: string, timer?: number }

export type StateField = {loading: boolean, error: StateError | null, success: boolean, timer?: number | null}

export type SelectField = {loading : boolean, error : string | null, success : string | null}

export type SelectTimerField = SelectField & {timer: number}

export type ContentSuccess = Record<string, Record<Locale, string>>

export type ContentErrors = {'4': Record<string, LocaleError | MessLocaleError>, '5': LocaleError}

export type LocaleError = Record<Locale, string>

export type MessLocaleError =  Record<string, LocaleError>

export type CheckTimerField<Field> = Field extends 'sendCode' ? SelectTimerField : SelectField

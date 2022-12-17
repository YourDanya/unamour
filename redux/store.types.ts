import {Locale} from 'redux/main/main.types'

export type StateError = { code: string, message: string, timer?: number }
export type StateField = {loading: boolean, error: StateError | null, success: boolean, timer?: number | null}
export type SelectField = {loading : boolean, error : string | null, success : string | null}
export type SelectTimerField = SelectField & {timer: number}

export type ContentSuccess<T extends string = string> = Record<T, Record<Locale, string>>
export type ContentErrors<T extends string = string> = {'4': Record<T, LocaleError | MessLocaleError>, '5': LocaleError}

export type LocaleError = Record<Locale, string>
export type MessLocaleError =  Record<string, LocaleError>

export type CheckTimerField<Field> = Field extends 'sendRegisterCode' ? SelectTimerField : SelectField

import {StateField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {CheckTimerField} from 'redux/store.types'

export type UserState = {
    user: null | User,
    fields: Record<UserField, StateField>,
    current: UserField | '',
    activation: boolean,
}

export type LoginData = {
    email: string,
    password: string
}

export type ForgetPassData = {
    email: string
}

export type ResetPassData = {
    password: string,
    passwordConfirm: string,
    token: string
}

export type RegisterData = {
    name: string,
    passwordConfirm: string,
    email: string,
    password: string
}

export type ActivateData = {
    code: string
}

export type UserField = 'login' | 'register' | 'signOut' | 'getUser' | 'forgetPass' | 'resetPass' | 'activate' |
    'sendCode'

export type User = {
    name: string,
    email: string,
    surname: string,
    phone: string,
    birthDate: string
}

export type GetUserField = <TField extends UserField> (state: AppState, field: TField) => TField

export type SelectUserField = <TField extends UserField> (state: AppState, field: TField) => CheckTimerField<TField>

export type _SelectUserField = <TField extends UserField> (field: TField) => ((state: AppState) => CheckTimerField<TField>)
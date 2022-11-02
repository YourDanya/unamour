import {StateField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {CheckTimerField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'

export type UserState = {
    user: null | User,
    fields: Record<UserField, StateField>,
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

export type UpdatePassData = {
    oldPassword: string,
    newPassword: string,
    passwordConfirm: string,
}

export type DeleteUserData = {
    password: string,
}

export type RegisterData = {
    name: string,
    passwordConfirm: string,
    email: string,
    password: string
}

export type UpdateEmailData = {
    password: string,
    newEmail: string
}

export type ActivateData = {
    code: string
}

export type UpdateUserData = {
    name: string,
    birthDate: string,
    phone: string,
    surname: string
}

export type UserField = 'login' | 'register' | 'logout' | 'getUser' | 'forgetPass' | 'resetPass' | 'activateUser' |
    'sendRegisterCode' | 'updatePass' | 'deleteUser' | 'updateEmail' | 'sendUpdateEmailCode' | 'activateEmail'
    | 'updateUser'

export type User = {
    name: string,
    email: string,
    surname: string,
    phone: string,
    birthDate: string
}

export type GetUserField = <TField extends UserField> (state: AppState, field: TField) => TField

// export type SelectUserField = <TField extends UserField> (state: AppState, field: TField) => CheckTimerField<TField>

export type SelectUserField = <TField extends UserField> (field: TField) => ((state: AppState) => CheckTimerField<TField>)

export type UserErrors = ContentErrors<UserField>

export type UserSuccess = ContentSuccess<UserField>



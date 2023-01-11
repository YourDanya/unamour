import {StateField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {CheckTimerField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {AppThunk} from 'redux/store'
import {PayloadAction} from '@reduxjs/toolkit'
import {ServerError} from 'redux/store.types'

export type UserState = {
    user: null | User,
    fields: Record<UserField, StateField>,
}

export type LoginAsync = (loginData: {
    email: string,
    password: string
}) => AppThunk

export type ForgetPassAsync = (forgetPassData: {
    email: string
}) => AppThunk

export type ResetPassAsync = (resetPassData: {
    password: string,
    passwordConfirm: string,
    token: string
}) => AppThunk

export type UpdatePassAsync = (updatePassData: {
    oldPassword: string,
    newPassword: string,
    passwordConfirm: string,
}) => AppThunk

export type DeleteUserAsync = (deleteUserData: {
    password: string
}) => AppThunk

export type RegisterAsync = (registerData: {
    name: string,
    passwordConfirm: string,
    email: string,
    password: string
}) => AppThunk

export type UpdateEmailAsync = (updateEmailData: {
    password: string,
    newEmail: string
}) => AppThunk

export type ActivateAsync = (activateUserData: {
    code: string
}) => AppThunk

export type UpdateUserAsync = (updateUserData: {
    name: string,
    birthDate: string,
    phone: string,
    surname: string
}) => AppThunk

export type SetUserFieldStartAction = PayloadAction<UserField>
export type SetUserFieldFailureAction = PayloadAction<{error: ServerError, field: UserField}>
export type SetUserFieldSuccessAction = PayloadAction<UserField>
export type SetUserAction = PayloadAction<{user: User | null}>
export type ResetUserFieldTimerAction = PayloadAction<UserField>
export type ResetUserFieldSuccessAction = PayloadAction<UserField>
export type SetUserFieldAction = PayloadAction<{field: UserField, value: Partial<StateField>}>

export type UserField = 'login' | 'register' | 'logout' | 'getUser' | 'forgetPass' | 'resetPass' | 'activateUser' |
    'sendRegisterCode' | 'updatePass' | 'deleteUser' | 'updateEmail' | 'sendUpdateEmailCode' | 'activateEmail'
    | 'updateUser'

export type User = {
    name: string,
    email: string,
    surname: string,
    phone: string,
    birthDate: string,
    isAdmin: boolean
}

export type SelectUserField = <TField extends UserField> (field: TField) => ((state: AppState) => CheckTimerField<TField>)

export type UserErrors = ContentErrors<UserField>

export type UserSuccess = ContentSuccess<UserField>



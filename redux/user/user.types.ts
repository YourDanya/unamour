import {StateError} from "../../types/types"
import {Locale} from "../main/main.types"

export type UserState = {
    user: null | User,
    fields: Record<UserField, UserFieldState>,
    current: UserField | '',
    activation: boolean,
}

export type SignInData = {
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

export type SignUpData = {
    name: string,
    passwordConfirm: string,
    email: string,
    password: string
}

// export type UserError = Record<UserField, StateError | null>

export type UserLoading = Record<UserField, boolean>

export type UserField = 'signIn' | 'signUp' | 'signOut' | 'getUser' | 'forgetPass' | 'resetPass'

export type UserFieldState = {loading: boolean, error: StateError | null, success: boolean}

export type User = {
    name: string,
    email: string,
    surname: string,
    phone: string,
    birthDate: string
}

export type SelectFieldReturn = {loading : boolean, error : string | null, success : string | null}

export type UserSuccess = Record<UserField, Record<Locale, string>>

export type ErrorKey = '4' | '5'

export type UserErrors = {'4': Record<UserField, Record<Locale, string>>, '5': Record<Locale, string>}
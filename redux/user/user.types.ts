import {StateError} from "../../types/types";

export type UserState = {
    user: null | User,
    error: UserError,
    current: 'signIn' | 'signUp' | ''
}

export type SignInData = {
    email: string,
    password: string
}

export type SignUpData = {
    name: string,
    passwordConfirm: string,
    email: string,
    password: string
}

export type UserError = {
    signIn: StateError | null,
    signUp: StateError | null
}

export type User = {
    name: string,
    email: string,
    surname: string,
    phone: string,
    birthDate: string
}
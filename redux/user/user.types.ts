export type UserState = {
    user: null | object,
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
    signIn: string,
    signUp: string
}

export type SetErrorPayload = {
    error: Response,
    field: string
}
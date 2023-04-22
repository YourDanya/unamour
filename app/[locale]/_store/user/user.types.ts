import {ApiCallRes} from 'app/[locale]/_common/types/types'

export type User = {
    name: string,
    email: string,
    surname: string,
    phone: string,
    birthDate: string,
    isAdmin: boolean,
    favorites: string[],
    favoritesColors: string[]
}

export type UserState = {
    user: null | undefined | User,
    setUser: (user: null | undefined | User) => void,
    register: ApiCallRes,
    setRegister: (params: Partial<ApiCallRes>) => void,
    sendRegisterCode: ApiCallRes,
    setSendRegisterCode: (params: Partial<ApiCallRes>) => void
}
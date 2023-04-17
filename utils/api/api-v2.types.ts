import {ServerError} from 'redux/store.types'
import {Locale} from 'types/types'

export type ApiCall = <DataT,> (url: string, params?: Omit<RequestInit, 'body'> &
    {body?: object}) => Promise<{data: DataT, error: null} | {data: null, error: ServerError}>

export type UseApiCall = <DataT,> (url: string, params?: Omit<RequestInit, 'body'> &
    {body?: object, onSuccess?: (data: DataT) => void, onError?: (params: unknown) => void}) =>
    // Promise<
    {loading: boolean, success: boolean, data: DataT | null, error: ServerError | null,
        start: (body?: object) => void, setError: (error: ServerError | null) => void,
        setSuccess: (success: boolean) => void}
// >

export type MapApiError = (params: {error: ServerError | null, errorFourTransl: object | string, locale: Locale}) => string

export type UseMapApiError = (params: {error: ServerError | null, errorFourTransl: object | string}) => string

export type MapApiRes = (params: {
    res: {loading: boolean, success: boolean, error: ServerError | null},
    errorFourTransl: string | object,
    successTransl: string,
    locale: Locale
}) => {success: string, error: string, loading: boolean}

export type UseMapApiRes = (params: {
    res: {loading: boolean, success: boolean, error: ServerError | null},
    errorFourTransl: string | object,
    successTransl: string
}) => {success: string, error: string, loading: boolean}



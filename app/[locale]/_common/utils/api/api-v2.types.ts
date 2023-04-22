import {ServerError} from 'app/[locale]/_common/types/types'
import {Locale} from 'app/[locale]/_common/types/types'

export type ApiCallParams = Omit<RequestInit, 'body'> & {body?: object}

export type ApiCall = <DataT,> (url: string, params?: ApiCallParams) =>
    Promise<{data: DataT, error: null} | {data: null, error: ServerError}>

export type MapApiError = (params: {error: ServerError | null, errorFourTransl: object | string, locale: Locale}) => string

export type MapApiRes = (params: {
    res: {loading: boolean, success: boolean, error: ServerError | null},
    errorFourTransl: string | object,
    successTransl: string,
    locale: Locale
}) => {success: string, error: string, loading: boolean}




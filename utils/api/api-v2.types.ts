import {ServerError} from 'redux/store.types'

export type ApiCall = <DataT,> (url: string, params?:
    {method?: string, body?: object, headers?: HeadersInit, keepAlive?: boolean}) => Promise<
    {data: DataT, error: null} | {data: null, error: ServerError}>

export type UseApiCall = <DataT,> (url: string, params?:
    {method?: string, body?: object, headers?: HeadersInit, keepAlive?: boolean,
onSuccess?: (data: DataT) => void, onError?: (params: unknown) => void}) =>
    // Promise<
        {loading: boolean, success: boolean, data: DataT | null, error: ServerError | null,
        start: (body?: object) => void, setError: (error: ServerError | null) => void,
        setSuccess: (success: boolean) => void}
        // >

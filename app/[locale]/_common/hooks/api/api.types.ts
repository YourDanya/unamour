import {ServerError} from 'app/[locale]/_common/types/types'
import {ApiCallParams} from 'app/[locale]/_common/utils/api/api-v2.types'

export type UseApiCall = <DataT,> (url: string, params?: ApiCallParams &
    {onSuccess?: (data: DataT) => void, onError?: (params: any) => void}) =>
    {loading: boolean, success: boolean, data: DataT | null, error: ServerError | null,
        start: (body?: object) => void, setError: (error: ServerError | null) => void,
        setSuccess: (success: boolean) => void}

export type UseMapApiRes = (params: {
    res: {loading: boolean, success: boolean, error: ServerError | null},
    errorFourTransl: string | object,
    successTransl: string
}) => {success: string, error: string, loading: boolean}

export type UseMapApiError = (params: {error: ServerError | null, errorFourTransl: object | string}) => string

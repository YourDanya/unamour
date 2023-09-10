import {ApiCallParams} from 'app/_common/utils/api/api-v2.types'

export type UseApiCallParams<DataT> = ApiCallParams &
    {onSuccess?: (data: DataT) => void, onError?: (params: any) => void, url?: string}
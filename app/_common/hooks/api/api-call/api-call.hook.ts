import {useState} from 'react'
import {ServerError} from 'app/_common/types/types'
import {useEffect} from 'react'
import {apiCall} from 'app/_common/utils/api/api-v2.utils'
import {UseApiCallParams} from 'app/_common/hooks/api/api-call/api-call.types'

export const useApiCall = <T> (initParams: UseApiCallParams<T>) => {
    const {onSuccess, onError} = initParams ?? {}

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<ServerError | null>(null)

    const start = (params: UseApiCallParams<T>) => {
        setLoading(true)
        setError(null)
        setSuccess(false)

        const newParams = {...initParams, ...params}
        const url = newParams.url as string

        apiCall<typeof data>(url, params).then((res) => {
            const fetchedData = res.data
            if (fetchedData) {
                setData(fetchedData)
                setError(null)
                setSuccess(true)
                onSuccess && onSuccess(fetchedData)
            } else {
                setData(null)
                setError(error)
                setSuccess(false)
                onError && onError(error)
            }
        })
    }

    return {loading, success, error, data, start, setError, setSuccess}
}
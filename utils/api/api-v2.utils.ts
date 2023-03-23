import {baseURL, instance} from 'utils/api/api.utils'
import {ApiCall} from 'utils/api/api-v2.types'
import {useEffect} from 'react'
import {useState} from 'react'
import {UseApiCall} from 'utils/api/api-v2.types'
import {ServerError} from 'redux/store.types'

export const apiCall: ApiCall = async (url, params) => {
    let body: string | FormData = JSON.stringify(params?.body)

    if (params?.body instanceof FormData) {
        body = params.body
    }

    const options = {
        method: params?.method,
        body,
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            ...params?.headers
        }
    } as RequestInit
    
    const response = await fetch(`${baseURL}/${url}`, options)
    const data = await response?.json()
    const code = response?.status?.toString()[0] ?? '5'

    if (code === '4' || code === '5') {
        return {data: null, error: {code, ...data}}
    } else {
        return {data, error: null}
    }
}

export const useApiCall: UseApiCall = (url, params) => {
    const {onSuccess, onError, ...otherParams} = params ?? {}

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<ServerError | null>(null)
    const [body, setBody] = useState<object | undefined>(params?.body)

    useEffect(() => {
        (async () => {
            if (!loading) {
                return
            }
            const {data: fetchedData, error} = await apiCall<typeof data>(url, {...otherParams, body})
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
            setLoading(false)
        })()
    }, [loading])

    const start = (body?: object) => {
        if (body && (params?.method === 'PUT' || params?.method === 'PATCH' || params?.method === 'POST')) {
            setBody(body)
        }
        setLoading(true)
    }

    return {loading, success, error, data, start, setError, setSuccess}
}
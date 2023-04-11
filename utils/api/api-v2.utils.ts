import {baseURL} from 'utils/api/api.utils'
import {ApiCall} from 'utils/api/api-v2.types'
import {UseApiCall} from 'utils/api/api-v2.types'
import {MapApiError} from 'utils/api/api-v2.types'
import {useEffect} from 'react'
import {useState} from 'react'
import {ServerError} from 'redux/store.types'
import {apiErrorContent} from 'utils/api/api-v2.content'
import {useRouter} from 'next/router'
import {Locale} from 'types/types'
import {UseMapApiError} from 'utils/api/api-v2.types'
import {MapApiRes} from 'utils/api/api-v2.types'
import {UseMapApiRes} from 'utils/api/api-v2.types'

export const apiCall: ApiCall = async (url, params) => {
    let body: string | FormData

    if (params?.body instanceof FormData) {
        body = params.body
    } else {
       body = JSON.stringify(params?.body)
    }

    const options = {
        method: params?.method,
        body,
        credentials: 'include',
        headers: {
            ...typeof body === 'string' && {'Content-Type': 'application/json'},
            ...params?.headers
        },
        keepalive: params?.keepAlive
    } as RequestInit

    let data
    let code
    try {
        const response = await fetch(`${baseURL}/${url}`, options)
        // console.log('response', response)
        data = await response?.json()
        code = response?.status?.toString()[0] ?? '5'
    } catch(err) {
        code = '5'
        data = err
    }

    // console.log('data', data)

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
    const [body, setBody] = useState<object | undefined>()

    useEffect(() => {
        (async () => {
            if (!loading) {
                return
            }
            const {data: fetchedData, error} = await apiCall<typeof data>(url,
                {...otherParams, ...body && {body}}
            )
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
        setError(null)
        setSuccess(false)
    }

    return {loading, success, error, data, start, setError, setSuccess}
}

export const mapApiError: MapApiError = (params) => {
    const {error, errorFourTransl, locale} = params
    if (!error) {
        return ''
    }

    const {code, message, timer} = error
    if (code === '5') {
        return apiErrorContent.translations[locale].general
    }

    if (typeof errorFourTransl === 'object') {
        return errorFourTransl[message as keyof typeof errorFourTransl]
    } else {
        return errorFourTransl
    }
}

export const useMapApiError: UseMapApiError = (params) => {
    const locale = useRouter().locale as Locale
    return mapApiError({...params, locale})
}

export const mapApiRes: MapApiRes = (params) => {
    const {res, errorFourTransl, successTransl, locale} = params
    const error = mapApiError({error: res.error, errorFourTransl, locale})
    let success = ''
    if (res.success) {
        success = successTransl
    }
    return {error, success, loading: res.loading}
}

export const useMapApiRes: UseMapApiRes = (params) => {
    const locale = useRouter().locale as Locale
    return mapApiRes({...params, locale})
}

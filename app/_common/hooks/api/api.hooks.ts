import {UseMapApiRes} from 'app/_common/hooks/api/api.types'
import {UseApiCall} from 'app/_common/hooks/api/api.types'
import {mapApiError} from 'app/_common/utils/api/api-v2.utils'
import {ServerError} from 'app/_common/types/types'
import {useEffect} from 'react'
import {mapApiRes} from 'app/_common/utils/api/api-v2.utils'
import {UseMapApiError} from 'app/_common/hooks/api/api.types'
import {useState} from 'react'
import {useParams} from 'next/navigation'
import {apiCall} from 'app/_common/utils/api/api-v2.utils'
import {Locale} from 'app/_common/types/types'

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

export const useMapApiError: UseMapApiError = (params) => {
    const locale = useParams().locale as Locale
    return mapApiError({...params, locale})
}

export const useMapApiRes: UseMapApiRes = (params) => {
    const locale = useParams().locale as Locale
    return mapApiRes({...params, locale})
}
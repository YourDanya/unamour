import {ApiCall} from 'utils/api/api-v2.types'
import {baseURL} from 'utils/api/api.utils'

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
        keepalive: params?.keepalive
    } as RequestInit

    let data
    let code

    try {
        const response = await fetch(`${baseURL}/${url}`, options)
        console.log('response', response)
        data = await response?.json()
        code = response?.status?.toString()[0] ?? '5'
    } catch(err) {
        console.log('err', err)
        code = '5'
        data = err
    }

    if (code === '4' || code === '5') {
        return {data: null, error: {code, ...data}}
    } else {
        return {data, error: null}
    }
}
import {MapApiRes} from 'app/[locale]/_common/utils/api/api-v2.types'
import {ServerError} from 'app/[locale]/_common/types/types'
import {MapApiError} from 'app/[locale]/_common/utils/api/api-v2.types'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import {apiErrorContent} from 'app/[locale]/_common/utils/api/api-v2.content'
import {useEffect} from 'react'
import {useState} from 'react'
import {ApiCall} from 'app/[locale]/_common/utils/api/api-v2.types'
import {useRouter} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'
import {useParams} from 'next/navigation'

export const apiCall: ApiCall = async (url, params) => {
    let body: string | FormData

    if (params?.body instanceof FormData) {
        body = params.body
    } else {
        body = JSON.stringify(params?.body)
    }

    const {headers: _, body: __, ...otherParams} = params ?? {}

    const options = {
        body,
        credentials: 'include',
        headers: {
            ...typeof body === 'string' && {'Content-Type': 'application/json'},
            ...params?.headers
        },
        keepalive: true,
        ...otherParams
    } as RequestInit

    let data
    let code
    try {
        const response = await fetch(`${baseURL}/${url}`, options)
        data = await response?.json()
        code = response?.status?.toString()[0] ?? '5'
    } catch (err) {
        code = '5'
        data = err
    }

    if (code === '4' || code === '5') {
        return {data: null, error: {code, ...data}}
    } else {
        return {data, error: null}
    }
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
        return errorFourTransl ?? ''
    }
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


import axios from 'axios'
import {AxiosResponse} from 'axios'
import {ApiCallAsync} from 'utils/api/api.types'
import {ApiCall} from 'utils/api/api.types'
import {AxiosPromise} from 'axios'
import {ServerError} from 'redux/store.types'
import {useEffect} from 'react'
import {useState} from 'react'

export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://unamour-server.onrender.com'

export const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://unamour-official.vercel.app'

let instance = axios.create({
    baseURL,
    withCredentials: true
})

export const api = {
    get:
        async (url: string) => {
            return await instance.get(url)
        },
    post:
        async (url: string, options: object = {}, config: object = {}) => {
            return await instance.post(url, options, config)
        },
    put:
        async (url: string, options: object) => {
            return await instance.put(url, options)
        },
    patch:
        async (url: string, options: object) => {
            return await instance.patch(url, options)
        },
    delete:
        async (url: string) => {
            return await instance.delete(url)
        }
}

export const apiCallAsync: ApiCallAsync = (apiCall, successAction, errorAction) => {
    return async (dispatch, getState) => {
        try {
            const res = await apiCall()
            console.log('data', res.data)
            if (Array.isArray(successAction)) {
                successAction.forEach(action => {
                    dispatch(action(res.data))
                })
            } else {
                dispatch(successAction(res.data))
            }
        } catch (err: any) {
            const res = err.response as AxiosResponse
            console.log('err', err)
            let code = res?.status?.toString()[0] ?? ''
            if (code !== '4' && code !== '5') code = '5'
            const {message} = res?.data || {}
            const timer = +res?.data?.timer
            if (Array.isArray(errorAction)) {
                errorAction.forEach(action => {
                    dispatch(action({code, message, timer}))
                })
            } else {
                dispatch(errorAction({code, message, timer}))
            }
        }
    }
}


export const apiCall: ApiCall = async (apiCall)  => {
    try {
        const {data} = await apiCall()
        return {data, error: {}}
    } catch (error: any) {
        const res = error.response as AxiosResponse
        console.log('error', error.response)
        let code = res?.status?.toString()[0] ?? ''
        if (code !== '4' && code !== '5') code = '5'
        const {message} = res?.data || {}
        return {data: {}, error: {code, message}}
    }
}

// export const useApiCall = (params) => {
//     const {callback, onSuccess, onError} = params
//
//     const [isLoading, setIsLoading] = useState(false)
//     const [isSuccess, setIsSuccess] = useState(false)
//     const [isError, setIsError] = useState(false)
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
//
//     useEffect(async () => {
//         if (!isLoading) {
//             return
//         }
//         const {data, error} = await apiCall(callback)
//         if (data) {
//             setError(null)
//             setIsSuccess(true)
//             onSuccess()
//         }
//         if (error) {
//             setData(data)
//             setIsSuccess(false)
//             onError(false)
//         }
//         setIsLoading(false)
//     }, [isLoading])
//
//     return {isLoading, isSuccess, isError, data, error, setIsLoading, setIsError, setIsSuccess}
// }
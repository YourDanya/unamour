import axios from 'axios'
import {AxiosResponse} from 'axios'
import {ApiCallAsync} from 'utils/api/api.types'
import {ApiCall} from 'utils/api/api.types'
import {AxiosPromise} from 'axios'
import {ServerError} from 'redux/store.types'

export const baseURL = 'http://localhost:5000'

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
        return {data, err: {}}
    } catch (err: any) {
        const res = err.response as AxiosResponse
        console.log('err', err.response)
        let code = res?.status?.toString()[0] ?? ''
        if (code !== '4' && code !== '5') code = '5'
        const {message} = res?.data || {}
        return {data: {}, err: {code, message}}
    }
}
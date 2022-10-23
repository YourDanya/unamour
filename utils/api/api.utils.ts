import axios from 'axios'
import {AxiosResponse} from 'axios'
import {ApiCallAsync} from 'utils/api/api.types'

let baseURL = 'http://localhost:5000'

let instance = axios.create({
    baseURL,
    withCredentials: true
})

export const Api = {
    get:
        async (url: string) => {
            return await instance.get(url)
        },
    post:
        async (url: string, options: object = {}) => {
            return await instance.post(url, options)
        },
    put:
        async (url: string, options: object) => {
            return await instance.put(url, options)
        },
    patch:
        async (url: string, options: string) => {
            return await instance.patch(url, options)
        },
    delete:
        async (url: string, options: string) => {
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
            const code = res.status.toString()[0]
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

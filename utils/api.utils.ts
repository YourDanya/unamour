import axios, {AxiosError, AxiosPromise, AxiosResponse} from "axios"
import {ActionCreatorWithPayload} from "@reduxjs/toolkit"
import {AppState, AppThunk} from "../redux/store"

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
        async (url: string, options: object) => {
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

export const apiCallThunk = (
    apiCall: () => AxiosPromise, successAction: ActionCreatorWithPayload<any>, errorAction: ActionCreatorWithPayload<any>,): AppThunk => {
    return async (dispatch, getState) => {
        try {
            const res = await apiCall()
            dispatch(successAction(res.data))
        } catch (err: any) {
            const res = err.response as AxiosResponse
            const status = res.status.toString()
            dispatch(errorAction({status}))
        }
    }
}

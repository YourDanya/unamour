import {AxiosPromise} from 'axios'
import {ActionCreatorWithPayload} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {AppThunk} from 'redux/store'
import {ServerError} from 'redux/store.types'

export type SuccessAction = ActionCreatorWithPayload<any> | ((data: any) => PayloadAction<any>)
export type ErrorAction = ActionCreatorWithPayload<any> | ((err: ServerError & {timer: number}) => PayloadAction<any>)

export type ApiCallAsync = (
    apiCall: () => AxiosPromise,
    successAction: SuccessAction | SuccessAction[],
    errorAction: ErrorAction | ErrorAction[]) => AppThunk

export type ApiCall = <TData> (apiCall: () => AxiosPromise) =>
    Promise<({data:TData, err: {}} | {data: {}, err: ServerError})>
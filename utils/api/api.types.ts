import {AxiosPromise} from 'axios'
import {ActionCreatorWithPayload} from '@reduxjs/toolkit'
import {StateError} from 'types/types'
import {PayloadAction} from '@reduxjs/toolkit'
import {AppThunk} from 'redux/store'

export type SuccessAction = ActionCreatorWithPayload<any> | (() => PayloadAction<any>)
export type ErrorAction = ActionCreatorWithPayload<any> | ((err: StateError) => PayloadAction<any>)

export type ApiCallAsync = (
    apiCall: () => AxiosPromise,
    successAction: SuccessAction | SuccessAction[],
    errorAction: ErrorAction) => AppThunk


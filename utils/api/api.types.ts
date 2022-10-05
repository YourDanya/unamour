import {AxiosPromise} from 'axios'
import {ActionCreatorWithPayload} from '@reduxjs/toolkit'
import {StateError} from 'types/types'
import {PayloadAction} from '@reduxjs/toolkit'
import {AppThunk} from 'redux/store'

export type ApiCallAsync = (
    apiCall: () => AxiosPromise,
    successAction: ActionCreatorWithPayload<any> | (() => PayloadAction<any>),
    errorAction: ActionCreatorWithPayload<any> | ((err: StateError) => PayloadAction<any>)) => AppThunk


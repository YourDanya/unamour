import {createSlice} from '@reduxjs/toolkit'
import {UserState} from 'redux/user/user.types'
import {PayloadAction} from '@reduxjs/toolkit'
import {User} from 'redux/user/user.types'
import {UserField} from 'redux/user/user.types'
import {HYDRATE} from 'next-redux-wrapper'
import {StateError} from 'redux/store.types'

const initialState: UserState = {
    user : null,
    fields: {
        login: {loading: false, error: null, success: false},
        register: {loading: false, error: null, success: false},
        signOut: {loading: false, error: null, success: false},
        getUser: {loading: false, error: null, success: false},
        forgetPass: {loading: false, error: null, success: false},
        resetPass: {loading: false, error: null, success: false},
        activate: {loading: false, error: null, success: false},
        sendCode: {loading: false, error: null, success: false, timer: 0},
        updatePass: {loading: false, error: null, success: false},
        deleteUser: {loading: false, error: null, success: false}
    },
    current : '',
    activation: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startAsync: (state, action: PayloadAction<UserField>) => {
            const field = action.payload
            state.fields[field].loading = true
            state.current = field
        },
        failAsync: (state, action: PayloadAction<{error:StateError, field: UserField}>) => {
            const {field, error} = action.payload
            state.fields[field].loading = false
            state.fields[field].error = error
        },
        successAsync: (state, action: PayloadAction<{field: UserField}>) => {
            const {field} = action.payload
            state.fields[field] = {success: true, loading: false, error: null}
        },
        resetSuccess: (state, action: PayloadAction<UserField>) => {
            state.fields[action.payload].success = false
        },
        loginSuccess: (state, action: PayloadAction<{user: User}>) => {
            state.user = action.payload.user
            state.fields.login = {loading: false, error: null, success: true}
        },
        getUserSuccess: (state, action: PayloadAction<any>) => {
            state.user = action.payload.user
        },
        signOutSuccess: (state, action: PayloadAction<any>) => {
            state.user = null
            state.fields.signOut = {loading: false, error: null, success: true}
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        resetUser: (state, action: PayloadAction<any>) => {
            state.user = null
        },
        sendCodeFailure: (state, action: PayloadAction<any>) => {
            const {timer, ...error} = action.payload
            state.fields.sendCode = {loading: false, success: false, error, timer}
        },
        sendCodeSuccess: (state, action: PayloadAction<{timer: number}>) => {
            const timer = action.payload.timer
            state.fields.sendCode = {loading: false, success: true, error: null, timer}
        },
        activateSuccess: (state, action: PayloadAction<{user: User}>) => {
            state.user = action.payload.user
            state.fields.activate = {loading: false, success: true, error: null}
        },
        clearTimer: (state, action: PayloadAction<UserField>) => {
            state.fields[action.payload].timer = 0
        },
        clearSuccess: (state, action: PayloadAction<UserField>) => {
            state.fields[action.payload].success = false
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {loginSuccess, getUserSuccess, resetSuccess, startAsync, failAsync, signOutSuccess, successAsync, setUser,
sendCodeSuccess, sendCodeFailure, activateSuccess, clearTimer, clearSuccess} = userSlice.actions

export default userSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import {UserState} from 'redux/user/user.types'
import {PayloadAction} from '@reduxjs/toolkit'
import {User} from 'redux/user/user.types'
import {StateError} from 'types/types'
import {UserField} from 'redux/user/user.types'
import {HYDRATE} from 'next-redux-wrapper'

const initialState: UserState = {
    user : null,
    fields: {
        signIn: {loading: false, error: null, success: false},
        signUp: {loading: false, error: null, success: false},
        signOut: {loading: false, error: null, success: false},
        getUser: {loading: false, error: null, success: false},
        forgetPass: {loading: false, error: null, success: false},
        resetPass: {loading: false, error: null, success: false}
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
            console.log('field', field)
            const {status} = error
            state.fields[field].error = {status}
        },
        successAsync: (state, action: PayloadAction<{field: UserField}>) => {
            const {field} = action.payload
            state.fields[field] = {success: true, loading: false, error: null}
        },
        resetSuccess: (state, action: PayloadAction<UserField>) => {
            state.fields[action.payload].success = false
        },
        signInSuccess: (state, action: PayloadAction<{user: User}>) => {
            state.user = action.payload.user
            state.fields.signIn = {loading: false, error: null, success: true}
        },
        getUserSuccess: (state, action: PayloadAction<any>) => {
            state.user = action.payload.user
        },
        signOutSuccess: (state, action: PayloadAction<any>) => {
            state.user = null
            state.fields.signOut= {loading: false, error: null, success: true}
        },
        signUpSuccess: (state, action: PayloadAction<any>) => {

        },
        activateSuccess: (state, action: PayloadAction<any>) => {

        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {signInSuccess, getUserSuccess, resetSuccess, startAsync, failAsync, signOutSuccess, successAsync} = userSlice.actions

export default userSlice.reducer
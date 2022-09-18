import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"
import {User, UserField, UserState} from "./user.types"
import {StateError} from "../../types/types"

const initialState: UserState = {
    user : null,
    fields: {
        signIn: {loading: false, error: null, success: false},
        signUp: {loading: false, error: null, success: false},
        signOut: {loading: false, error: null, success: false},
        getUser: {loading: false, error: null, success: false}
    },
    current : '',
    activation: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startAsync: (state, action: PayloadAction<UserField>) => {
            const current = action.payload
            state.fields[current].loading = true
            state.current = current
        },
        failAsync: (state, action: PayloadAction<{error:StateError, field: UserField}>) => {
            const {field, error} = action.payload
            state.fields[field].loading = false

            const {status} = error
            state.fields[field].error = {status}
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

        },
        activateError: (state, action: PayloadAction<StateError>) => {

        },
        forgetPassSuccess: (state, action: PayloadAction<any>) => {

        },
        forgetPassError: (state, action: PayloadAction<StateError>) => {

        },
        resetPassSuccess: (state, action: PayloadAction<any>) => {

        },
        resetPassError: (state, action: PayloadAction<StateError>) => {

        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {signInSuccess, getUserSuccess, resetSuccess, startAsync, failAsync, signOutSuccess

} = userSlice.actions

export default userSlice.reducer
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"
import {UserState} from "./user.types"
import {StateError} from "../../types/types"

const initialState: UserState = {
    user : null,
    error : {signIn: null, signUp: null},
    current : '',
    activation: false,
    justSign: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action: PayloadAction<any>) => {
            state.user = action.payload.user
            state.justSign = true
            state.error.signIn = null
        },
        signInFailure: (state, action: PayloadAction<StateError>) => {
            const {status} = action.payload
            state.error.signIn = {status}
        },

        resetJustSign: (state) => {
            state.justSign = false
        },

        getUserSuccess: (state, action: PayloadAction<any>) => {
            console.log(action.payload.user)
            state.user = action.payload.user
        },
        getUserFailure: (state, action: PayloadAction<StateError>) => {
            console.log(action.payload.status)
        },

        signOutSuccess: (state, action: PayloadAction<any>) => {
            state.user = null
        },
        signOutError: (state, action: PayloadAction<StateError>) => {

        },

        signUpSuccess: (state, action: PayloadAction<any>) => {

        },
        signUpError: (state, action: PayloadAction<StateError>) => {

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

export const {signInSuccess, signInFailure, getUserSuccess, getUserFailure, resetJustSign} = userSlice.actions

export default userSlice.reducer
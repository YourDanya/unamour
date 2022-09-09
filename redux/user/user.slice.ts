import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"
import {AppState} from "../store"
import {SetErrorPayload, UserState} from "./user.types"

const initialState: UserState = {
    user : null,
    error : {signIn: '', signUp: ''},
    current : ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<object>) => {
            state.user = action.payload
        },
        clearUser: (state, action: PayloadAction<object>) => {
            state.user = action.payload
        },
        setError: (state, action: PayloadAction<SetErrorPayload>) => {
            const {error: {status}, field} = action.payload
        },
        clearError: (state) => {
            state.error = initialState.error
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {setUser, clearUser, setError, clearError} = userSlice.actions

export const selectUserStore = (state: AppState) => state.user

export const selectSignInError = createSelector(
    [selectUserStore], userStore => userStore.error.signIn
)

export default userSlice.reducer
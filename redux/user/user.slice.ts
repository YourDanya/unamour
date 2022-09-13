import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"
import {AppState} from "../store"
import {UserState} from "./user.types"
import {StateError} from "../../types/types"
import {selectLocale} from "../main/main.slice"
import {ErrorKey, Errors} from "../../utils/error.utils"
import {Locale} from "../main/main.types";

const initialState: UserState = {
    user : null,
    error : {signIn: null, signUp: null},
    current : ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action: PayloadAction<any>) => {
            state.user = action.payload.user
            state.error.signIn = null
        },
        signInFailure: (state, action: PayloadAction<StateError>) => {
            const {status} = action.payload
            state.error.signIn = {status}
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
        }
    }
})

export const {signInSuccess, signInFailure} = userSlice.actions

export const selectUserStore = (state: AppState) => state.user

export const selectSignInError = createSelector(
    [selectUserStore, selectLocale], (userStore, locale) => {
        const status = userStore.error.signIn?.status as string
        if (!status || !locale) return null
        const code = status[0] as keyof typeof Errors.signIn
        return Errors.signIn[code][locale]
    }
)

export const selectSignUpError = createSelector(
    [selectUserStore, selectLocale], (userStore, locale) => {
        const status = userStore.error.signUp?.status as string
        if (!status || !locale) return null
        const code = status[0] as keyof typeof Errors.signUp
        return Errors.signUp[code][locale]
    }
)

export const selectUser = createSelector([selectUserStore], (userStore) => userStore.user)

// export const selectUserError = (userStore: UserState, locale: Locale, field: keyof UserState['error']) => {
//     const status = userStore.error[field]?.status as string
//     if (!status || !locale) return
//     const code = status[0] as ErrorKey
//     return Errors[field][code][locale]
// }

export default userSlice.reducer
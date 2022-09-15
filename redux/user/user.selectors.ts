import {AppState} from "../store"
import {createSelector} from "@reduxjs/toolkit"
import {selectLocale} from "../main/main.slice"
import {Errors} from "../../utils/error.utils"

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

export const selectJustSign= createSelector([selectUserStore], (userStore) => userStore.justSign)

// export const selectUserError = (userStore: UserState, locale: Locale, field: keyof UserState['error']) => {
//     const status = userStore.error[field]?.status as string
//     if (!status || !locale) return
//     const code = status[0] as ErrorKey
//     return Errors[field][code][locale]
// }
import {AppState} from "../store"
import {createSelector} from "@reduxjs/toolkit"
import {selectLocale} from "../main/main.slice"
import {SelectFieldReturn, UserField} from "./user.types"
import {userErrors, userSuccess} from "./user.content"

export const selectUserStore = (state: AppState) => state.user

export const selectField = (field: UserField) => createSelector(
    [selectUserStore, selectLocale], (userStore, locale): SelectFieldReturn => {
        const userField = userStore.fields[field]
        const code = userField?.error?.status?.[0] as '4' | '5'
        const error = code === '5' ? userErrors['5'][locale] : userErrors[code]?.[field]?.[locale] ?? null
        const {loading} = userField
        const success = userField.success ? userSuccess[field][locale] : null
        return {loading, error, success}
    }
)

export const selectUser = createSelector([selectUserStore], (userStore) => userStore.user)

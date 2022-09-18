import {AppState} from "../store"
import {createSelector} from "@reduxjs/toolkit"
import {selectLocale} from "../main/main.slice"
import {ErrorKey, Errors} from "../../utils/error.utils"
import {SelectFieldReturn, UserField} from "./user.types"

export const selectUserStore = (state: AppState) => state.user

export const selectField = (field: UserField) => createSelector(
    [selectUserStore, selectLocale], (userStore, locale) : SelectFieldReturn => {
        const userField = userStore.fields[field]
        const code = userField.error?.status?.[0] as ErrorKey
        const error = Errors[field]?.[code]?.[locale] ?? null
        const {loading, success} = userField
        return [loading, error, success]
    }
)

export const selectUser = createSelector([selectUserStore], (userStore) => userStore.user)

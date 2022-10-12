import {selectLocale} from 'redux/main/main.selectors'
import {createSelector} from '@reduxjs/toolkit'
import {AppState} from 'redux/store'
import {mapField} from 'utils/main/main.utils'
import {userErrors} from 'redux/user/user.content'
import {userSuccess} from 'redux/user/user.content'
import {GetUserField} from 'redux/user/user.types'

export const selectUserStore = (state: AppState) => state.user

export const selectUser = createSelector([selectUserStore], (userStore) => userStore.user)

export const getUserField: GetUserField = (state, field) => field

export const selectUserField = createSelector(
    [selectUserStore, selectLocale, getUserField], (userStore, locale, field) => {
        const userField = userStore.fields[field]
        return mapField(field, userField, locale, userErrors, userSuccess)
    }
)


import {selectLocale} from 'redux/main/main.selectors'
import {AppState} from 'redux/store'
import {mapField} from 'utils/main/main.utils'
import {userErrors} from 'redux/user/user.content'
import {userSuccess} from 'redux/user/user.content'
import {SelectUserField} from 'redux/user/user.types'
import {UserField} from 'redux/user/user.types'
import {createSelector} from '@reduxjs/toolkit'

export const selectUserStore = (state: AppState) => state.user

export const selectUser = createSelector([selectUserStore], (userStore) => {
    return userStore.user
})

export const selectUserField: SelectUserField = ((field: UserField) => {
    return createSelector(
        [selectUserStore, selectLocale], (userStore, locale) => {
            const userField = userStore.fields[field]
            return mapField(field, userField, locale, userErrors, userSuccess)
        }
    )
}) as SelectUserField
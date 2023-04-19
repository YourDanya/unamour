import {createSelector} from '@reduxjs/toolkit'
import {userErrors} from 'app/[locale]/_redux/user/user.content'
import {SelectUserField} from 'app/[locale]/_redux/user/user.types'
import {selectLocale} from 'app/[locale]/_redux/main/main.selectors'
import {UserField} from 'app/[locale]/_redux/user/user.types'
import {mapField} from 'app/[locale]/_common/utils/main/main.utils'
import {AppState} from 'app/[locale]/_redux/store'
import {userSuccess} from 'app/[locale]/_redux/user/user.content'

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
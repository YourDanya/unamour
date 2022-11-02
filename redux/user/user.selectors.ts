import {selectLocale} from 'redux/main/main.selectors'
import {AppState} from 'redux/store'
import {mapField} from 'utils/main/main.utils'
import {userErrors} from 'redux/user/user.content'
import {userSuccess} from 'redux/user/user.content'
import {SelectUserField} from 'redux/user/user.types'
import {UserField} from 'redux/user/user.types'
import {createSelector} from '@reduxjs/toolkit'

export const selectUserStore = (state: AppState) => state.user

export const selectUserFields = createSelector([selectUserStore], (userStore) => {
    // console.log('selecting user fields')
    return userStore.fields
})

export const selectUser = createSelector([selectUserStore], (userStore) => {
    // console.log('selecting user')
    return userStore.user
})

// export const getUserField: GetUserField = (state, field) => field

// export const selectUserField: SelectUserField = createSelector(
//     [selectUserFields, selectLocale, getUserField], (userFields, locale, field) => {
//         // console.log('selecting field', field)
//         const userField = userFields[field]
//         return mapField(field, userField, locale, userErrors, userSuccess)
//     }
// ) as SelectUserField

export const selectUserField: SelectUserField = ((field: UserField) => {
    return createSelector(
        [selectUserStore, selectLocale], (userStore, locale) => {
            const userField = userStore.fields[field]
            console.log('selecting field', field)
            return mapField(field, userField, locale, userErrors, userSuccess)
        }
    )
}) as SelectUserField
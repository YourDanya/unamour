import {selectLocale} from 'redux/main/main.selectors'
import {AppState} from 'redux/store'
import {mapField} from 'utils/main/main.utils'
import {userErrors} from 'redux/user/user.content'
import {userSuccess} from 'redux/user/user.content'
import {GetUserField} from 'redux/user/user.types'
import {SelectUserField} from 'redux/user/user.types'
import {createSelectorCreator} from 'reselect'
import {defaultMemoize} from 'reselect'
import {createSelector} from 'redux/store'

export const selectUserStore = (state: AppState) => state.user

export const selectUser = createSelector([selectUserStore], (userStore) => {
    console.log('selecting user')
    return userStore.user
})

export const getUserField: GetUserField = (state, field) => field

export const selectUserField: SelectUserField = createSelector(
    [selectUserStore, selectLocale, getUserField], (userStore, locale, field) => {
        console.log('selecting field', field)
        const userField = userStore.fields[field]
        return mapField(field, userField, locale, userErrors, userSuccess)
    }
) as SelectUserField


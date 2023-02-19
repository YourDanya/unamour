import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'
import {selectLocale} from 'redux/main/main.selectors'
import {StateField} from 'redux/store.types'
import {mapField} from 'utils/main/main.utils'
import {adminErrors} from 'redux/admin/admin.content'
import {adminSuccess} from 'redux/admin/admin.content'
import {WithClientErrValue} from 'redux/admin/admin.types'
import {getAdminClientErrors} from 'redux/admin/admin.content'
import {SelectAdminField} from 'redux/admin/admin.types'
import {checkEqual} from 'utils/main/main.utils'
import {SelectIsSlugUnique} from 'redux/admin/admin.types'
import {mapWithClientErrField} from 'utils/main/main.utils'

export const selectAdminStore = (state: AppState) => state.admin

export const selectAdminItems = createSelector([selectAdminStore],
    adminStore => adminStore.items
)

export const selectAdminField: SelectAdminField = ((field, _id) => {
    return createSelector(
        [selectAdminStore, selectLocale], (adminStore, locale) => {
            let adminField: StateField | Record<string, WithClientErrValue> | Record<string, StateField> | WithClientErrValue
                = adminStore.fields[field]
            if (field === 'updateItem' || field === 'createItem') {
                _id = _id as string
                adminField = (adminField as Record<string, WithClientErrValue>)[_id] as WithClientErrValue
                if (!adminField) {
                    adminField = {loading: false, success: false, error: {client: 0, server: null}}
                }
                const count = adminField.error.client
                return mapWithClientErrField({
                    field, locale, contentErrors: adminErrors, stateField: adminField, contentSuccess: adminSuccess,
                    clientErrors: () => getAdminClientErrors({field, locale, count})
                })
            } else if (field === 'deleteItem' || field === 'deleteItemImages' || field === 'updateItemImages' || field === 'createItemImages') {
                _id = _id as string
                adminField = (adminField as Record<string, StateField>)[_id]
                if (!adminField) {
                    adminField = {loading: false, success: false, error: null}
                }
            } else {
                adminField = adminField as StateField
            }
            return mapField(field, adminField, locale, adminErrors, adminSuccess)
        }, {memoizeOptions: {resultEqualityCheck: checkEqual}}
    )
}) as SelectAdminField

export const selectCheckSlug: SelectIsSlugUnique = (slug, index) => {
    return createSelector(
        [selectAdminItems], (items) => {
            for (let i = 0; i < items.length; i++) {
                if (items[i].common.slug === slug && i !== index) {
                    return false
                }
            }
            return true
        }
    )
}

// export const selectAdminFieldParams: SelectAdminFieldParams =
//     (state, field, _id) => ({field, _id})

// export const _selectAdminField = createSelector(
//     [selectAdminStore, selectLocale, selectAdminFieldParams],
//     (adminStore, locale, {field, _id}) => {
//         if (typeof _id === 'string') {
//             console.log('_selector', _id[_id.length - 2] + _id[_id.length - 1])
//         }
//         let adminField: Record<string, WithClientErrValue> | StateField | WithClientErrValue = adminStore.fields[field]
//         if (!('success' in adminField) && _id) {
//             field = field as 'updateItem'
//             adminField = (adminField as Record<string, WithClientErrValue>)[_id] as WithClientErrValue
//             if (!adminField) {
//                 adminField = {loading: false, success: false, error: {client: 0, server: null}}
//             }
//             const {error, ...otherAdminField} = adminField
//             const {error: server, ...otherMappedField} = mapField(
//                 field,
//                 {...otherAdminField, error: error.server},
//                 locale,
//                 adminErrors,
//                 adminSuccess
//             )
//             let client = ''
//             if (error.client) client = getAdminClientErrors({field, locale, count: error.client})
//             return {...otherMappedField, error: {server, client}}
//         } else {
//             adminField = adminField as StateField
//             return mapField(field, adminField, locale, adminErrors, adminSuccess)
//         }
//     }, {memoizeOptions: {resultEqualityCheck: checkEqual}}
// )
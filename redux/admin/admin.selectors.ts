import {AppState} from 'redux/store'
import {AdminField} from 'redux/admin/admin.types'
import {createSelector} from '@reduxjs/toolkit'
import {selectLocale} from 'redux/main/main.selectors'
import {StateField} from 'redux/store.types'
import {AdminObjField} from 'redux/admin/admin.types'
import {mapField} from 'utils/main/main.utils'
import {adminErrors} from 'redux/admin/admin.content'
import {adminSuccess} from 'redux/admin/admin.content'
import {SelectField} from 'redux/store.types'

export const selectAdminStore = (state: AppState) => state.admin

export const selectAdminField = (field: AdminField | AdminObjField) => {
    return createSelector(
        [selectAdminStore, selectLocale], (adminStore, locale) => {
        let adminField : Record<string, StateField> | StateField = adminStore.fields[field]
        if (!('success' in adminField)) {
            adminField = (adminField as Record<string, StateField>)
            return Object.entries(adminField).reduce((accum, [slug, slugValue]) => {
                accum[slug] = mapField(field, slugValue, locale, adminErrors, adminSuccess)
                return accum
            }, {} as Record<keyof typeof adminField, SelectField>)
        }
        else {
            adminField = adminField as StateField
            return mapField(field, adminField, locale, adminErrors, adminSuccess)
        }
    })
}
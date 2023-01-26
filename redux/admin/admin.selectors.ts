import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'
import {selectLocale} from 'redux/main/main.selectors'
import {StateField} from 'redux/store.types'
import {mapField} from 'utils/main/main.utils'
import {adminErrors} from 'redux/admin/admin.content'
import {adminSuccess} from 'redux/admin/admin.content'
import {UpdateItemValue} from 'redux/admin/admin.types'
import {getAdminClientErrors} from 'redux/admin/admin.content'
import {SelectAdminField} from 'redux/admin/admin.types'

export const selectAdminStore = (state: AppState) => state.admin

export const selectAdminField: SelectAdminField = ((field, slug) => {
    return createSelector(
        [selectAdminStore, selectLocale], (adminStore, locale) => {
            let adminField: Record<string, UpdateItemValue> | StateField | UpdateItemValue = adminStore.fields[field]
            if (!('success' in adminField) && slug) {
                field = field as 'updateItem'
                adminField = (adminField as Record<string, UpdateItemValue>)[slug] as UpdateItemValue
                if (!adminField) {
                    adminField = {loading: false, success: false, error: {client: 0, server: null}, newSlug: ''}
                }
                const {error, newSlug, ...otherAdminField} = adminField
                const {error: server, ...otherMappedField} = mapField(
                    field,
                    {...otherAdminField, error: error.server},
                    locale,
                    adminErrors,
                    adminSuccess
                )
                let client = ''
                if (error.client) client = getAdminClientErrors({field, locale, count: error.client})
                console.log('element', adminField)
                return {...otherMappedField, error: {client, server}, newSlug}
            } else {
                adminField = adminField as StateField
                return mapField(field, adminField, locale, adminErrors, adminSuccess)
            }
        }
    )
}) as SelectAdminField
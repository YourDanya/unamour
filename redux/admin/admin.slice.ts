import {createSlice} from '@reduxjs/toolkit'
import {StateField} from 'redux/store.types'
import {HYDRATE} from 'next-redux-wrapper'
import {AdminState} from 'redux/admin/admin.types'
import {UpdateItemValue} from 'redux/admin/admin.types'
import {SetAdminFieldStartAction} from 'redux/admin/admin.types'
import {SetAdminFieldFailureAction} from 'redux/admin/admin.types'
import {ResetAdminFieldSuccessAction} from 'redux/admin/admin.types'
import {SetAdminFieldSuccessAction} from 'redux/admin/admin.types'
import {SetAdminFieldAction} from 'redux/admin/admin.types'

const initialState: AdminState = {
    fields: {
        updateItem: {},
        updateItems: {loading: false, success: false, error: null}
    }
}

export const userSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminFieldStart: (state, action: SetAdminFieldStartAction) => {
            const {field, slug} = action.payload
            if (slug) {
                (state.fields[field] as Record<string, UpdateItemValue>)[slug].loading = true
            } else {
                (state.fields[field] as StateField).loading = true
            }
        },
        setAdminFieldFailure: (state, action: SetAdminFieldFailureAction) => {
            const {field, error, slug} = action.payload
            if (slug) {
                (state.fields[field] as Record<string, UpdateItemValue>) [slug] =
                    {loading: false, success: false, error: {server: error, client: 0}}
            } else {
                (state.fields[field] as StateField) = {loading: false, success: false, error}
            }
        },
        setAdminFieldSuccess: (state, action: SetAdminFieldSuccessAction) => {
            const {field, slug} = action.payload
            if (slug) {
                (state.fields[field] as Record<string, UpdateItemValue>) [slug] =
                    {loading: false, success: false, error: {server: null, client: 0}}
            } else {
                (state.fields[field] as StateField) = {loading: false, success: false, error: null}
            }
        },
        resetAdminFieldSuccess: (state, action: ResetAdminFieldSuccessAction) => {
            const {field, slug} = action.payload
            if (slug) {
                (state.fields[field] as Record<string, UpdateItemValue>)[slug].success = false
            } else {
                (state.fields[field] as StateField).success = false
            }
        },
        setAdminField: (state, action: SetAdminFieldAction) => {
            const {field, slug, value} = action.payload
            if (slug) {
                ((state.fields[field] as Record<string, UpdateItemValue>)[slug] as UpdateItemValue) =
                    {...(state.fields[field] as Record<string, UpdateItemValue>)[slug], ...(value as Partial<UpdateItemValue>)}
            } else {
                (state.fields[field] as StateField) = {...state.fields[field] as StateField, ...(value as Partial<StateField>)}
            }
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {
    setAdminFieldStart, setAdminFieldFailure, setAdminFieldSuccess, setAdminField, resetAdminFieldSuccess
} = userSlice.actions

export default userSlice.reducer
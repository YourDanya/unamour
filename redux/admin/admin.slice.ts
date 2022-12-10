import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {StateError} from 'redux/store.types'
import {StateField} from 'redux/store.types'
import {HYDRATE} from 'next-redux-wrapper'
import {AdminState} from 'redux/admin/admin.types'
import {AdminObjField} from 'redux/admin/admin.types'
import {AdminField} from 'redux/admin/admin.types'
import {updateItemValue} from 'redux/admin/admin.types'

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
        adminFieldStart: (state, action: PayloadAction<{ field: AdminObjField | AdminField, slug: string }>) => {
            const {field, slug} = action.payload
            if (slug) {
                (state.fields[field] as Record<string, updateItemValue>)[slug].loading = true
            } else {
                (state.fields[field] as StateField).loading = true
            }
        },
        adminFieldFailure: (state, action: PayloadAction<{
            error: StateError, field: AdminObjField | AdminField, slug: string
        }>) => {
            const {field, error, slug} = action.payload
            const {timer} = error
            if (slug) {
                (state.fields[field] as Record<string, updateItemValue>) [slug] =
                    {loading: false, success: false, error: {server: error, client: 0}, ...(timer) && {timer}}
            } else {
                (state.fields[field] as StateField) = {loading: false, success: false, error, ...(timer) && {timer}}
            }

        },
        adminFieldSuccess: (state, action: PayloadAction<{
            field: AdminObjField | AdminField, slug: string
        }>) => {
            const {field, slug} = action.payload
            if (slug) {
                (state.fields[field] as Record<string, updateItemValue>) [slug] =
                    {loading: false, success: false, error: {server: null, client: 0}}
            } else {
                const {timer} = (state.fields[field] as StateField);
                (state.fields[field] as StateField) = {loading: false, success: false, error: null, ...(timer) && {timer}}
            }
        },
        // resetAdminTimer: (state, action: PayloadAction<{
        //     field: AdminObjField | AdminField, slug: string
        // }> ) => {
        //     const {field, slug} = action.payload
        //     if (slug) {
        //         (state.fields[field] as Record<string, updateItemValue>)[slug].timer = 0
        //     } else {
        //         (state.fields[field] as StateField).timer = 0
        //     }
        // },
        resetAdminSuccess: (state, action: PayloadAction <{
            field: AdminObjField | AdminField, slug: string
        }> ) => {
            const {field, slug} = action.payload
            if (slug) {
                (state.fields[field] as Record<string, updateItemValue>)[slug].success = false
            } else {
                (state.fields[field]  as StateField).success = false
            }
        },
        setAdminField: (state, action: PayloadAction<
            {field: AdminObjField | AdminField, slug: string, value: Partial<updateItemValue> | Partial<StateField>}>) => {
            const {field, slug, value} = action.payload
            // Object.entries(value).forEach((entry) => {
            //     const [key, val] = entry as Entry<StateField>
            //     if (slug) {
            //         ((state.fields[field] as Record<string, StateField>) [slug][key] as typeof val) = val
            //     } else {
            //         ((state.fields[field] as StateField)[key] as typeof val) = val
            //     }
            // })
            if (slug) {
                ((state.fields[field] as Record<string, updateItemValue>)[slug] as updateItemValue) =
                    {...(state.fields[field] as Record<string, updateItemValue>)[slug], ...(value as Partial<updateItemValue>)}
            } else {
                (state.fields[field] as StateField) = {...state.fields[field] as StateField, ...(value as Partial<StateField>)}
            }
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {
    adminFieldStart, adminFieldFailure, adminFieldSuccess, setAdminField, resetAdminSuccess,
} = userSlice.actions

export default userSlice.reducer
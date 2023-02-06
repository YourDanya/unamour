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
import {DeleteUpdateItemFieldAction} from 'redux/admin/admin.types'

const initialState: AdminState = {
    fields: {
        updateItem: {},
        createItem: {},
        deleteItem: {},
        updateItems: {loading: false, success: false, error: null},
    }
}

export const userSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminFieldStart: (state, action: SetAdminFieldStartAction) => {
            const {field, _id} = action.payload
            if (_id !== undefined) {
                let updateItemValue = (state.fields[field] as Record<string, UpdateItemValue>)[_id]
                if(!updateItemValue) {
                    updateItemValue = {loading: true, error: {server: null, client: 0}, success: false}
                } else {
                    updateItemValue.loading = true
                }
                (state.fields[field] as Record<string, UpdateItemValue>)[_id] = updateItemValue
            } else {
                (state.fields[field] as StateField).loading = true
            }
        },
        setAdminFieldFailure: (state, action: SetAdminFieldFailureAction) => {
            const {field, error, _id} = action.payload
            if (_id) {
                (state.fields[field] as Record<string, UpdateItemValue>) [_id] =
                    {loading: false, success: false, error: {server: error, client: 0}}
            } else {
                (state.fields[field] as StateField) = {loading: false, success: false, error}
            }
        },
        setAdminFieldSuccess: (state, action: SetAdminFieldSuccessAction) => {
            let {field, _id} = action.payload
            if (_id !== undefined) {
                _id = _id as string
                (state.fields[field] as Record<string, UpdateItemValue>) [_id] =
                    {loading: false, success: true, error: {server: null, client: 0}}
                if (field === 'createItem') {
                    state.fields['createItem'][''] =
                        {loading: false, success: false, error: {server: null, client: 0}}
                }
            }
            else {
                (state.fields[field] as StateField) = {loading: false, success: true, error: null}
            }
        },
        resetAdminFieldSuccess: (state, action: ResetAdminFieldSuccessAction) => {
            const {field, _id} = action.payload
            if (_id) {
                (state.fields[field] as Record<string, UpdateItemValue>)[_id].success = false
            } else {
                (state.fields[field] as StateField).success = false
            }
        },
        setAdminField: (state, action: SetAdminFieldAction) => {
            const {field, _id, value} = action.payload
            if (_id !== undefined) {
                ((state.fields[field] as Record<string, UpdateItemValue>)[_id] as UpdateItemValue) =
                    {...(state.fields[field] as Record<string, UpdateItemValue>)[_id], ...(value as Partial<UpdateItemValue>)}
            } else {
                (state.fields[field] as StateField) = {...state.fields[field] as StateField, ...(value as Partial<StateField>)}
            }
        },
        deleteUpdateItemField: (state, action: DeleteUpdateItemFieldAction) => {
            const {_id} = action.payload
            delete state.fields['updateItem'][_id]
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {
    setAdminFieldStart, setAdminFieldFailure, setAdminFieldSuccess, setAdminField, resetAdminFieldSuccess,
    deleteUpdateItemField
} = userSlice.actions

export default userSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import {StateField} from 'redux/store.types'
import {HYDRATE} from 'next-redux-wrapper'
import {AdminState} from 'redux/admin/admin.types'
import {WithClientErrValue} from 'redux/admin/admin.types'
import {SetAdminFieldStartAction} from 'redux/admin/admin.types'
import {SetAdminFieldFailureAction} from 'redux/admin/admin.types'
import {ResetAdminFieldSuccessAction} from 'redux/admin/admin.types'
import {SetAdminFieldSuccessAction} from 'redux/admin/admin.types'
import {SetAdminFieldAction} from 'redux/admin/admin.types'
import {DeleteUpdateItemFieldAction} from 'redux/admin/admin.types'
import {PayloadAction} from '@reduxjs/toolkit'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {SetAdminItemsAction} from 'redux/admin/admin.types'

const initialState: AdminState = {
    fields: {
        updateItem: {},
        createItem: {},
        deleteItem: {},
        createItemImages: {},
        deleteItemImages: {},
        updateItemImages: {},
        getItems: {loading: false, success: false, error: null},
    },
    items: [],
}

export const userSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminFieldStart: (state, action: SetAdminFieldStartAction) => {
            const {field, _id} = action.payload
            if (_id !== undefined) {
                let withClientErrValue = (state.fields[field] as Record<string, WithClientErrValue>)[_id]
                if(!withClientErrValue) {
                    withClientErrValue = {loading: true, error: {server: null, client: 0}, success: false}
                } else {
                    withClientErrValue.loading = true
                }
                (state.fields[field] as Record<string, WithClientErrValue>)[_id] = withClientErrValue
            } else {
                (state.fields[field] as StateField).loading = true
            }
        },
        setAdminFieldFailure: (state, action: SetAdminFieldFailureAction) => {
            const {field, error, _id} = action.payload
            if (_id) {
                (state.fields[field] as Record<string, WithClientErrValue>) [_id] =
                    {loading: false, success: false, error: {server: error, client: 0}}
            } else {
                (state.fields[field] as StateField) = {loading: false, success: false, error}
            }
        },
        setAdminFieldSuccess: (state, action: SetAdminFieldSuccessAction) => {
            let {field, _id} = action.payload
            console.log('success', field)
            if (_id !== undefined) {
                _id = _id as string
                (state.fields[field] as Record<string, WithClientErrValue>) [_id] =
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
                (state.fields[field] as Record<string, WithClientErrValue>)[_id].success = false
            } else {
                (state.fields[field] as StateField).success = false
            }
        },
        setAdminField: (state, action: SetAdminFieldAction) => {
            const {field, _id, value} = action.payload
            if (_id !== undefined) {
                ((state.fields[field] as Record<string, WithClientErrValue>)[_id] as WithClientErrValue) =
                    {...(state.fields[field] as Record<string, WithClientErrValue>)[_id], ...(value as Partial<WithClientErrValue>)}
            } else {
                (state.fields[field] as StateField) = {...state.fields[field] as StateField, ...(value as Partial<StateField>)}
            }
        },
        deleteUpdateItemField: (state, action: DeleteUpdateItemFieldAction) => {
            const {_id} = action.payload
            delete state.fields['updateItem'][_id]
        },

        setAdminItems : (state, action: SetAdminItemsAction) => {
            state.items = action.payload.items
        },
        setAdminItem: (state, action: PayloadAction<FetchedItem>) => {
            let index = state.items.findIndex(item => item._id === action.payload._id)
            if (index === -1) {
                index = state.items.findIndex(item => item._id === '')
            }
            state.items[index] = action.payload
        },
        addAdminItem: (state, action: PayloadAction<FetchedItem>) => {
            state.items.push(action.payload)
        },
        setAdminItemDeleted: (state, action: PayloadAction<string>) => {
            const index = state.items.findIndex(item => item._id === action.payload)
            state.items[index].deleted = true
        },
        removeAdminDeletedItem: (state) => {
            const index = state.items.findIndex(item => item.deleted || !item._id)
            state.items.splice(index, 1)
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {
    setAdminFieldStart, setAdminFieldFailure, setAdminFieldSuccess, setAdminField, resetAdminFieldSuccess,
    removeAdminDeletedItem, addAdminItem, setAdminItemDeleted, setAdminItem, deleteUpdateItemField,
    setAdminItems
} = userSlice.actions

export default userSlice.reducer
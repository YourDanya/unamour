import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {ClientItem, FetchedItem, ShopItemsState} from './shop-items.types'
import {ServerError} from 'redux/store.types'

const initialState: ShopItemsState = {
    fetchedItems: [],
    categoryItems: [],
    fields: {
        getItems: {error: null, success: false, loading: false}
    }
}

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        getItemsSuccess: (state, action: PayloadAction<FetchedItem[]>) => {
            state.fetchedItems = action.payload
            console.log('fetch items success')
        },
        getItemsError: (state, action: PayloadAction<ServerError>) => {
            state.fields.getItems = {loading: false, success: false, error: action.payload}
            console.log('fetch items error')
        },
        setClientItems: (state, action: PayloadAction<ClientItem[]>) => {
            // state.clientItems = action.payload
        },
        setFetchedItem: (state, action: PayloadAction<FetchedItem>) => {
            let index = state.fetchedItems.findIndex(item => item._id === action.payload._id)
            if (index === -1) {
                index = state.fetchedItems.findIndex(item => item._id === '')
            }
            console.log('index', index)
            state.fetchedItems[index] = action.payload
        },
        addItem: (state, action: PayloadAction<FetchedItem>) => {
            state.fetchedItems.push(action.payload)
        },
        setItemDeleted: (state, action: PayloadAction<string>) => {
            const index = state.fetchedItems.findIndex(item => item._id === action.payload)
            state.fetchedItems[index].deleted = true
        },
        removeDeletedItem: (state) => {
            const index = state.fetchedItems.findIndex(item => item.deleted || !item._id)
            state.fetchedItems.splice(index, 1)
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            // state.categoryItems = [...action.payload.shopItems.categoryItems]
        }
    }
})

export const {getItemsSuccess, getItemsError, setClientItems, setFetchedItem, addItem, setItemDeleted, removeDeletedItem}
    = shopItemsSlice.actions


export default shopItemsSlice.reducer
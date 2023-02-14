import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {FetchedItem, ShopItemsState} from './shop-items.types'
import {ShopItemsField} from './shop-items.types'
import {ServerError} from 'redux/store.types'
import {CategoryItem} from './shop-items.types'

const initialState: ShopItemsState = {
    fetchedItems: [],
    searchItems: [],
    viewedItems: [],
    fields: {
        getItems: {error: null, success: false, loading: false},
        searchItems: {error: null, success: false, loading: false}
    }
}

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        setShopItemFieldStart: (state, action: PayloadAction<ShopItemsField>) => {
            state.fields[action.payload].loading = true
        },
        setShopItemFieldFailure: (state, action: PayloadAction<{field: ShopItemsField, error: ServerError}>) => {
            const {field, error} = action.payload
            state.fields[field] = {loading: false, success: false, error}
        },
        setShopItemFieldSuccess: (state, action: PayloadAction<ShopItemsField>) => {
            state.fields[action.payload] = {success: true, loading: false, error: null}
        },
        resetShopItemFieldSuccess: (state, action: PayloadAction<ShopItemsField>) => {
            state.fields[action.payload].success = false
        },
        setSearchItems: (state, action: PayloadAction<CategoryItem[]>) => {
            state.searchItems = action.payload
        },

        setFetchedItem: (state, action: PayloadAction<FetchedItem>) => {
            let index = state.fetchedItems.findIndex(item => item._id === action.payload._id)
            if (index === -1) {
                index = state.fetchedItems.findIndex(item => item._id === '')
            }
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

export const {
    setShopItemFieldStart, setShopItemFieldFailure, setShopItemFieldSuccess, resetShopItemFieldSuccess,
    setFetchedItem, addItem, setItemDeleted, removeDeletedItem, setSearchItems
} = shopItemsSlice.actions


export default shopItemsSlice.reducer
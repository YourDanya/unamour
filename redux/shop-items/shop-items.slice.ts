import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {ShopItemsState} from './shop-items.types'
import {ShopItemsField} from './shop-items.types'
import {ServerError} from 'redux/store.types'
import {CategoryItem} from './shop-items.types'

const initialState: ShopItemsState = {
    searchItems: [],
    viewedItems: [],
    fields: {
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
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            // state.categoryItems = [...action.payload.shopItems.categoryItems]
        }
    }
})

export const {
    setShopItemFieldStart, setShopItemFieldFailure, setShopItemFieldSuccess, resetShopItemFieldSuccess, setSearchItems
} = shopItemsSlice.actions


export default shopItemsSlice.reducer
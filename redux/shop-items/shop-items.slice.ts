import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper"
import {ClientItem, FetchedItem, ShopItemsState} from "./shop-items.types"
import {ServerError} from 'redux/store.types'

const initialState: ShopItemsState = {
    fetchedItems: [],
    clientItems: [],
    fields: {
        getItems : {error: null, success: false, loading: false}
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
            state.clientItems = action.payload
        },
        setFetchedItem: (state, action: PayloadAction<FetchedItem>) => {
            const index = state.fetchedItems.findIndex(item => item._id = action.payload._id)
            state.fetchedItems[index] = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.clientItems = [...action.payload.shopItems.clientItems]
        },
    }
})

export const {getItemsSuccess, getItemsError,  setClientItems, setFetchedItem} = shopItemsSlice.actions


export default shopItemsSlice.reducer
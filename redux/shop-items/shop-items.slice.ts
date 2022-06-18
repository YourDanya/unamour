import {
    createSelector,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";
import {AppState, AppThunk} from "../store";


export type shopItemsState = {
    items: object[],
    error: object | null
}

const initialState: shopItemsState = {
    items: [],
    error: null
}

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        fetchItemsSuccess: (state, action: PayloadAction<object[]>) => {
            state.items = action.payload
        },
        fetchItemsError: (state, action: PayloadAction<any>) => {
            state.error= action.payload.message
        },
        resetItems: (state) => {
            state.items = []
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.items =[...state.items, ...action.payload.shopItems.items]
        },
    }
})

export const {fetchItemsSuccess, fetchItemsError, resetItems} = shopItemsSlice.actions

export const selectShopItemsStore = (state: AppState) => state.shopItems
export const selectShopItems = createSelector(
    [selectShopItemsStore],
    shopItems => shopItems.items
)

export default shopItemsSlice.reducer
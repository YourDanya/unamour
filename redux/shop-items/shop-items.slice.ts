import {createAsyncThunk, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";
import {AppDispatch, AppState, AppThunk} from "../store";
import {Api} from "../../utils/api-utils";
import axios from "axios";
import {increment} from "../counter/counter.slice";

export type shopItemsState = {
    items: object[]
}

const initialState: shopItemsState = {
    items: []
}

export const ApiCall = (): AppThunk =>{
    return async (dispatch: AppDispatch) => {
        console.log('get data')
        const res= await axios.get('https://jsonplaceholder.typicode.com/todos/')
        return dispatch(increment())
    }
}

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<object[]>) => {
            state.items = action.payload
        },
        resetItems: (state) => {
            state.items = []
        },
        getItems: () => {

        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.items = action.payload.shopItems.items
        },
    }
})

export const {setItems, resetItems} = shopItemsSlice.actions

export const selectShopItemsStore = (state: AppState) => state.shopItems
export const selectShopItems = createSelector(
    [selectShopItemsStore],
    shopItems => shopItems.items
)

export default shopItemsSlice.reducer
import {
    createSelector,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper"
import {AppState} from "../store"

export type ShopItemObject = {
    ua: {
        name: string,
        category: string,
        slug: string,
        slugCategory: string,
        price: number,
        oldPrice: number,
        images: [string],
        sizes: [string],
        color: string,
        otherColors: [{code: string, ref: string, name: string}],
        isAvailable: boolean,
        description: string,
        composition: string,
        parameters: string,
        delivery: string
    },
    eng: {
        name: string,
        category: string,
        slug: string,
        slugCategory: string,
        price: number,
        oldPrice: number,
        images: [string],
        sizes: [string],
        color: string,
        otherColors: [{code: string, ref: string, name: string}],
        isAvailable: boolean,
        description: string,
        composition: string,
        parameters: string,
        delivery: string
    },
    ru: {
        name: string,
        category: string,
        slug: string,
        slugCategory: string,
        price: number,
        oldPrice: number,
        images: [string],
        sizes: [string],
        color: string,
        otherColors: [{code: string, ref: string, name: string}],
        isAvailable: boolean,
        description: string,
        composition: string,
        parameters: string,
        delivery: string
    }
}

export type shopItemsState = {
    items: ShopItemObject[],
    error: object | null,
    categories: string[]
}

const initialState: shopItemsState = {
    items: [],
    error: null,
    categories: []
}

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        fetchItemsSuccess: (state, action: PayloadAction<ShopItemObject[]>) => {
            state.items = action.payload
        },
        fetchItemsError: (state, action: PayloadAction<any>) => {
            state.error = action.payload.message
        },
        setCategories: (state, action: PayloadAction<string[]>) => {

        },
        resetItems: (state) => {
            state.items = []
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.items = [...state.items, ...action.payload.shopItems.items]
        },
    }
})

export const {fetchItemsSuccess, fetchItemsError, resetItems, setCategories} = shopItemsSlice.actions

export const selectShopItemsStore = (state: AppState) => state.shopItems
export const selectShopItems = createSelector(
    [selectShopItemsStore],
    shopItems => shopItems.items
)

export default shopItemsSlice.reducer
import {
    createSelector,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper"
import {AppState} from "../store"
import {LocaleType} from "../../pages/shop-items/[[...slug]]";

export type ShopItemObject = {
    ua: {
        name: string,
        category: string,
        slug: string,
        slugCategory: string,
        price: number,
        oldPrice: number,
        images: string[],
        sizes: string[],
        color: { code: string, name: string },
        otherColors: { code: string, ref: string, name: string }[],
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
        images: string[],
        sizes: string[],
        color: string,
        otherColors: { code: string, ref: string, name: string }[],
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
        images: string [],
        sizes: string [],
        color: string,
        otherColors: { code: string, ref: string, name: string } [],
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
    categories: [
        'all',
        'best',
        'new',
        'coming',
        'special-price',
        'eco-leather',
        'dresses',
        'skirts',
        'shirts-and-blouses',
        'tops-and-bodies',
        'jackets-and-vets',
        'pants-and-shorts',
        'overalls',
        'jersey',
        'swimwear',
        'top-cloth',
        'sets',
        'accessories'
    ]
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
            state.items = [...action.payload.shopItems.items]
        },
    }
})

export const {fetchItemsSuccess, fetchItemsError, resetItems, setCategories} = shopItemsSlice.actions

export const selectShopItemsStore = (state: AppState) => state.shopItems

export const selectShopItems = (locale: LocaleType) =>
    createSelector([selectShopItemsStore],
        shopItems => shopItems.items.map(item => item[locale])
    )

export default shopItemsSlice.reducer
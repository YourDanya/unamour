import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper"
import {AppState} from "../store"
import {ClientItem, FetchedItem, ShopItemsState} from "./shop-items.types"

const initialState: ShopItemsState = {
    fetchedItems: [],
    clientItems: [],
    error: null,
    categories: [
        {
            slug: 'all',
            ua: 'подивитись усе',
            eng: 'view all',
            ru: 'посмотреть все'
        },
        {
            slug: 'best',
            ua: 'найкраще',
            eng: 'the best',
            ru: 'лучшее'
        },
        {
            slug: 'new',
            ua: 'Подивитись нове',
            eng: 'view new',
            ru: 'Посмотреть новое'
        },
        {
            slug: 'coming',
            ua: 'скоро буде',
            eng: 'coming soon',
            ru: 'скоро будет'
        },
        {
            slug: 'special-price',
            ua: 'спеціальна ціна',
            eng: 'special price',
            ru: 'специальная цена'
        },
        {
            slug: 'eco-leather',
            ua: 'екошкіра',
            eng: 'eco leather',
            ru: 'экокожа'
        },
        {
            slug: 'dresses',
            ua: 'сукні',
            eng: 'dresses',
            ru: 'платья'
        },
        {
            slug: 'skirts',
            ua: 'спідниці',
            eng: 'skirts',
            ru: 'юбки'
        },
        {
            slug: 'shirts-and-blouses',
            ua: 'сорочки та блузки',
            eng: 'shirts and blouses',
            ru: 'рубашки и блузки'
        },
        {
            slug: 'tops-and-bodies',
            ua: 'топи та боді',
            eng: 'tops and bodies',
            ru: 'топы и боди'
        },
        {
            slug: 'jackets-and-vests',
            ua: 'куртки та жилети',
            eng: 'jackets and vests',
            ru: 'куртки и жилеты'
        },
        {
            slug: 'pants-and-shorts',
            ua: 'брюки та шорти',
            eng: 'pants and shorts',
            ru: 'брюки и шорты'
        },
        {
            slug: 'overalls',
            ua: 'комбінезони',
            eng: 'overalls',
            ru: 'комбинезоны'
        },
        {
            slug: 'jersey',
            ua: 'трикотаж',
            eng: 'jersey',
            ru: 'трикотаж'
        },
        {
            slug: 'swimwear',
            ua: 'купальники',
            eng: 'swimwear',
            ru: 'купальники'
        },
        {
            slug: 'top-cloth',
            ua: 'верхняя оежда',
            eng: 'top cloth',
            ru: 'верхній одяг'
        },
        {
            slug: 'sets',
            ua: 'комплекти',
            eng: 'sets',
            ru: 'комплекты'
        },
        {
            slug: 'accessories',
            ua: 'аксесуари',
            eng: 'accessories',
            ru: 'аксессуары'
        }
    ]
}

export const shopItemsSlice = createSlice({
    name: 'shopItems',
    initialState,
    reducers: {
        fetchItemsSuccess: (state, action: PayloadAction<FetchedItem[]>) => {
            state.fetchedItems = action.payload
        },
        fetchItemsError: (state, action: PayloadAction<any>) => {
            state.error = action.payload.message
        },
        setClientItems: (state, action: PayloadAction<ClientItem[]>) => {
            state.clientItems = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.clientItems = [...action.payload.shopItems.clientItems]
        },
    }
})

export const {fetchItemsSuccess, fetchItemsError,  setClientItems} = shopItemsSlice.actions

export const selectClientItemsStore = (state: AppState) => state.shopItems

export const selectFetchedItems = createSelector([selectClientItemsStore],
    shopItems => shopItems.fetchedItems
)

export const selectClientItems = createSelector([selectClientItemsStore], items => items.clientItems)

export default shopItemsSlice.reducer
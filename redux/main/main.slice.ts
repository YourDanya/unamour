import {Locale, MainState} from "./main.types"
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"
import {AppState} from "../store"

const initialState: MainState = {
    locale: 'ua',
    path: '/'
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<Locale>) => {
            state.locale = action.payload
        },
        setPath: (state, action: PayloadAction<string>) => {
            state.path = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {setLocale, setPath} = mainSlice.actions

export const selectMainStore = (state: AppState) => state.main

export const selectLocale = createSelector(
    [selectMainStore], mainStore => mainStore.locale
)

export const selectPath = createSelector(
    [selectMainStore], mainStore => mainStore.path
)

export default mainSlice.reducer
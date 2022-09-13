import {Locale, MainState} from "./main.types"
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"
import {AppState, AppStore} from "../store"

const initialState: MainState = {
    locale: 'ua'
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<Locale>) => {
            state.locale = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {setLocale} = mainSlice.actions

export const selectMainStore = (state: AppState) => state.main

export const selectLocale = createSelector(
    [selectMainStore], mainStore => mainStore.locale
)

export default mainSlice.reducer
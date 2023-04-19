import {Locale, MainState} from "./main.types"
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"

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

export default mainSlice.reducer
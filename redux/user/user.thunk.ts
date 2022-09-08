import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"
import {actionsReducer} from "@reduxjs/toolkit/src/query/tests/helpers";

export type UserState = {
    user : null | object
}

const initialState: UserState = {
    user : null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<>) => {
            state.user = action.payload
        },
        setError: (state) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})
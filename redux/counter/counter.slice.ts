import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "../store";

export type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('state value', state.value)
            console.log('action value', action.payload.counter.value)
            console.log(action.type.app)
            return {
                value: state.value + action.payload.counter.value
            }
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export const selectCounter = (state: AppState) => state.counter
export const selectCounterValue = createSelector(
    [selectCounter],
    counter => counter.value
)

export default counterSlice.reducer
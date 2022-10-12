import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {TestState} from 'redux/test/test.types'

const initialState: TestState = {
    x: 0,
    y: 0
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        incrX: (state, action: PayloadAction) => {
            state.x+=1
        },
        decrX: (state, action: PayloadAction) => {
            state.x-=1
        },
        incrY: (state, action: PayloadAction) => {
            state.y+=1
        },
        decrY: (state, action: PayloadAction) => {
            state.y-=1
        },
        incrYDecrX: (state, action: PayloadAction) => {
            state.y+=1
            state.x-=1
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {incrX, incrY, decrX, decrY, incrYDecrX} = testSlice.actions

export default testSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {CartState} from 'redux/cart/cart.types'
import {CartData} from 'redux/cart/cart.types'

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartData>) => {
            const itemIndex = state.items.findIndex(item => item.data.slug === action.payload.slug && item.data.size === action.payload.size)
            console.log(itemIndex)
            if (itemIndex===-1) {
                state.items.push({data: action.payload, quantity: 1})
            } else {
                state.items[itemIndex].quantity++
            }
        },
        removeItem: (state, action: PayloadAction<{slug: string, size: string}>) => {
            const itemIndex = state.items.findIndex(item => item.data.slug === action.payload.slug && item.data.size === action.payload.size)
            if (itemIndex!==-1) {
                state.items.splice(itemIndex)
            }
        },
        increaseQuantity: (state, action: PayloadAction<{slug: string, size: string}>) => {
            const itemIndex = state.items.findIndex(item => item.data.slug === action.payload.slug && item.data.size === action.payload.size)
            if (itemIndex!==-1) {
                state.items[itemIndex].quantity++
            }
        },
        decreaseQuantity: (state, action: PayloadAction<{slug: string, size: string}>) => {
            const itemIndex = state.items.findIndex(item => item.data.slug === action.payload.slug && item.data.size === action.payload.size)
            if (itemIndex!==-1) {
                if (state.items[itemIndex].quantity === 1) {
                    state.items.splice(itemIndex)
                }
                else {
                    state.items[itemIndex].quantity--
                }
            }
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {addItem, removeItem, increaseQuantity, decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer
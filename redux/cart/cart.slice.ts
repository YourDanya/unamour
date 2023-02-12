import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {CartState} from 'redux/cart/cart.types'
import {CartItem} from 'redux/cart/cart.types'

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common.slug === action.payload.common.slug && item.common.size === action.payload.common.size
            })
            console.log(itemIndex)
            if (itemIndex===-1) {
                state.items.push(action.payload)
            } else {
                state.items[itemIndex].quantity++
            }
        },
        removeItem: (state, action: PayloadAction<{slug: string, size: string}>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common.slug === action.payload.slug && item.common.size === action.payload.size
            })
            if (itemIndex!==-1) {
                state.items.splice(itemIndex)
            }
        },
        increaseQuantity: (state, action: PayloadAction<{slug: string, size: string}>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common.slug === action.payload.slug && item.common.size === action.payload.size
            })
            if (itemIndex!==-1) {
                state.items[itemIndex].quantity++
            }
        },
        decreaseQuantity: (state, action: PayloadAction<{slug: string, size: string}>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common.slug === action.payload.slug && item.common.size === action.payload.size
            })
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
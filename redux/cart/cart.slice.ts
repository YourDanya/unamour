import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {CartState} from 'redux/cart/cart.types'
import {CartItem} from 'redux/cart/cart.types'

const initialState: CartState = {
    items: [],
    orderId: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common._id === action.payload.common._id
            })
            if (itemIndex===-1) {
                state.items.push(action.payload)
            } else {
                state.items[itemIndex].quantity++
            }
        },
        removeItem: (state, action: PayloadAction<{_id: string}>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common._id === action.payload._id
            })
            if (itemIndex!==-1) {
                state.items.splice(itemIndex, 1)
            }
        },
        increaseQuantity: (state, action: PayloadAction<{_id: string}>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common._id === action.payload._id
            })
            if (itemIndex!==-1) {
                state.items[itemIndex].quantity++
            }
        },
        decreaseQuantity: (state, action: PayloadAction<{_id: string}>) => {
            const itemIndex = state.items.findIndex(item => {
                return item.common._id === action.payload._id
            })
            if (itemIndex!==-1) {
                if (state.items[itemIndex].quantity === 1) {
                    state.items.splice(itemIndex, 1)
                }
                else {
                    state.items[itemIndex].quantity--
                }
            }
        },
        setOrderId: (state, action: PayloadAction<string>) => {
            state.orderId = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            
        }
    }
})

export const {
    addItem, removeItem, increaseQuantity, decreaseQuantity, setOrderId
} = cartSlice.actions

export default cartSlice.reducer
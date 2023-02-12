import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'
import {cartSlice} from 'redux/cart/cart.slice'

export const selectCart = (state: AppState) => state.cart

export const selectCartItems =
    createSelector(
        [selectCart],
        cart => cart.items
    )

export const selectTotalPrice =
    createSelector(
        [selectCartItems],
        cartItems => {
            let totalPrice = 0
            cartItems.forEach(({quantity, common: {price}}) => totalPrice += quantity * +price)
            return totalPrice
        }
    )
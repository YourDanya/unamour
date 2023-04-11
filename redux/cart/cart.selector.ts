import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'
import {getLocalStorage} from 'utils/main/main.utils'

export const selectCart = (state: AppState) => state.cart

export const selectCartItems = createSelector(
    [selectCart], cart => cart.items
)

export const selectShouldCartOpen = createSelector(
    [selectCart], cart => cart.shouldOpenNavCart
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((totalPrice, {quantity, common: {price}}) => totalPrice + quantity * +price, 0)
    }
)

export const selectItemsQuantity = createSelector(
    [selectCartItems],
    (cartItems) => {
        return cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
    }
)

export const getLSItemsQuantity = () => {
    const cartItems = getLocalStorage('cart').items
    return cartItems.reduce((quantity, item) => quantity + item.quantity, 0)
}

export const selectOrderId = createSelector(
    [selectCart],
    (cart) => cart.orderId
)

export const selectUserFormData = createSelector(
    [selectCart],
    (cart) => cart.userFormData
)

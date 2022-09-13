import {configureStore, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit'
import {createWrapper} from "next-redux-wrapper"
import shopItems from './shop-items/shop-items.slice'
import cart from './cart/cart.slice'
import user from './user/user.slice'
import main from './main/main.slice'
import thunk from "redux-thunk"
import {AnyAction} from "redux"

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>

export const makeStore = () =>
    configureStore({
        reducer: {
            shopItems,
            cart,
            user,
            main
        },
        middleware: [thunk],
        devTools: true
    });

export const wrapper = createWrapper(makeStore)
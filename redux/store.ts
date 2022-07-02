import {configureStore, ThunkAction, Action, ThunkDispatch} from '@reduxjs/toolkit'
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import counter from './counter/counter.slice'
import shopItems from './shop-items/shop-items.slice'
import cart from './cart/cart.slice'
import thunk from "redux-thunk";
import {AnyAction} from "redux";

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>

export const makeStore = () =>
    configureStore({
        reducer: {
            counter,
            shopItems,
            cart
        },
        middleware: [thunk],
        devTools: true
    });

export const wrapper = createWrapper(makeStore)
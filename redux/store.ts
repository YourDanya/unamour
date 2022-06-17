import {configureStore, ThunkAction, Action, ThunkDispatch} from '@reduxjs/toolkit'

import {createWrapper, HYDRATE} from "next-redux-wrapper";
import counter from './counter/counter.slice'
import shopItems from './shop-items/shop-items.slice'
import thunk from "redux-thunk";
import {AnyAction} from "redux";

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>

export const makeStore = () =>
    configureStore({
        reducer: {
            counter,
            shopItems
        },
        middleware: [thunk],
        devTools: true
    });

export const store = makeStore()

export const wrapper = createWrapper<AppStore>(makeStore)
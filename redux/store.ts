import {ThunkDispatch} from 'redux-thunk'
import {ThunkAction} from 'redux-thunk'
import {AnyAction} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import shopItems from 'redux/shop-items/shop-items.slice'
import cart from 'redux/cart/cart.slice'
import user from 'redux/user/user.slice'
import main from 'redux/main/main.slice'
import test from 'redux/test/test.slice'
import {createSelectorCreator} from 'reselect'
import {memoize} from 'lodash'

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>

export const createSelector = createSelectorCreator(memoize)

export const makeStore = () =>
    configureStore({
        reducer: {
            shopItems,
            cart,
            user,
            main,
            test
        },
        middleware: [thunk],
        devTools: true
    });

export const wrapper = createWrapper(makeStore)
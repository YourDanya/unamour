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
import checkout from 'redux/checkout/checkout.slice'
import {persistReducer} from 'redux-persist'
import {persistStore} from 'redux-persist'
import {combineReducers} from 'redux'

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>

// export const makeStore = () =>
//     configureStore({
//         reducer: {
//             shopItems, cart, user, main, count-time, admin
//         },
//         middleware: [thunk],
//         devTools: true
//     })
//
// export const wrapper = createWrapper(makeStore)
//
// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, {
//     shopItems, cart, user, main, count-time, admin
// })

export const reducers = {
    shopItems, cart, user, main, checkout
}

export const rootReducer = combineReducers(reducers)

export const makeConfiguredStore = (reducer: any) => configureStore({
    reducer,
    middleware: [thunk],
    devTools: true
})

const makeStore = () => {
    const isServer = typeof window === 'undefined'
    if (isServer) {
        return makeConfiguredStore(rootReducer)
    } else {
        // we need it only on client side
        const {persistStore, persistReducer} = require('redux-persist')
        const storage = require('redux-persist/lib/storage').default

        const persistConfig = {
            key: 'nextjs',
            whitelist: ['cart'], // make sure it does not clash with server keys
            storage
        }

        const persistedReducer = persistReducer(persistConfig, rootReducer)
        const store = makeConfiguredStore(persistedReducer);

        (store as typeof store & {__persistor: any}).__persistor = persistStore(store) // Nasty hack

        return store
    }
}

export const wrapper = createWrapper(makeStore)
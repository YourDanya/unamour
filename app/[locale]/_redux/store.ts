import {configureStore} from '@reduxjs/toolkit'

import shopItems from 'app/[locale]/_redux/shop-items/shop-items.slice'
import cart from 'app/[locale]/_redux/cart/cart.slice'
import user from 'app/[locale]/_redux/user/user.slice'
import main from 'app/[locale]/_redux/main/main.slice'
import checkout from 'app/[locale]/_redux/checkout/checkout.slice'
import {combineReducers} from '@reduxjs/toolkit'
import {ThunkDispatch} from '@reduxjs/toolkit'
import {ThunkAction} from '@reduxjs/toolkit'
import {AnyAction} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppState, void, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>

// export const makeStore = () =>
//     configureStore({
//         reducer: {
//             shopItems, _components, user, main, count-time, admin
//         },
//         _middleware: [thunk],
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
//     shopItems, _components, user, main, count-time, admin
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
        const {persistStore, persistReducer} = require('app/[locale]/_redux-persist')
        const storage = require('app/[locale]/_redux-persist/lib/storage').default

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

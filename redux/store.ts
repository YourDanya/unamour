import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit'

import counterReducer from './counter/counter.slice'
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {composeWithDevTools} from "redux-devtools-extension";
import counter from './counter/counter.slice'

// const combinedReducer = combineReducers({
//     counter
// })
//
// const masterReducer = (state, action) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state,
//             counter: {
//                 count: state.counter.value + action.payload.counter.value,
//             },
//             users: {
//                 users: [...action.payload.users.users, ...state.users.users]
//             }
//         }
//         return nextState;
//     } else {
//         return combinedReducer(state, action)
//     }
// }

export function makeStore() {
    return configureStore({
        reducer: { counter: counterReducer },
        devTools: true
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export const wrapper = createWrapper<AppStore>(makeStore, {debug: true})
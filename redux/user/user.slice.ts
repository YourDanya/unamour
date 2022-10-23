import {createSlice} from '@reduxjs/toolkit'
import {UserState} from 'redux/user/user.types'
import {PayloadAction} from '@reduxjs/toolkit'
import {User} from 'redux/user/user.types'
import {UserField} from 'redux/user/user.types'
import {HYDRATE} from 'next-redux-wrapper'
import {StateError} from 'redux/store.types'
import {StateField} from 'redux/store.types'
import {Indexed} from 'types/types'

const initialState: UserState = {
    user : null,
    fields: {
        login: {loading: false, error: null, success: false},
        register: {loading: false, error: null, success: false},
        logout: {loading: false, error: null, success: false},
        getUser: {loading: false, error: null, success: false},
        forgetPass: {loading: false, error: null, success: false},
        resetPass: {loading: false, error: null, success: false},
        activate: {loading: false, error: null, success: false},
        sendCode: {loading: false, error: null, success: false, timer: 0},
        updatePass: {loading: false, error: null, success: false},
        deleteUser: {loading: false, error: null, success: false}
    },
    current : '',
    activation: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFieldStart: (state, action: PayloadAction<UserField>) => {
            const field = action.payload
            state.fields[field].loading = true
            state.current = field
        },
        userFieldFailure: (state, action: PayloadAction<{error:StateError, field: UserField}>) => {
            const {field, error} = action.payload
            state.fields[field].loading = false
            state.fields[field].error = error
        },
        userFieldSuccess: (state, action: PayloadAction<UserField>) => {
            state.fields[action.payload] = {success: true, loading: false, error: null}
        },
        setUser: (state, action: PayloadAction<{user: User | null}>) => {
            state.user = action.payload.user
        },
        resetTimer: (state, action: PayloadAction<UserField>) => {
            state.fields[action.payload].timer = 0
        },
        resetSuccess: (state, action: PayloadAction<UserField>) => {
            state.fields[action.payload].success = false
        },
        setField: (state, action: PayloadAction<{field: UserField, value: Partial<StateField>}>) => {
            const {field, value} = action.payload
            Object.entries(value).forEach(([ key, value]) => {
                (state.fields[field] as Indexed<StateField>)[key] = value
            })
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {userFieldStart, userFieldFailure, userFieldSuccess, setUser, resetTimer, resetSuccess, setField
} = userSlice.actions

export default userSlice.reducer

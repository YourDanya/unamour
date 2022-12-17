import {createSlice} from '@reduxjs/toolkit'
import {UserState} from 'redux/user/user.types'
import {HYDRATE} from 'next-redux-wrapper'
import {StateField} from 'redux/store.types'
import {Entry} from 'types/types'
import {SetUserFieldStartAction} from 'redux/user/user.types'
import {SetUserFieldFailureAction} from 'redux/user/user.types'
import {SetUserFieldSuccessAction} from 'redux/user/user.types'
import {SetUserAction} from 'redux/user/user.types'
import {ResetUserFieldTimerAction} from 'redux/user/user.types'
import {ResetUserFieldSuccessAction} from 'redux/user/user.types'
import {SetUserFieldAction} from 'redux/user/user.types'

const initialState: UserState = {
    user : null,
    fields: {
        login: {loading: false, error: null, success: false},
        register: {loading: false, error: null, success: false},
        logout: {loading: false, error: null, success: false},
        getUser: {loading: false, error: null, success: false},
        forgetPass: {loading: false, error: null, success: false},
        resetPass: {loading: false, error: null, success: false},
        activateUser: {loading: false, error: null, success: false},
        sendRegisterCode: {loading: false, error: null, success: false, timer: 0},
        updatePass: {loading: false, error: null, success: false},
        deleteUser: {loading: false, error: null, success: false},
        updateEmail: {loading: false, error: null, success: false},
        sendUpdateEmailCode: {loading: false, error: null, success: false, timer: 0},
        activateEmail: {loading: false, error: null, success: false},
        updateUser: {loading: false, error: null, success: false}
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserFieldStart: (state, action: SetUserFieldStartAction) => {
            const field = action.payload
            state.fields[field].loading = true
        },
        setUserFieldFailure: (state, action: SetUserFieldFailureAction) => {
            const {field, error} = action.payload
            const {timer} = error
            state.fields[field] = {loading: false, success: false, error, timer}
        },
        setUserFieldSuccess: (state, action: SetUserFieldSuccessAction) => {
            const {timer} = state.fields[action.payload]
            state.fields[action.payload] = {success: true, loading: false, error: null, timer}
        },
        setUser: (state, action: SetUserAction) => {
            state.user = action.payload.user
        },
        resetUserFieldTimer: (state, action: ResetUserFieldTimerAction) => {
            state.fields[action.payload].timer = 0
        },
        resetUserFieldSuccess: (state, action: ResetUserFieldSuccessAction) => {
            state.fields[action.payload].success = false
        },
        setUserField: (state, action: SetUserFieldAction) => {
            const {field, value} = action.payload
            Object.entries(value).forEach((entry) => {
                const [key, val] = entry as Entry<StateField>
                (state.fields[field][key] as typeof val) = val
            })
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {setUserFieldStart, setUserFieldFailure, setUserFieldSuccess, setUser, resetUserFieldTimer,
    resetUserFieldSuccess, setUserField
} = userSlice.actions

export default userSlice.reducer

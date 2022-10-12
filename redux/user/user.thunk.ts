import {LoginData} from "./user.types"
import {AppThunk} from 'redux/store'
import {startAsync} from 'redux/user/user.slice'
import {Api} from 'utils/api/api.utils'
import {failAsync} from 'redux/user/user.slice'

import {apiCallAsync} from 'utils/api/api.utils'
import {getUserSuccess} from 'redux/user/user.slice'
import {signOutSuccess} from 'redux/user/user.slice'
import {ForgetPassData} from './user.types'
import {successAsync} from 'redux/user/user.slice'
import {ResetPassData} from './user.types'
import {RegisterData} from './user.types'
import {loginSuccess} from 'redux/user/user.slice'
import {ActivateData} from './user.types'
import {activateSuccess} from 'redux/user/user.slice'
import {sendCodeFailure} from 'redux/user/user.slice'
import {sendCodeSuccess} from 'redux/user/user.slice'
import {StateError} from 'redux/store.types'

export const loginAsync = (loginData: LoginData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('login'))
        const login = () => Api.post('/auth/login', loginData)
        const loginFailure = (error: StateError) => failAsync({error, field: 'login'})
        dispatch(apiCallAsync(login, loginSuccess, loginFailure))
    }
}

export const registerAsync = (registerData: RegisterData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('register'))
        const register = () => Api.post('/auth/create-inactive-user', registerData)
        const registerFailure = (error: StateError) => failAsync({error, field: 'register'})
        const registerSuccess = () => successAsync({field: 'register'})
        dispatch(apiCallAsync(register, registerSuccess, registerFailure))
    }
}

export const activateAsync = (activateData: ActivateData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('activate'))
        const activate = () => Api.post('/auth/activate-user-with-code', activateData)
        const activateFailure = (error: StateError) => failAsync({error, field: 'sendCode'})
        dispatch(apiCallAsync(activate, activateSuccess, activateFailure))
    }
}

export const sendCodeAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('sendCode'))
        const sendCode = () => Api.post('/auth/send-activation-code')
        dispatch(apiCallAsync(sendCode, sendCodeSuccess, sendCodeFailure))
    }
}

export const getUserAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('getUser'))
        const getUser = () => Api.get('/users/user-data')
        const getUserFailure = (error: StateError) => failAsync({error, field: 'getUser'})
        dispatch(apiCallAsync(getUser, getUserSuccess, getUserFailure))
    }
}

export const signOutAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('signOut'))
        const signOut = () => Api.post('/auth/logout')
        const signOutFailure = (error: StateError) => failAsync({error, field: 'signOut'})
        dispatch(apiCallAsync(signOut, signOutSuccess, signOutFailure))
    }
}

export const forgetPassAsync = (forgetPassData: ForgetPassData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('forgetPass'))
        const forgetPass = () => Api.post('/auth/send-recovery-link', forgetPassData)
        const forgetPassFailure = (error: StateError) => failAsync({error, field: 'forgetPass'})
        const forgetPassSuccess = () => successAsync({field: 'forgetPass'})
        dispatch(apiCallAsync(forgetPass, forgetPassSuccess, forgetPassFailure))
    }
}

export const resetPassAsync = (resetData: ResetPassData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('resetPass'))
        const resetPass = () => Api.post('/auth/recover-account', resetData)
        const resetPassFailure = (error: StateError) => failAsync({error, field: 'resetPass'})
        const resetPassSuccess = () => successAsync({field: 'resetPass'})
        dispatch(apiCallAsync(resetPass, resetPassSuccess, resetPassFailure))
    }
}

// export const updateUser = (): AppThunk => {
//     return async () => {
//         const updateUser = () => Api.post('/shop-item/all', {})
//         apiCallAsync(updateUser, setUser, setError)
//     }
// }


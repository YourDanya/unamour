import { SignInData } from "./user.types"
import {AppThunk} from 'redux/store'
import {startAsync} from 'redux/user/user.slice'
import {Api} from 'utils/api/api.utils'
import {StateError} from 'types/types'
import {failAsync} from 'redux/user/user.slice'
import {signInSuccess} from 'redux/user/user.slice'
import {apiCallAsync} from 'utils/api/api.utils'
import {getUserSuccess} from 'redux/user/user.slice'
import {signOutSuccess} from 'redux/user/user.slice'
import {ForgetPassData} from './user.types'
import {successAsync} from 'redux/user/user.slice'
import {ResetPassData} from './user.types'

export const signIn = (signInData: SignInData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('signIn'))
        const signIn = () => Api.post('/auth/login', signInData)
        const signInFailure = (error: StateError) => failAsync({error, field: 'signIn'})
        dispatch(apiCallAsync(signIn, signInSuccess, signInFailure))
    }
}

export const getUser = (): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('getUser'))
        const getUser = () => Api.get('/users/user-data')
        const getUserFailure = (error: StateError) => failAsync({error, field: 'getUser'})
        dispatch(apiCallAsync(getUser, getUserSuccess, getUserFailure))
    }
}

export const signOut = (): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('signOut'))
        const signOut = () => Api.post('/auth/logout')
        const signOutFailure = (error: StateError) => failAsync({error, field: 'signOut'})
        dispatch(apiCallAsync(signOut, signOutSuccess, signOutFailure))
    }
}

export const forgetPassword = (forgetPassData: ForgetPassData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('forgetPass'))
        const forgetPass = () => Api.post('/auth/send-recovery-link', forgetPassData)
        const forgetPassFailure = (error: StateError) => failAsync({error, field: 'forgetPass'})
        const forgetPassSuccess = () => successAsync({field: 'forgetPass'})
        dispatch(apiCallAsync(forgetPass, forgetPassSuccess, forgetPassFailure))
    }
}

export const resetPassword = (resetData: ResetPassData): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('resetPass'))
        const resetPass = () => Api.post('/auth/recover-account', resetData)
        const resetPassFailure = (error: StateError) => failAsync({error, field: 'resetPass'})
        const resetPassSuccess = () => successAsync({field: 'resetPass'})
        dispatch(apiCallAsync(resetPass, resetPassSuccess, resetPassFailure))
    }
}

// export const signUp = (signUpData: SignUpData): AppThunk => {
//     return async (dispatch) => {
//         const signUp = () => Api.post('/auth/create-inactive-user', signUpData)
//         dispatch(apiCallAsync(signUp, setUser, setError))
//     }
// }

// export const updateUser = (): AppThunk => {
//     return async () => {
//         const updateUser = () => Api.post('/shop-item/all', {})
//         apiCallAsync(updateUser, setUser, setError)
//     }
// }


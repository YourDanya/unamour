import {AppThunk} from "../store"
import {Api, apiCallAsync} from "../../utils/api.utils"
import {SignInData} from "./user.types"
import { getUserSuccess, signInSuccess, signOutSuccess, startAsync, failAsync} from "./user.slice"
import {StateError} from "../../types/types"

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


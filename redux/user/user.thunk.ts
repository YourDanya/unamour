import {AppThunk} from "../store"
import {Api, apiCallThunk} from "../../utils/api.utils"
import {SignInData} from "./user.types"
import {getUserFailure, getUserSuccess, signInFailure, signInSuccess} from "./user.slice"

export const signIn = (signInData: SignInData): AppThunk => {
    return async (dispatch) => {
        const signIn = () => Api.post('/auth/login', signInData)
        dispatch(apiCallThunk(signIn, signInSuccess, signInFailure))
    }
}

export const getUser = (): AppThunk => {
    return async (dispatch) => {
        const getUser = () => Api.get('/users/user-data')
        dispatch(apiCallThunk(getUser, getUserSuccess, getUserFailure))
    }
}

// export const signUp = (signUpData: SignUpData): AppThunk => {
//     return async (dispatch) => {
//         const signUp = () => Api.post('/auth/create-inactive-user', signUpData)
//         dispatch(apiCallThunk(signUp, setUser, setError))
//     }
// }

// export const updateUser = (): AppThunk => {
//     return async () => {
//         const updateUser = () => Api.post('/shop-item/all', {})
//         apiCallThunk(updateUser, setUser, setError)
//     }
// }


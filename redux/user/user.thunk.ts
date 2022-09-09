import {AppThunk} from "../store"
import {Api, apiCall} from "../../utils/api.utils"
import {setError, setUser} from "./user.slice"
import {SignInData, SignUpData} from "./user.types"

export const signIn = (signInData: SignInData): AppThunk => {
    return async (dispatch) => {
        const signIn = () => Api.post('/auth/login', signInData)
        dispatch(apiCall(signIn, setUser, setError))
    }
}

export const signUp = (signUpData: SignUpData): AppThunk => {
    return async (dispatch) => {
        const signUp = () => Api.post('/auth/create-inactive-user', signUpData)
        dispatch(apiCall(signUp, setUser, setError))
    }
}

export const updateUser = (): AppThunk => {
    return async () => {
        const updateUser = () => Api.post('/shop-item/all', {})
        apiCall(updateUser, setUser, setError)
    }
}


import {LoginData} from "./user.types"
import {AppThunk} from 'redux/store'
import {userFieldStart} from 'redux/user/user.slice'
import {Api} from 'utils/api/api.utils'
import {userFieldFailure} from 'redux/user/user.slice'

import {apiCallAsync} from 'utils/api/api.utils'
import {ForgetPassData} from './user.types'
import {userFieldSuccess} from 'redux/user/user.slice'
import {ResetPassData} from './user.types'
import {RegisterData} from './user.types'
import {ActivateData} from './user.types'
import {StateError} from 'redux/store.types'
import {UpdatePassData} from './user.types'
import {DeleteUserData} from './user.types'
import {setUser} from 'redux/user/user.slice'
import {setField} from 'redux/user/user.slice'

export const loginAsync = (loginData: LoginData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('login'))
        const login = () => Api.post('/auth/login', loginData)
        const loginSuccess = [setUser, () => userFieldSuccess('login')]
        const loginFailure = (error: StateError) => userFieldFailure({error, field: 'login'})
        dispatch(apiCallAsync(login, loginSuccess, loginFailure))
    }
}

export const registerAsync = (registerData: RegisterData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('register'))
        const register = () => Api.post('/auth/create-inactive-user', registerData)
        const registerSuccess = () => userFieldSuccess( 'register')
        const registerFailure = (error: StateError) => userFieldFailure({error, field: 'register'})
        dispatch(apiCallAsync(register, registerSuccess, registerFailure))
    }
}

export const activateAsync = (activateData: ActivateData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('activate'))
        const activate = () => Api.post('/auth/activate-user-with-code', activateData)
        const activateSuccess = [setUser, () => userFieldSuccess('activate')]
        const activateFailure = (error: StateError) => userFieldFailure({error, field: 'sendCode'})
        dispatch(apiCallAsync(activate, activateSuccess, activateFailure))
    }
}

export const sendCodeAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('sendCode'))
        const sendCode = () => Api.post('/auth/send-activation-code')
        const setTimer = ({timer}: {timer: number}) => setField({field: 'sendCode', value: {timer}})
        const sendCodeSuccess = [setTimer, () => userFieldSuccess('activate')]
        const sendCodeFailure = [setTimer, (error: StateError) => userFieldFailure({error, field: 'sendCode'})]
        dispatch(apiCallAsync(sendCode, sendCodeSuccess, sendCodeFailure))
    }
}

export const getUserAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('getUser'))
        const getUser = () => Api.get('/users/user-data')
        const getUserFailure = (error: StateError) => userFieldFailure({error, field: 'getUser'})
        dispatch(apiCallAsync(getUser, setUser, getUserFailure))
    }
}

export const logoutAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('logout'))
        const logout = () => Api.post('/auth/logout')
        const logoutFailure = (error: StateError) => userFieldFailure({error, field: 'logout'})
        const setSuccess = () => userFieldSuccess('logout')
        const clearUser = () => setUser({user: null})
        const logoutSuccess = [setSuccess, clearUser]
        dispatch(apiCallAsync(logout, logoutSuccess, logoutFailure))
    }
}

export const forgetPassAsync = (forgetPassData: ForgetPassData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('forgetPass'))
        const forgetPass = () => Api.post('/auth/send-recovery-link', forgetPassData)
        const forgetPassFailure = (error: StateError) => userFieldFailure({error, field: 'forgetPass'})
        const forgetPassSuccess = () => userFieldSuccess('forgetPass')
        dispatch(apiCallAsync(forgetPass, forgetPassSuccess, forgetPassFailure))
    }
}

export const resetPassAsync = (resetData: ResetPassData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('resetPass'))
        const resetPass = () => Api.post('/auth/recover-account', resetData)
        const resetPassFailure = (error: StateError) => userFieldFailure({error, field: 'resetPass'})
        const resetPassSuccess = () => userFieldSuccess('resetPass')
        dispatch(apiCallAsync(resetPass, resetPassSuccess, resetPassFailure))
    }
}

export const updatePassAsync = (updatePassData: UpdatePassData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('updatePass'))
        const updatePass = () => Api.post('/auth/update-password', updatePassData)
        const updatePassFailure = (error: StateError) => userFieldFailure({error, field: 'updatePass'})
        const updatePassSuccess = () => userFieldSuccess('updatePass')
        dispatch(apiCallAsync(updatePass, updatePassSuccess, updatePassFailure))
    }
}

export const deleteUserAsync = (deleteUserData: DeleteUserData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('deleteUser'))
        const deleteUser = () => Api.post('/auth/delete-me', deleteUserData)
        const deleteUserFailure = (error: StateError) => userFieldFailure({error, field: 'deleteUser'})
        const deleteUserSuccess = () => userFieldSuccess('deleteUser')
        dispatch(apiCallAsync(deleteUser, deleteUserSuccess, deleteUserFailure))
    }
}



// export const updateUser = (): AppThunk => {
//     return async () => {
//         const updateUser = () => Api.post('/shop-item/all', {})
//         apiCallAsync(updateUser, setUser, setError)
//     }
// }


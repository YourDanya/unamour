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
import {setUserField} from 'redux/user/user.slice'
import {UpdateEmailData} from './user.types'
import {UpdateUserData} from './user.types'

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

export const sendRegisterCodeAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('sendRegisterCode'))
        const sendRegisterCode = () => Api.post('/auth/send-activation-code')
        const setTimer = ({timer}: {timer: number}) => setUserField({field: 'sendRegisterCode', value: {timer}})
        const setSuccess = () => userFieldSuccess('sendRegisterCode')
        const sendRegisterCodeSuccess = [setTimer, setSuccess]
        const sendRegisterCodeFailure = (error: StateError) => userFieldFailure({error, field: 'sendRegisterCode'})
        dispatch(apiCallAsync(sendRegisterCode, sendRegisterCodeSuccess, sendRegisterCodeFailure))
    }
}

export const activateUserAsync = (activateData: ActivateData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('activateUser'))
        const activate = () => Api.post('/auth/activate-user-with-code', activateData)
        const activateSuccess = [setUser, () => userFieldSuccess('activateUser')]
        const activateFailure = (error: StateError) => userFieldFailure({error, field: 'sendRegisterCode'})
        dispatch(apiCallAsync(activate, activateSuccess, activateFailure))
    }
}

export const getUserAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('getUser'))
        const getUser = () => Api.get('/users/user-data')
        const setSuccess = () => userFieldSuccess('getUser')
        const getUserSuccess = [setUser, setSuccess]
        const getUserFailure = (error: StateError) => userFieldFailure({error, field: 'getUser'})
        dispatch(apiCallAsync(getUser, getUserSuccess, getUserFailure))
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
        const setSuccess = () => userFieldSuccess('deleteUser')
        const clearUser = () => setUser({user: null})
        const deleteUserSuccess = [setSuccess, clearUser]
        const deleteUserFailure = (error: StateError) => userFieldFailure({error, field: 'deleteUser'})
        dispatch(apiCallAsync(deleteUser, deleteUserSuccess, deleteUserFailure))
    }
}

export const updateEmailAsync = (updateEmailData: UpdateEmailData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('updateEmail'))
        const updateEmail = () => Api.post('/auth/update-email', updateEmailData)
        const updateEmailSuccess = () => userFieldSuccess( 'updateEmail')
        const updateEmailFailure = (error: StateError) => userFieldFailure({error, field: 'updateEmail'})
        dispatch(apiCallAsync(updateEmail, updateEmailSuccess, updateEmailFailure))
    }
}

export const sendUpdateEmailCodeAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('sendUpdateEmailCode'))
        const sendRegisterCode = () => Api.post('/auth/send-update-email-code')
        const setTimer = ({timer}: {timer: number}) => setUserField({field: 'sendUpdateEmailCode', value: {timer}})
        const setSuccess = () => userFieldSuccess('sendUpdateEmailCode')
        const sendRegisterCodeSuccess = [setTimer, setSuccess]
        const setError = (error: StateError) => userFieldFailure({error, field: 'sendUpdateEmailCode'})
        const sendRegisterCodeFailure = [setTimer, setError]
        dispatch(apiCallAsync(sendRegisterCode, sendRegisterCodeSuccess, sendRegisterCodeFailure))
    }
}

export const activateEmailAsync = (activateData: ActivateData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('activateEmail'))
        const activateEmail = () => Api.post('/auth/activate-email', activateData)
        const setSuccess = () => userFieldSuccess('activateEmail')
        const activateEmailSuccess = [setUser, setSuccess]
        const activateEmailFailure = (error: StateError) => userFieldFailure({error, field: 'activateEmail'})
        dispatch(apiCallAsync(activateEmail, activateEmailSuccess, activateEmailFailure))
    }
}

export const updateUserAsync = (updateUserData: UpdateUserData): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('updateUser'))
        const updateUser = () => Api.post('/auth/update-user', updateUserData)
        const setSuccess = () => userFieldSuccess('updateUser')
        const updateUserSuccess = [setUser, setSuccess]
        const updateUserFailure = (error: StateError) => userFieldFailure({error, field: 'updateUser'})
        dispatch(apiCallAsync(updateUser, updateUserSuccess, updateUserFailure))
    }
}

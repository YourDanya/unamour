import {AppThunk} from 'redux/store'
import {setUserFieldStart} from 'redux/user/user.slice'
import {Api} from 'utils/api/api.utils'
import {apiCallAsync} from 'utils/api/api.utils'
import {setUserFieldFailure} from 'redux/user/user.slice'
import {setUserFieldSuccess} from 'redux/user/user.slice'
import {setUser} from 'redux/user/user.slice'
import {setUserField} from 'redux/user/user.slice'
import {StateError} from 'redux/store.types'
import {LoginAsync} from 'redux/user/user.types'
import {RegisterAsync} from 'redux/user/user.types'
import {ForgetPassAsync} from 'redux/user/user.types'
import {ResetPassAsync} from 'redux/user/user.types'
import {UpdatePassAsync} from 'redux/user/user.types'
import {DeleteUserAsync} from 'redux/user/user.types'
import {UpdateEmailAsync} from 'redux/user/user.types'
import {ActivateAsync} from 'redux/user/user.types'
import {UpdateUserAsync} from 'redux/user/user.types'

export const loginAsync: LoginAsync = (loginData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('login'))
        const login = () => Api.post('/auth/login', loginData)
        const loginSuccess = [setUser, () => setUserFieldSuccess('login')]
        const loginFailure = (error: StateError) => setUserFieldFailure({error, field: 'login'})
        dispatch(apiCallAsync(login, loginSuccess, loginFailure))
    }
}

export const registerAsync: RegisterAsync = (registerData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('register'))
        const register = () => Api.post('/auth/create-inactive-user', registerData)
        const registerSuccess = () => setUserFieldSuccess( 'register')
        const registerFailure = (error: StateError) => setUserFieldFailure({error, field: 'register'})
        dispatch(apiCallAsync(register, registerSuccess, registerFailure))
    }
}

export const sendRegisterCodeAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('sendRegisterCode'))
        const sendRegisterCode = () => Api.post('/auth/send-activation-code')
        const setTimer = ({timer}: {timer: number}) => setUserField({field: 'sendRegisterCode', value: {timer}})
        const setSuccess = () => setUserFieldSuccess('sendRegisterCode')
        const sendRegisterCodeSuccess = [setTimer, setSuccess]
        const sendRegisterCodeFailure = (error: StateError) => setUserFieldFailure({error, field: 'sendRegisterCode'})
        dispatch(apiCallAsync(sendRegisterCode, sendRegisterCodeSuccess, sendRegisterCodeFailure))
    }
}

export const activateUserAsync: ActivateAsync = (activateData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('activateUser'))
        const activate = () => Api.post('/auth/activate-user-with-code', activateData)
        const activateSuccess = [setUser, () => setUserFieldSuccess('activateUser')]
        const activateFailure = (error: StateError) => setUserFieldFailure({error, field: 'sendRegisterCode'})
        dispatch(apiCallAsync(activate, activateSuccess, activateFailure))
    }
}

export const getUserAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('getUser'))
        const getUser = () => Api.get('/users/user-data')
        const setSuccess = () => setUserFieldSuccess('getUser')
        const getUserSuccess = [setUser, setSuccess]
        const getUserFailure = (error: StateError) => setUserFieldFailure({error, field: 'getUser'})
        dispatch(apiCallAsync(getUser, getUserSuccess, getUserFailure))
    }
}

export const logoutAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('logout'))
        const logout = () => Api.post('/auth/logout')
        const logoutFailure = (error: StateError) => setUserFieldFailure({error, field: 'logout'})
        const setSuccess = () => setUserFieldSuccess('logout')
        const clearUser = () => setUser({user: null})
        const logoutSuccess = [setSuccess, clearUser]
        dispatch(apiCallAsync(logout, logoutSuccess, logoutFailure))
    }
}

export const forgetPassAsync: ForgetPassAsync = (forgetPassData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('forgetPass'))
        const forgetPass = () => Api.post('/auth/send-recovery-link', forgetPassData)
        const forgetPassFailure = (error: StateError) => setUserFieldFailure({error, field: 'forgetPass'})
        const forgetPassSuccess = () => setUserFieldSuccess('forgetPass')
        dispatch(apiCallAsync(forgetPass, forgetPassSuccess, forgetPassFailure))
    }
}

export const resetPassAsync: ResetPassAsync = (resetData): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('resetPass'))
        const resetPass = () => Api.post('/auth/recover-account', resetData)
        const resetPassFailure = (error: StateError) => setUserFieldFailure({error, field: 'resetPass'})
        const resetPassSuccess = () => setUserFieldSuccess('resetPass')
        dispatch(apiCallAsync(resetPass, resetPassSuccess, resetPassFailure))
    }
}

export const updatePassAsync: UpdatePassAsync = (updatePassData): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('updatePass'))
        const updatePass = () => Api.post('/auth/update-password', updatePassData)
        const updatePassFailure = (error: StateError) => setUserFieldFailure({error, field: 'updatePass'})
        const updatePassSuccess = () => setUserFieldSuccess('updatePass')
        dispatch(apiCallAsync(updatePass, updatePassSuccess, updatePassFailure))
    }
}

export const deleteUserAsync: DeleteUserAsync = (deleteUserData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('deleteUser'))
        const deleteUser = () => Api.post('/auth/delete-me', deleteUserData)
        const setSuccess = () => setUserFieldSuccess('deleteUser')
        const clearUser = () => setUser({user: null})
        const deleteUserSuccess = [setSuccess, clearUser]
        const deleteUserFailure = (error: StateError) => setUserFieldFailure({error, field: 'deleteUser'})
        dispatch(apiCallAsync(deleteUser, deleteUserSuccess, deleteUserFailure))
    }
}

export const updateEmailAsync: UpdateEmailAsync = (updateEmailData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('updateEmail'))
        const updateEmail = () => Api.post('/auth/update-email', updateEmailData)
        const updateEmailSuccess = () => setUserFieldSuccess( 'updateEmail')
        const updateEmailFailure = (error: StateError) => setUserFieldFailure({error, field: 'updateEmail'})
        dispatch(apiCallAsync(updateEmail, updateEmailSuccess, updateEmailFailure))
    }
}

export const sendUpdateEmailCodeAsync = () : AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('sendUpdateEmailCode'))
        const sendRegisterCode = () => Api.post('/auth/send-update-email-code')
        const setTimer = ({timer}: {timer: number}) => setUserField({field: 'sendUpdateEmailCode', value: {timer}})
        const setSuccess = () => setUserFieldSuccess('sendUpdateEmailCode')
        const sendRegisterCodeSuccess = [setTimer, setSuccess]
        const setError = (error: StateError) => setUserFieldFailure({error, field: 'sendUpdateEmailCode'})
        const sendRegisterCodeFailure = [setTimer, setError]
        dispatch(apiCallAsync(sendRegisterCode, sendRegisterCodeSuccess, sendRegisterCodeFailure))
    }
}

export const activateEmailAsync: ActivateAsync = (activateData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('activateEmail'))
        const activateEmail = () => Api.post('/auth/activate-email', activateData)
        const setSuccess = () => setUserFieldSuccess('activateEmail')
        const activateEmailSuccess = [setUser, setSuccess]
        const activateEmailFailure = (error: StateError) => setUserFieldFailure({error, field: 'activateEmail'})
        dispatch(apiCallAsync(activateEmail, activateEmailSuccess, activateEmailFailure))
    }
}

export const updateUserAsync: UpdateUserAsync = (updateUserData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('updateUser'))
        const updateUser = () => Api.post('/auth/update-user', updateUserData)
        const setSuccess = () => setUserFieldSuccess('updateUser')
        const updateUserSuccess = [setUser, setSuccess]
        const updateUserFailure = (error: StateError) => setUserFieldFailure({error, field: 'updateUser'})
        dispatch(apiCallAsync(updateUser, updateUserSuccess, updateUserFailure))
    }
}

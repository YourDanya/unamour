import {AppThunk} from 'app/[locale]/_redux/store'
import {setUserFieldStart} from 'app/[locale]/_redux/user/user.slice'
import {api} from 'app/[locale]/_common/utils/api/api.utils'
import {apiCallAsync} from 'app/[locale]/_common/utils/api/api.utils'
import {setUserFieldFailure} from 'app/[locale]/_redux/user/user.slice'
import {setUserFieldSuccess} from 'app/[locale]/_redux/user/user.slice'
import {setUser} from 'app/[locale]/_redux/user/user.slice'
import {setUserField} from 'app/[locale]/_redux/user/user.slice'
import {ServerError} from 'app/[locale]/_redux/store.types'
import {LoginAsync} from 'app/[locale]/_redux/user/user.types'
import {RegisterAsync} from 'app/[locale]/_redux/user/user.types'
import {ForgetPassAsync} from 'app/[locale]/_redux/user/user.types'
import {ResetPassAsync} from 'app/[locale]/_redux/user/user.types'
import {UpdatePassAsync} from 'app/[locale]/_redux/user/user.types'
import {DeleteUserAsync} from 'app/[locale]/_redux/user/user.types'
import {UpdateEmailAsync} from 'app/[locale]/_redux/user/user.types'
import {ActivateAsync} from 'app/[locale]/_redux/user/user.types'
import {UpdateUserAsync} from 'app/[locale]/_redux/user/user.types'

export const loginAsync: LoginAsync = (loginData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('login'))
        const login = () => api.post('/auth/login', loginData)
        const loginSuccess = [setUser, () => setUserFieldSuccess('login')]
        const loginFailure = (error: ServerError) => setUserFieldFailure({error, field: 'login'})
        dispatch(apiCallAsync(login, loginSuccess, loginFailure))
    }
}

export const registerAsync: RegisterAsync = (registerData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('register'))
        const register = () => api.post('/auth/create-inactive-user', registerData)
        const registerSuccess = () => setUserFieldSuccess( 'register')
        const registerFailure = (error: ServerError) => setUserFieldFailure({error, field: 'register'})
        dispatch(apiCallAsync(register, registerSuccess, registerFailure))
    }
}

export const sendRegisterCodeAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('sendRegisterCode'))
        const sendRegisterCode = () => api.post('/auth/send-activation-code')
        const setTimer = ({timer}: {timer: number}) => setUserField({field: 'sendRegisterCode', value: {timer}})
        const setSuccess = () => setUserFieldSuccess('sendRegisterCode')
        const sendRegisterCodeSuccess = [setTimer, setSuccess]
        const sendRegisterCodeFailure = (error: ServerError) => setUserFieldFailure({error, field: 'sendRegisterCode'})
        dispatch(apiCallAsync(sendRegisterCode, sendRegisterCodeSuccess, sendRegisterCodeFailure))
    }
}

export const activateUserAsync: ActivateAsync = (activateData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('activateUser'))
        const activate = () => api.post('/auth/activate-user-with-code', activateData)
        const activateSuccess = [setUser, () => setUserFieldSuccess('activateUser')]
        const activateFailure = (error: ServerError) => setUserFieldFailure({error, field: 'sendRegisterCode'})
        dispatch(apiCallAsync(activate, activateSuccess, activateFailure))
    }
}

export const getUserAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('getUser'))
        const getUser = () => api.get('/users/user-data')
        const setSuccess = () => setUserFieldSuccess('getUser')
        const getUserSuccess = [setUser, setSuccess]
        const getUserFailure = (error: ServerError) => setUserFieldFailure({error, field: 'getUser'})
        dispatch(apiCallAsync(getUser, getUserSuccess, getUserFailure))
    }
}

export const logoutAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('logout'))
        const logout = () => api.post('/auth/logout')
        const logoutFailure = (error: ServerError) => setUserFieldFailure({error, field: 'logout'})
        const setSuccess = () => setUserFieldSuccess('logout')
        const clearUser = () => setUser({user: null})
        const logoutSuccess = [setSuccess, clearUser]
        dispatch(apiCallAsync(logout, logoutSuccess, logoutFailure))
    }
}

export const forgetPassAsync: ForgetPassAsync = (forgetPassData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('forgetPass'))
        const forgetPass = () => api.post('/auth/send-recovery-link', forgetPassData)
        const forgetPassFailure = (error: ServerError) => setUserFieldFailure({error, field: 'forgetPass'})
        const forgetPassSuccess = () => setUserFieldSuccess('forgetPass')
        dispatch(apiCallAsync(forgetPass, forgetPassSuccess, forgetPassFailure))
    }
}

export const resetPassAsync: ResetPassAsync = (resetData): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('resetPass'))
        const resetPass = () => api.post('/auth/recover-account', resetData)
        const resetPassFailure = (error: ServerError) => setUserFieldFailure({error, field: 'resetPass'})
        const resetPassSuccess = () => setUserFieldSuccess('resetPass')
        dispatch(apiCallAsync(resetPass, resetPassSuccess, resetPassFailure))
    }
}

export const updatePassAsync: UpdatePassAsync = (updatePassData): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('updatePass'))
        const updatePass = () => api.post('/auth/update-password', updatePassData)
        const updatePassFailure = (error: ServerError) => setUserFieldFailure({error, field: 'updatePass'})
        const updatePassSuccess = () => setUserFieldSuccess('updatePass')
        dispatch(apiCallAsync(updatePass, updatePassSuccess, updatePassFailure))
    }
}

export const deleteUserAsync: DeleteUserAsync = (deleteUserData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('deleteUser'))
        const deleteUser = () => api.post('/auth/delete-me', deleteUserData)
        const setSuccess = () => setUserFieldSuccess('deleteUser')
        const clearUser = () => setUser({user: null})
        const deleteUserSuccess = [setSuccess, clearUser]
        const deleteUserFailure = (error: ServerError) => setUserFieldFailure({error, field: 'deleteUser'})
        dispatch(apiCallAsync(deleteUser, deleteUserSuccess, deleteUserFailure))
    }
}

export const updateEmailAsync: UpdateEmailAsync = (updateEmailData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('updateEmail'))
        const updateEmail = () => api.post('/auth/update-email', updateEmailData)
        const updateEmailSuccess = () => setUserFieldSuccess( 'updateEmail')
        const updateEmailFailure = (error: ServerError) => setUserFieldFailure({error, field: 'updateEmail'})
        dispatch(apiCallAsync(updateEmail, updateEmailSuccess, updateEmailFailure))
    }
}

export const sendUpdateEmailCodeAsync = () : AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('sendUpdateEmailCode'))
        const sendRegisterCode = () => api.post('/auth/send-update-email-code')
        const setTimer = ({timer}: {timer: number}) => setUserField({field: 'sendUpdateEmailCode', value: {timer}})
        const setSuccess = () => setUserFieldSuccess('sendUpdateEmailCode')
        const sendRegisterCodeSuccess = [setTimer, setSuccess]
        const setError = (error: ServerError) => setUserFieldFailure({error, field: 'sendUpdateEmailCode'})
        const sendRegisterCodeFailure = [setTimer, setError]
        dispatch(apiCallAsync(sendRegisterCode, sendRegisterCodeSuccess, sendRegisterCodeFailure))
    }
}

export const activateEmailAsync: ActivateAsync = (activateData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('activateEmail'))
        const activateEmail = () => api.post('/auth/activate-email', activateData)
        const setSuccess = () => setUserFieldSuccess('activateEmail')
        const activateEmailSuccess = [setUser, setSuccess]
        const activateEmailFailure = (error: ServerError) => setUserFieldFailure({error, field: 'activateEmail'})
        dispatch(apiCallAsync(activateEmail, activateEmailSuccess, activateEmailFailure))
    }
}

export const updateUserAsync: UpdateUserAsync = (updateUserData) => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('updateUser'))
        const updateUser = () => api.post('/auth/update-user', updateUserData)
        const setSuccess = () => setUserFieldSuccess('updateUser')
        const updateUserSuccess = [setUser, setSuccess]
        const updateUserFailure = (error: ServerError) => setUserFieldFailure({error, field: 'updateUser'})
        dispatch(apiCallAsync(updateUser, updateUserSuccess, updateUserFailure))
    }
}

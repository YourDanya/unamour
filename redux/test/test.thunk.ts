import {AppThunk} from 'redux/store'
import {incrX} from 'redux/test/test.slice'
import {incrY} from 'redux/test/test.slice'
import {startAsync} from 'redux/user/user.slice'
import {Api} from 'utils/api/api.utils'
import {StateError} from 'types/types'
import {failAsync} from 'redux/user/user.slice'
import {successAsync} from 'redux/user/user.slice'
import {apiCallAsync} from 'utils/api/api.utils'
import {decrX} from 'redux/test/test.slice'

export const testThunk = (): AppThunk => {
    return async (dispatch) => {
        dispatch(startAsync('getUser'))
        const getUser = () => Api.get('/users/user-data')
        const getUserFailure = (error: StateError) => failAsync({error, field: 'getUser'})
        const setSuccess = () => successAsync({field: 'getUser'})
        const getUserSuccess = [incrY, decrX]
        dispatch(apiCallAsync(getUser, getUserSuccess, getUserFailure))
    }
}
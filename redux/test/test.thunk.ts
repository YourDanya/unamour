import {AppThunk} from 'redux/store'
import {setUserFieldStart} from 'redux/user/user.slice'

export const testThunk = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setUserFieldStart('getUser'))
    }
}
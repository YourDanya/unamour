import {AppThunk} from 'redux/store'
import {userFieldStart} from 'redux/user/user.slice'

export const testThunk = (): AppThunk => {
    return async (dispatch) => {
        dispatch(userFieldStart('getUser'))
    }
}
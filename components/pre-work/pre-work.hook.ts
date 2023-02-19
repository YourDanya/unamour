import {useDispatch} from 'react-redux'
import {getUserAsync} from 'redux/user/user.thunk'
import {useEffect} from 'react'
import {selectUser} from 'redux/user/user.selectors'
import {useSelector} from 'react-redux'
import {getItemsAsync} from 'redux/admin/admin.thunk'
import {selectUserField} from 'redux/user/user.selectors'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'

const usePreWork = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserAsync())
    }, [])

    useEffect(() => {
        if (user?.isAdmin) {
            dispatch(getItemsAsync())
        }
    }, [user])
}

export default usePreWork
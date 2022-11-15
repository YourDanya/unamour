import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {getItems} from 'redux/shop-items/shop-items.thunk'
import {getUserAsync} from 'redux/user/user.thunk'
import {selectClientItems} from 'redux/shop-items/shop-items.selector'
import {useEffect} from 'react'

const usePreWork = () => {
    const items = useSelector(selectClientItems)
    const dispatch = useDispatch()

    useEffect(() => {
        if (items.length === 0) {
            dispatch(getItems())
        }
        dispatch(getUserAsync())
    }, [])
}

export default usePreWork
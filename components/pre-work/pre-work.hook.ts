import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {fetchItems} from 'redux/shop-items/shop-items.thunk'
import {getUserAsync} from 'redux/user/user.thunk'
import {selectClientItems} from 'redux/shop-items/shop-items.selector'

const usePreWork = () => {
    const items = useSelector(selectClientItems)
    const dispatch = useDispatch()

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchItems())
        }
        dispatch(getUserAsync())
    }, [])
}

export default usePreWork
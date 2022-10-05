import {useSelector} from 'react-redux'
import {selectClientItems} from 'redux/shop-items/shop-items.slice'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {fetchItems} from 'redux/shop-items/shop-items.thunk'
import {getUser} from 'redux/user/user.thunk'
import {useRouter} from 'next/router'
import {Locale} from 'redux/main/main.types'
import {setPath} from 'redux/main/main.slice'
import {setLocale} from 'redux/main/main.slice'

const usePreWork = () => {
    const items = useSelector(selectClientItems)
    const dispatch = useDispatch()

    useEffect(() => {
        if (items.length == 0) {
            console.log('no items')
            dispatch(fetchItems())
        }
        dispatch(getUser())
    }, [])
}

export default usePreWork
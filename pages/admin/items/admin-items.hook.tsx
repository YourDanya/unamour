import {useSelector} from 'react-redux'
import {selectFetchedItems} from 'redux/shop-items/shop-items.selector'
import {selectUser} from 'redux/user/user.selectors'
import {useEffect} from 'react'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useRouter} from 'next/router'

const useAdminItems = () => {
    const items = useSelector(selectFetchedItems)
    const user = useSelector(selectUser)
    const getUser = useParamSelector(selectUserField, 'getUser')
    const router = useRouter()
    
    useEffect(() => {
        if (getUser.error || (getUser.success && !user?.isAdmin)) {
            router.push('/')
        }
    }, [getUser])
    
    return {items, user}
}

export default useAdminItems
import {useSelector} from 'react-redux'
import {selectFetchedItems} from 'redux/shop-items/shop-items.selector'
import {selectUser} from 'redux/user/user.selectors'
import {useEffect} from 'react'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useRouter} from 'next/router'
import {selectShopItemsField} from 'redux/shop-items/shop-items.selector'
import {useState} from 'react'
import {nullObj} from 'utils/main/main.utils'

const useAdminItems = () => {
    const fetchedItems = useSelector(selectFetchedItems)
    const [items, setItems] = useState(fetchedItems)
    const user = useSelector(selectUser)
    const getUser = useParamSelector(selectUserField, 'getUser')
    const router = useRouter()
    const getItems = useParamSelector(selectShopItemsField, 'getItems')

    useEffect(() => {
        if (getUser.error || (getUser.success && !user?.isAdmin)) {
            router.push('/')
        }
    }, [getUser])

    useEffect(() => {
        setItems(fetchedItems)
    }, [fetchedItems])

    const onAddItem = () => {
        const newItem = nullObj(items[items.length - 1])
        setItems([...items, newItem])
    }

    return {items, user, getItems, onAddItem}
}

export default useAdminItems
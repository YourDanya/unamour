import {useSelector} from 'react-redux'
import {selectFetchedItems} from 'redux/shop-items/shop-items.selector'
import {selectUser} from 'redux/user/user.selectors'
import {useEffect} from 'react'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useRouter} from 'next/router'
import {selectShopItemsField} from 'redux/shop-items/shop-items.selector'
import {MouseEvent} from 'react'
import {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import adminItemsContent from 'pages/admin/items/admin-items.content'
import {useDispatch} from 'react-redux'
import {addItem} from 'redux/shop-items/shop-items.slice'

const useAdminItems = () => {
    const items = useSelector(selectFetchedItems)
    const user = useSelector(selectUser)
    const getUser = useParamSelector(selectUserField, 'getUser')
    const router = useRouter()
    const getItems = useParamSelector(selectShopItemsField, 'getItems')
    const [transl] = useLocale(adminItemsContent)
    const [itemError, setItemError] = useState('')

    useEffect(() => {
        if (getUser.error || (getUser.success && !user?.isAdmin)) {
            router.push('/')
        }
    }, [getUser])

    const dispatch = useDispatch()
    const toAddItem = !items[items.length - 1]?._id

    const onAddItem = (event: MouseEvent) => {
        event.preventDefault()
        if (!toAddItem) {
            const item = {...items[items.length - 1]}
            item._id = ''
            dispatch(addItem(item))
        } else if (!itemError) {
            setItemError(transl.saveBeforeCreate)
        }
    }

    return {items, user, getItems, onAddItem, toAddItem, transl, itemError}
}

export default useAdminItems
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
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useLocale} from 'hooks/other/other.hooks'
import adminItemsContent from 'pages/admin/items/admin-items.content'

const useAdminItems = () => {
    const items = useSelector(selectFetchedItems)
    const user = useSelector(selectUser)
    const getUser = useParamSelector(selectUserField, 'getUser')
    const router = useRouter()
    const getItems = useParamSelector(selectShopItemsField, 'getItems')
    const [toAddItem, setToAddItem] = useState<null | FetchedItem>(null)
    const [transl] = useLocale(adminItemsContent)

    useEffect(() => {
        if (getUser.error || (getUser.success && !user?.isAdmin)) {
            router.push('/')
        }
    }, [getUser])

    const onAddItem = (event: MouseEvent) => {
        event.preventDefault()
        setToAddItem(items[items.length - 1])
    }

    return {items, user, getItems, onAddItem, toAddItem, transl}
}

export default useAdminItems
import {useSelector} from 'react-redux'
import {selectUser} from 'redux/user/user.selectors'
import {useEffect} from 'react'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useRouter} from 'next/router'
import {MouseEvent} from 'react'
import {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import adminItemsContent from 'pages/admin/items/admin-items.content'
import {useDispatch} from 'react-redux'
import {addAdminItem} from 'redux/admin/admin.slice'
import {selectAdminItems} from 'redux/admin/admin.selectors'
import {selectAdminField} from 'redux/admin/admin.selectors'

const useAdminItems = () => {
    const router = useRouter()
    const items = useSelector(selectAdminItems)
    const user = useSelector(selectUser)
    const getUser = useParamSelector(selectUserField, 'getUser')
    const getItems = useParamSelector(selectAdminField, 'getItems')
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
            dispatch(addAdminItem(item))
        } else if (!itemError) {
            setItemError(transl.saveBeforeCreate)
        }
    }

    return {items, user, getItems, onAddItem, toAddItem, transl, itemError}
}

export default useAdminItems
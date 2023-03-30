import {useSelector} from 'react-redux'
import {selectUser} from 'redux/user/user.selectors'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {MouseEvent} from 'react'
import {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import adminItemsContent from 'components/admin/items/admin-items.content'
import {useDispatch} from 'react-redux'
import {addAdminItem} from 'redux/admin/admin.slice'
import {selectAdminItems} from 'redux/admin/admin.selectors'
import {ItemVariant} from 'components/admin/items/item-form/item-form.types'
import {useApiCall} from 'utils/api/api-v2.utils'
import {useRef} from 'react'

const useAdminItems = () => {
    const test = useRef(performance.now())
    test.current = performance.now()

    const router = useRouter()
    const items = useSelector(selectAdminItems)
    const user = useSelector(selectUser)

    const getUser = useApiCall( 'getUser')
    const getItems = useApiCall( 'getItems')

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
            const item = JSON.parse(JSON.stringify(items[items.length - 1]))
            item.common.variants.forEach((variant: ItemVariant) => {
                delete (variant as any)._id
                variant.images = []
            })
            item._id = ''
            dispatch(addAdminItem(item))
        } else if (!itemError) {
            setItemError(transl.saveBeforeCreate)
        }
    }

    const [slugs, setSlugs] = useState<Record<string, string>>({})
    const slugsRef = useRef(slugs)

    useEffect(() => {
        if (items.length > 0) {
            const slugs = items.reduce((slugs, item) => {
                slugs[item._id] = item.common.slug
                return slugs
            }, {} as Record<string, string>)
            slugsRef.current = slugs
            setSlugs({...slugs})
        }
    }, [items])

    const testRef = useRef({a: {b: 1}})

    return {
        items, user, getItems, onAddItem, toAddItem, transl, itemError, providerValue: {slugs, setSlugs, slugsRef, testRef}
    }
}

export default useAdminItems
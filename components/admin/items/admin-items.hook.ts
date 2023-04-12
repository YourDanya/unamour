import {useSelector} from 'react-redux'
import {selectUser} from 'redux/user/user.selectors'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {MouseEvent} from 'react'
import {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import adminItemsContent from 'components/admin/items/admin-items.content'
import {ItemVariant} from 'components/admin/items/item-form/item-form.types'
import {useApiCall} from 'utils/api/api-v2.utils'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useAdminItemsStore} from 'components/admin/items/store/admin-items.store'
import {peek} from 'utils/main/main.utils'

const useAdminItems = () => {
    const router = useRouter()
    const user = useSelector(selectUser)
    const [transl] = useLocale(adminItemsContent)

    const getUser = useApiCall('users/user-data')

    const {
        items, addItem, setItems,
    } = useAdminItemsStore((state) => {
        return peek(state, ['items', 'addItem', 'setItems'])
    })

    const getItems = useApiCall<{ items: FetchedItem[] }>('shop-item/all', {
        onSuccess: ({items}) => {
            setItems(items)
        }
    })

    useEffect(() => {
        if (getUser.error || (getUser.success && !user?.isAdmin)) {
            router.push('/')
        }
    }, [getUser])

    useEffect(() => {
        getUser.start()
        getItems.start()
    }, [])

    // const [itemError, setItemError] = useState('')
    // const [canAddItem, setCanAddItem] = useState(true)

    const onAddItem = (event: MouseEvent) => {
        event.preventDefault()
        // if (canAddItem) {
        const item = JSON.parse(JSON.stringify(items[items.length - 1]))
        item.common.variants.forEach((variant: ItemVariant) => {
            delete (variant as any)._id
            variant.images = []
        })
        item._id = ''
        // setCanAddItem(false)
        addItem(item)
        // } else if (!itemError) {
        // setItemError(transl.saveBeforeCreate)
        // }
    }

    return {
        user, getItems, onAddItem,  transl, items
    }
}

export default useAdminItems

// const lastNode = useRef<ItemNode>()
//
// const itemsList = useMemo(() => {
//     let list: DoubleNode<typeof items[number]> = {} as DoubleNode<typeof items[number]>
//     let tempNode: DoubleNode<typeof items[number]> = list
//
//     items.forEach((elem) => {
//         tempNode.next = {value: elem, prev: tempNode}
//         tempNode = tempNode.next
//         lastNode.current = tempNode
//     })
//
//     delete list?.next?.prev
//     return list.next as DoubleNode<typeof items[number]>
// }, [items])

// const initSlugsRef = useRef<Record<string, string>>({})
// useFirsRender(() => setSlugsRef(initSlugsRef))
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {ItemVariant} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {selectUser} from 'app/[locale]/_redux/user/user.selectors'
import {useAdminItemsStore} from 'app/[locale]/admin/items/_components/store/admin-items.store'
import adminItemsContent from 'app/[locale]/admin/items/_components/admin-items.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {peek} from 'app/[locale]/_common/utils/main/main.utils'
import {useRouter} from 'next/navigation'
import {MouseAction} from 'app/[locale]/_common/types/types'

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

    const onAddItem: MouseAction = (event) => {
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
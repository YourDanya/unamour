import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {ItemVariant} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {useEffect} from 'react'
import {useAdminItemsStore} from 'app/[locale]/admin/items/_components/store/admin-items.store'
import adminItemsContent from 'app/[locale]/admin/items/_components/admin-items.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {peek} from 'app/_common/utils/helpers/peek/peek.util'
import {useRouter} from 'next/navigation'
import {MouseAction} from 'app/_common/types/types'
import {useUserStore} from 'app/_common/store/user/user.store'

const useAdminItems = () => {
    const router = useRouter()
    const user = useUserStore(user => user.user)
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

    const onAddItem: MouseAction = (event) => {
        event.preventDefault()
        // if (canAddItem) {
        const item = JSON.parse(JSON.stringify(items[items.length - 1]))
        item.variants.forEach((variant: ItemVariant) => {
            delete (variant as any)._id
            variant.images = []
        })
        item._id = ''
        addItem(item)
    }

    return {
        user, getItems, onAddItem,  transl, items
    }
}

export default useAdminItems

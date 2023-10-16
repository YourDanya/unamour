import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {useEffect} from 'react'
import adminItemsContent from 'app/[locale]/admin/items/_components/admin-items.content'
import {useRouter} from 'next/navigation'
import {MouseAction} from 'app/_common/types/types'
import {useUserStore} from 'app/_common/store/user/user.store'
import {useState} from 'react'
import {createPaginationParams} from 'app/_common/utils/helpers/create-pagination-params/create-pagination-params.util'
import {paginateItems} from 'app/_common/utils/helpers/paginate-items/paginate-items.util'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {CSSProperties} from 'react'
import {ItemPreviewStyles} from 'app/[locale]/admin/items/_components/admin-items.types'

const useAdminItems = () => {
    const initState = useGetState()
    useHandleEffects(initState)
    const withActionsState= useGetActions(initState)

    const withStylesState = createStyle(withActionsState)

    return withStylesState
}

export default useAdminItems

const useGetState = () => {
    const router = useRouter()
    const user = useUserStore(user => user.user)
    const transl = useLocale(adminItemsContent)

    const getUser = useApiCall('users/user-data')

    const [items, setItems] = useState<FetchedItem[]>([])
    const [totalCount, setTotalCount] = useState(0)

    const getItems = useApiCall<{ items: FetchedItem[], totalCount: number }>('shop-item', {
        onSuccess: ({items, totalCount}) => {
            setItems(items)
            setTotalCount(totalCount)
        }
    })

    const [currentPage, setCurrentPage] = useState(1)
    const {startIndex, endIndex, pagesNumber} = createPaginationParams({totalCount, currentPage, perPage: 10})
    const {pageItems} = paginateItems({items, startIndex, endIndex})

    return {
        transl, items, pagesNumber, currentPage, setCurrentPage, setItems, getUser, router, user, getItems,
        pageItems
    }
}

const useHandleEffects = (state: ReturnType<typeof useGetState>) => {
    const {getUser, router, user, getItems} = state

    useEffect(() => {
        if (getUser.error || (getUser.success && !user?.isAdmin)) {
            router.push('/')
        }
    }, [getUser])

    useEffect(() => {
        getUser.start()
        getItems.start()
    }, [])
}

const useGetActions = (state: ReturnType<typeof useGetState>) => {
    const {items} = state

    const onAddItem: MouseAction = (event) => {
        event.preventDefault()

        // const item = JSON.parse(JSON.stringify(items[items.length - 1]))
        // item.variants.forEach((variant: ItemVariant) => {
        //     delete (variant as any)._id
        //     variant.images = []
        // })
        // item._id = ''
        //
        // addItem(item)
    }
    const onUpdate = () => {

    }
    const onDelete = () => {

    }

    return {...state, onAddItem, onUpdate, onDelete}
}

const createStyle = (state: ReturnType<typeof useGetActions>) => {

    const {pageItems} = state

    const tableStyles: CSSProperties = {}
    const itemsStyles: ItemPreviewStyles[] = []

    let gridTemplateAreas = '"num name . category . image . actions" '

    for (let i = 0; i < pageItems.length; i++) {
        itemsStyles[i] = {
            num: {gridArea: `num-${i}`},
            name: {gridArea: `name-${i}`},
            category: {gridArea: `category-${i}`},
            image: {gridArea: `image-${i}`},
            actions: {gridArea: `actions-${i}`}
        }

        gridTemplateAreas += `"num-${i} name-${i} . category-${i} . image-${i} . actions-${i}" `
    }

    tableStyles.gridTemplateAreas = gridTemplateAreas

    return {...state, tableStyles, itemsStyles}
}
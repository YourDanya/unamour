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
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {useLayoutEffect} from 'react'
import {FormValue} from 'app/[locale]/admin/items/_components/admin-items.types'
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

    const [items, setItems] = useState<FetchedItem[]>([])
    const [totalCount, setTotalCount] = useState(0)

    const [currentPage, setCurrentPage] = useState(1)
    const {startIndex, endIndex, pagesNumber} = createPaginationParams({totalCount, currentPage, perPage: 10})
    const {pageItems} = paginateItems({items, startIndex, endIndex})

    const getItems = useApiCall<{ items: FetchedItem[], totalCount: number }>( {
        url: `shop-item?page=${currentPage}`,
        onSuccess: ({items, totalCount}) => {
            console.log('success')
            setItems(items)
            setTotalCount(totalCount)
        }
    })

    const [formValue, setFormValue] = useState<FormValue | null>(null)

    return {
        transl, items, pagesNumber, currentPage, setCurrentPage, setItems, router, user, getItems,
        pageItems, formValue, setFormValue
    }
}

const useHandleEffects = (state: ReturnType<typeof useGetState>) => {
    const { router, user, getItems, currentPage, setItems} = state

    useEffect(() => {
        if (user === null || (user && !user.isAdmin)) {
            router.push('/')
        }
    }, [user])

    useLayoutEffect(() => {
        getItems.start()
    }, [currentPage])
}

const useGetActions = (state: ReturnType<typeof useGetState>) => {
    const {items, setCurrentPage, setItems, setFormValue} = state
    const onAddItem: MouseAction = (event) => {
        event.preventDefault()
    }
    const onUpdate = (itemIndex: number) => {
        const item = items[itemIndex]
        setFormValue({action: 'update', itemIndex, item})
    }
    const onDelete = () => {
        
    }
    const onCurrentPage = (page: number) => {
        setItems([])
        setCurrentPage(page)
    }

    return {...state, onAddItem, onUpdate, onDelete, onCurrentPage}
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

import {FetchedItem} from 'app/_common/types/fetched-item'
import adminItemsContent from 'app/[locale]/admin/items/_components/admin-items.content'
import {useRouter} from 'next/navigation'
import {MouseAction} from 'app/_common/types/types'
import {useUserStore} from 'app/_common/store/user/user.store'
import {useState} from 'react'
import {createPaginationParams} from 'app/_common/utils/helpers/create-pagination-params/create-pagination-params.util'
import {paginateItems} from 'app/_common/utils/helpers/paginate-items/paginate-items.util'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {FormValue} from 'app/[locale]/admin/items/_components/admin-items.types'
import {AdminItem} from 'app/_common/types/admin-item'
import {createStyle} from 'app/[locale]/admin/items/_components/create-style'
import {useRef} from 'react'
import {useEffect} from 'react'
const useAdminItems = () => {
    const initState = useGetState()
    const withApiState = useApi(initState)
    useHandleEffects(withApiState)
    const withActionsState = useGetActions(withApiState)

    return withActionsState
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

    const [formValue, setFormValue] = useState<FormValue | null>(null)
    const [modalActive, setModalActive] = useState(false)

    const {tableStyles, itemsStyles} = createStyle(pageItems)

    const [deleteIndex, setDeleteIndex] = useState(-1)

    const deleteSuccessRef = useRef(() => {})

    return {
        transl, items, pagesNumber, currentPage, setCurrentPage, setItems, router, user, tableStyles,
        itemsStyles, pageItems, formValue, setFormValue, totalCount, setTotalCount, modalActive, setModalActive,
        deleteIndex, setDeleteIndex, deleteSuccessRef
    }
}

const useApi = (state: ReturnType<typeof useGetState>) => {
    const {currentPage, setItems, setTotalCount, items, deleteIndex, deleteSuccessRef} = state

    const getItems = useApiCall<{ items: FetchedItem[], totalCount: number }>( {
        url: `shop-item?page=${currentPage}`,
        onSuccess: (data) => {
            setItems(data.items)
            setTotalCount(data.totalCount)
        }
    })

    const deleteItem = useApiCall( {
        url: `shop-item/${items[deleteIndex]?._id}`,
        method: 'DELETE',
        onSuccess: () => deleteSuccessRef.current()
    })

    return {...state, getItems, deleteItem}
}

const useHandleEffects = (state: ReturnType<typeof useApi>) => {
    const { router, user, getItems, currentPage, deleteSuccessRef} = state

    useEffect(() => {
        if (user === null || (user && !user.isAdmin)) {
            router.push('/')
        }
    }, [user])

    useEffect(() => {
        getItems.start()
    }, [currentPage])

    useEffect(() => {
        deleteSuccessRef.current = () => deleteSuccess(state)
    })
}

const deleteSuccess = (state: ReturnType<typeof useApi>) => {
    const {totalCount, currentPage, setCurrentPage, setItems, getItems} = state
    const newPagesNumber = Math.ceil((totalCount - 1) / 10)
    if (newPagesNumber < currentPage) {
        setCurrentPage(newPagesNumber)
    }
    setItems([])
    getItems.start()
}

const useGetActions = (state: ReturnType<typeof useApi>) => {
    const {
        items, setCurrentPage, setItems, setFormValue, totalCount, getItems, setModalActive, currentPage, deleteItem,
        setDeleteIndex
    } = state
    const onAddItem: MouseAction = (event) => {
        event.preventDefault()
        createItem(state)
    }
    const onUpdate = (itemIndex: number) => {
        const item = JSON.parse(JSON.stringify(items[itemIndex]))
        setFormValue({action: 'update', itemIndex, item})
    }
    const onDelete = (index: number) => {
        setModalActive(true)
        setDeleteIndex(index)
    }
    const onCurrentPage = (page: number) => {
        setItems([])
        setCurrentPage(page)
    }
    const onBack = () => {
        setItems([])
        setFormValue(null)
        getItems.start()
    }
    const onCreate = () => {
        const newPagesNumber = Math.ceil((totalCount + 1) / 10)
        setCurrentPage(newPagesNumber)
    }
    const onHideModal = () => {
        setModalActive(false)
    }
    const onYes = () => {
        deleteItem.start()
        setModalActive(false)
    }
    const onNo = () => {
        setModalActive(false)
    }
    
    return {
        ...state, onAddItem, onUpdate, onDelete, onCurrentPage, onBack, onCreate, onHideModal, onYes, onNo
    }
}
const createItem = (state: ReturnType<typeof useGetState>) => {
    const {items, setFormValue, totalCount} = state

    const item: AdminItem = JSON.parse(JSON.stringify(items[items.length - 1]))
    delete item._id

    item.variants = item.variants.filter((_, index) => index === 0)

    item.variants[0].tempId = (Date.now() * Math.random() * 100).toString()
    item.variants[0].images = []

    setFormValue({action: 'create', item, itemIndex: totalCount})
}



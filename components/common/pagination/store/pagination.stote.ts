import {createContext} from 'react'
import {useContext} from 'react'
import {PaginationState} from 'components/common/pagination/store/pagination.types'
import {CreatePaginationStore} from 'components/common/pagination/store/pagination.types'
import {UsePaginationStore} from 'components/common/pagination/store/pagination.types'
import {StoreApi} from 'zustand'
import {create} from 'zustand'
import {useStore} from 'zustand'

export const PaginationContext = createContext<StoreApi<PaginationState>>({} as StoreApi<PaginationState>)

export const createPaginationStore: CreatePaginationStore = (initState) => {
    const {itemIndex, perPage, data} = initState
    const pageIndex = itemIndex % perPage

    return create((set) => ({
        itemIndex, perPage, pageIndex, data
    }))
}

export const usePaginationStore: UsePaginationStore = (selector, equalityFn) => {
    const store = useContext(PaginationContext)
    return useStore(store, selector, equalityFn)
}
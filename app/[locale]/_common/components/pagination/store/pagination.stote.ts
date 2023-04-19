import {createContext} from 'react'
import {useContext} from 'react'
import {StoreApi} from 'zustand'
import {create} from 'zustand'
import {useStore} from 'zustand'
import {PaginationState} from 'app/[locale]/_common/components/pagination/store/pagination.types'
import {UsePaginationStore} from 'app/[locale]/_common/components/pagination/store/pagination.types'
import {CreatePaginationStore} from 'app/[locale]/_common/components/pagination/store/pagination.types'

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
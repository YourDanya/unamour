import {StoreApi} from 'zustand'
import {UseBoundStore} from 'zustand'

export type PaginationState<TData = any> = {
    itemIndex: number,
    pageIndex: number,
    perPage: number,
    data: TData
}

export type PaginationInitState = {
    itemIndex: number,
    perPage: number,
    data: any
}

export type CreatePaginationStore = (paginationState: PaginationInitState) => UseBoundStore<StoreApi<PaginationState>>

export type UsePaginationStore = <T> (
    selector: (state: PaginationState) => T,
    equalityFn?: (left: T, right: T) => boolean
) => T
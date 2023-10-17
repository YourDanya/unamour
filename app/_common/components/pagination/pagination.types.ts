import {ReactNode} from 'react'
import {MouseAction} from 'app/_common/types/types'

export type PaginationProps = {
    className?: string,
    perPage?: number,
    currentPage: number,
    pagesNumber: number
    onCurrentPage: (number: number) => void
}

export type PaginationNumberProps = {
    currentPage: number,
    number: number,
    onPage: MouseAction
}
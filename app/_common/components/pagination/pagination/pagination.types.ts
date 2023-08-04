import {ReactNode} from 'react'

export type PaginationProps = {
    children: ReactNode,
    className?: string,
    perPage?: number,
    currentPage: number,
    pagesNumber: number
    setCurrentPage: (number: number) => void
}
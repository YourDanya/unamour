'use client'

import {useLayoutEffect} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {PaginationProps} from 'app/[locale]/_common/components/pagination/pagination/pagination.types'

const usePagination = (props: PaginationProps) => {
    const {currentPage, setCurrentPage, pagesNumber} = props

    const onPage: MouseAction = (event) => {
        const currentPage = +(event.currentTarget.getAttribute('name') as string)
        setCurrentPage(currentPage)
    }

    const onBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const onForward = () => {
        if (currentPage < pagesNumber) {
            setCurrentPage(currentPage + 1)
        }
    }

    useLayoutEffect(() => {
        if (currentPage > pagesNumber) {
            setCurrentPage(pagesNumber)
            if (pagesNumber === 0) {
                setCurrentPage(1)
            }
        }
    }, [pagesNumber])

    return {
        onBack, onForward, currentPage, pagesNumber, onPage,
    }
}

export default usePagination
'use client'

import {useLayoutEffect} from 'react'
import {MouseAction} from 'app/_common/types/types'
import {PaginationProps} from 'app/_common/components/pagination/pagination.types'

const usePagination = (props: PaginationProps) => {
    const {currentPage, onCurrentPage, pagesNumber} = props
    
    const onPage: MouseAction = (event) => {
        const currentPage = +(event.currentTarget.getAttribute('name') as string)
        onCurrentPage(currentPage)
    }

    const onBack = () => {
        if (currentPage > 1) {
            onCurrentPage(currentPage - 1)
        }
    }

    const onForward = () => {
        if (currentPage < pagesNumber) {
            onCurrentPage(currentPage + 1)
        }
    }

    useLayoutEffect(() => {
        if (currentPage > pagesNumber) {
            onCurrentPage(pagesNumber)
            if (pagesNumber === 0) {
                onCurrentPage(1)
            }
        }
    }, [pagesNumber])

    const paginationParams = calcParams(props)

    return {
        onBack, onForward, currentPage, pagesNumber, onPage, ...paginationParams
    }
}

export default usePagination

const calcParams = (props: PaginationProps) => {
    const {pagesNumber, currentPage} = props

    const beforeHidden = pagesNumber > 5 && (currentPage > 3)
    const afterHidden = pagesNumber > 5 && (currentPage < pagesNumber - 2)

    let nearCurrentElems: number[] = []

    if (currentPage < 4) {
        nearCurrentElems = [2, 3, 4]
    } else if (currentPage > pagesNumber - 3) {
        nearCurrentElems = [pagesNumber - 3, pagesNumber - 2, pagesNumber - 1]
    } else {
        nearCurrentElems = [currentPage - 1, currentPage, currentPage + 1]
    }

    nearCurrentElems.filter((number) => number < pagesNumber)

    const firstPresent = pagesNumber >= 1
    const lastPresent = pagesNumber >= 2

    return {beforeHidden, afterHidden, firstPresent, lastPresent, nearCurrentElems}
}
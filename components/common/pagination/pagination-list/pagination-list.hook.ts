import {ListPaginationProps} from 'components/common/pagination/pagination-list/pagination-list.types'
import {Children} from 'react'
import {useState} from 'react'
import {useLayoutEffect} from 'react'

const useListPagination = (props: ListPaginationProps) => {

    const [perPage] = useState(props.perPage ?? 5)
    const pagesNumber = Math.ceil(props.pagesNumber / perPage)

    const [currentPage, setCurrentPage] = useState(1)

    useLayoutEffect(() => {
        if (currentPage > pagesNumber) {
            setCurrentPage(pagesNumber)
            if (pagesNumber === 0) {
                setCurrentPage(1)
            }
        }
    }, [pagesNumber])

    return {pagesNumber, currentPage, setCurrentPage, perPage}
}

export default useListPagination
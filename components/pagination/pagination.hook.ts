import {useState} from 'react'
import {PaginationProps} from 'components/pagination/pagination.types'
import {Children} from 'react'

const usePagination = (props: PaginationProps) => {
    const children = Children.toArray(props.children)

    const [currentPage, setCurrentPage] = useState(0)
    const [perPage, setPerPage] = useState(0)

    const pagesNumber = Math.floor(children.length / perPage)

    const onBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const onForward = () => {
        if (currentPage < pagesNumber) {
            setCurrentPage(currentPage + 1)
        }
    }

    const setPage = () => {
    }

    return {onBack, onForward, children, currentPage, perPage, setPerPage, pagesNumber, setPage}
}

export default usePagination

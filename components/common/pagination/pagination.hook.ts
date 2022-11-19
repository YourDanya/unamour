import {useState} from 'react'
import {Children} from 'react'
import {useSetActive} from 'hooks/event-handler/event-handler.hooks'
import {PaginationProps} from 'components/common/pagination/pagination.types'

const usePagination = (props: PaginationProps) => {
    const children = Children.toArray(props.children)

    const [currentPage, onCurrentPage, setCurrentPage] = useSetActive(1, 'data-value')
    const [perPage, _setPerPage] = useState(5)
    const setPerPage = (value: string) => {
        _setPerPage(+value)
    }

    const perPageValues = Array.from({length: 10}, (elem: number) => elem+1)

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

    return {onBack, onForward, children, currentPage, perPage, pagesNumber, onCurrentPage, perPageValues, setPerPage}
}

export default usePagination

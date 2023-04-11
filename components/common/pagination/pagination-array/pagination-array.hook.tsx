import {useState} from 'react'
import {PaginationArrayProps} from 'components/common/pagination/pagination-array/pagination-array.types'
import {useRef} from 'react'
import {createPaginationStore} from 'components/common/pagination/store/pagination.stote'

const usePaginationArray = (props: PaginationArrayProps) => {
    const perPage = props.perPage ?? 5

    const pagesNumber = Math.ceil(props.arr.length / (perPage))

    const [currentPage, setCurrentPage] = useState(1)

    return {currentPage, setCurrentPage, pagesNumber, perPage}
}

export default usePaginationArray
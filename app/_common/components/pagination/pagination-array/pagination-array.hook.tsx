import {useState} from 'react'
import {PaginationArrayProps} from 'app/_common/components/pagination/pagination-array/pagination-array.types'

const usePaginationArray = (props: PaginationArrayProps) => {
    const perPage = props.perPage ?? 5

    const pagesNumber = Math.ceil(props.arr.length / (perPage))

    const [currentPage, setCurrentPage] = useState(1)

    return {currentPage, setCurrentPage, pagesNumber, perPage}
}

export default usePaginationArray
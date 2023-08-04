import Pagination from 'app/_common/components/pagination/pagination/pagination.component'
import {ListPaginationProps} from 'app/_common/components/pagination/pagination-list/pagination-list.types'
import useListPagination from 'app/_common/components/pagination/pagination-list/pagination-list.hook'

const ListPagination = (props: ListPaginationProps) => {
    const {list, lastNode, Component} = props
    const {currentPage, setCurrentPage, pagesNumber, perPage} = useListPagination(props)

    return (
        <Pagination currentPage={currentPage} pagesNumber={pagesNumber} setCurrentPage={setCurrentPage}>
            {/*{children.map((elem, index) =>*/}
            {/*    index >= (currentPage - 1) * perPage && index < currentPage * perPage*/}
            {/*    && elem*/}
            {/*)}*/}
        </Pagination>
    )
}

export default ListPagination
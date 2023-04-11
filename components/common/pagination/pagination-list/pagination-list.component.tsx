import useListPagination from 'components/common/pagination/pagination-list/pagination-list.hook'
import Pagination from 'components/common/pagination/pagination/pagination.component'
import {ListPaginationProps} from 'components/common/pagination/pagination-list/pagination-list.types'

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
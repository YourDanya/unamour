import {FC} from 'react'
import Pagination from 'components/common/pagination/pagination/pagination.component'
import usePaginationArray from 'components/common/pagination/pagination-array/pagination-array.hook'
import {PaginationArrayProps} from 'components/common/pagination/pagination-array/pagination-array.types'
import {createPaginationStore} from 'components/common/pagination/store/pagination.stote'
import {PaginationContext} from 'components/common/pagination/store/pagination.stote'

const PaginationArray: FC<PaginationArrayProps> = (props) => {
    const {className, Component, arr} = props
    const {currentPage, setCurrentPage, pagesNumber, perPage} = usePaginationArray(props)

    return (
        <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesNumber={pagesNumber}
            className={className}
        >
            {Array
                .from({length: perPage})
                .map((_, index) => perPage * (currentPage - 1) + index)
                .filter(itemIndex => itemIndex < arr.length)
                .map((itemIndex) => (
                    <PaginationContext.Provider
                        value={createPaginationStore({
                            itemIndex, perPage, data: arr[itemIndex]
                        })}
                        key={itemIndex}
                    >
                        <Component/>
                    </PaginationContext.Provider>
                ))
            }
        </Pagination>
    )
}

export default PaginationArray
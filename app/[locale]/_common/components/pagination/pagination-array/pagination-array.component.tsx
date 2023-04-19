import {FC} from 'react'
import Pagination from 'app/[locale]/_common/components/pagination/pagination/pagination.component'
import {PaginationArrayProps} from 'app/[locale]/_common/components/pagination/pagination-array/pagination-array.types'
import usePaginationArray from 'app/[locale]/_common/components/pagination/pagination-array/pagination-array.hook'
import {createPaginationStore} from 'app/[locale]/_common/components/pagination/store/pagination.stote'
import {PaginationContext} from 'app/[locale]/_common/components/pagination/store/pagination.stote'

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
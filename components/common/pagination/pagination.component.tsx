import Button from 'components/common/button/button.component'
import {FC} from 'react'
import Picklist from 'components/common/picklist/picklist.component'
import usePagination from 'components/common/pagination/pagination.hook'
import {PaginationProps} from 'components/common/pagination/pagination.types'

const Pagination: FC<PaginationProps> = (props) => {
    const {onBack, onForward, children, currentPage, perPage, pagesNumber, onCurrentPage, perPageValues, setPerPage
    } = usePagination(props)

    return (
        <>
            {children.map((elem, index) =>
                index >= (currentPage - 1) * perPage && index < currentPage * perPage && elem
            )}
            <div className={'pagination'}>
                <Button className={'pagination__elem pagination__back'} onClick={onBack}>
                    <div className={'pagination__back-arrow'}/>
                </Button>
                {pagesNumber > 1 && (
                    <Button className={'pagination__elem pagination__number'} onClick={onCurrentPage}>
                        1
                    </Button>
                )}
                {currentPage - 2 > 1 && (
                    <div className={'pagination__elem pagination__ellipsis'} onClick={onCurrentPage}>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                    </div>
                )}
                {currentPage - 1 > 1 && (
                    <Button className={'pagination__elem pagination__number'} onClick={onCurrentPage}>
                        {currentPage - 1}
                    </Button>
                )}
                {currentPage && (
                    <div className={'pagination__elem pagination__number'} onClick={onCurrentPage}>
                        {currentPage}
                    </div>
                )}
                {currentPage + 1 < pagesNumber && (
                    <Button className={'pagination__elem pagination__number'} onClick={onCurrentPage}>
                        {currentPage - 1}
                    </Button>
                )}
                {currentPage + 2 < pagesNumber && (
                    <div className={'pagination__elem pagination__ellipsis'} onClick={onCurrentPage} data-value={currentPage}>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                    </div>
                )}
                {currentPage!==pagesNumber && (
                    <Button className={'pagination__elem pagination__number'} onClick={onCurrentPage}>
                        {currentPage - 1}
                    </Button>
                )}
                <Button className={'pagination__elem pagination__forward'} onClick={onForward}>
                    <div className={'pagination__forward-arrow'}/>
                </Button>
                {/*<Picklist active={perPage} values={perPageValues} setValue={setPerPage}/>*/}
            </div>
        </>
    )
}

export default Pagination
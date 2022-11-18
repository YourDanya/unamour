import Button from 'components/common/button/button.component'
import usePagination from 'components/pagination/pagination.hook'
import {FC} from 'react'
import {PaginationProps} from 'components/pagination/pagination.types'

const Pagination: FC<PaginationProps> = (props) => {
    const {onBack, onForward, children, currentPage, perPage, setPerPage, pagesNumber, setPage} = usePagination(props)

    return (
        <>
            {children.map((elem, index) =>
                index >= (currentPage - 1) * perPage && index < currentPage * perPage && elem
            )}
            <div className={'pagination'}>
                <Button className={'pagination__back'} onClick={onBack}>
                    <div className={'pagination__back-arrow'}/>
                </Button>
                {pagesNumber > 1 && (
                    <Button className={'pagination__number'} onClick={setPage}>
                        1
                    </Button>
                )}
                {currentPage - 2 > 1 && (
                    <div className={'pagination__ellipsis'} onClick={setPage}>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                    </div>
                )}
                {currentPage - 1 > 1 && (
                    <Button className={'pagination__number'} onClick={setPage}>
                        {currentPage - 1}
                    </Button>
                )}
                {currentPage && (
                    <div className={'pagination__number'} onClick={setPage}>
                        {currentPage}
                    </div>
                )}
                {currentPage + 1 < pagesNumber && (
                    <Button className={'pagination__number'} onClick={setPage}>
                        {currentPage - 1}
                    </Button>
                )}
                {currentPage + 2 < pagesNumber && (
                    <div className={'pagination__ellipsis'} onClick={setPage}>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                    </div>
                )}
                {currentPage && (
                    <div className={'pagination__ellipsis'}>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                        <div className={'pagination__ellipsis-elem'}/>
                    </div>
                )}
                <Button className={'pagination__forward'} onClick={onForward}>
                    <div className={'pagination__forward-arrow'}/>
                </Button>
                {/*<Popup/>*/}
            </div>
        </>
    )
}

export default Pagination
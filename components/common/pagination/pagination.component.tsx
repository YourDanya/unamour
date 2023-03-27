import Button from 'components/common/button/button.component'
import {FC, Fragment} from 'react'
import usePagination from 'components/common/pagination/pagination.hook'
import {PaginationProps} from 'components/common/pagination/pagination.types'

const Pagination: FC<PaginationProps> = (props) => {
    const {className} = props
    const {
        onBack, onForward, children, currentPage, pagesNumber, onPageClick, onPageChange, childRef, width, perPage
    } = usePagination(props)

    return (
        <>
            <div className={`pagination ${className ?? ''}`}>
                <div className={'pagination__items'} ref={childRef}>
                    {children.map((elem, index) =>
                        // index === 0
                        // &&
                        index >= (currentPage - 1) * perPage && index < currentPage * perPage
                        && elem
                    )}
                </div>
                <div className={'pagination__content'}>
                    <Button className={'pagination__elem pagination__back'} onClick={onBack}>
                        &lt;
                    </Button>
                    {Array.from({length: 4}, (_, index) => index + 1).map((number) =>
                            pagesNumber >= number && (currentPage < 4 || number === 1 || pagesNumber < 6) && (
                                <Fragment key={number}>
                                    {currentPage !== number ? (
                                        <Button
                                            className={'pagination__elem'}
                                            onClick={onPageClick}
                                            name={`${number}`}
                                        >
                                            {number}
                                        </Button>
                                    ) : (
                                        <div className={'pagination__elem  pagination__active'}>
                                            {currentPage}
                                        </div>
                                    )}
                                </Fragment>
                            )
                    )}
                    {currentPage > 3 && (currentPage < pagesNumber - 2 || currentPage < 4) && (
                        <div className={'pagination__elem pagination__ellipsis'}>
                            <div className={'pagination__ellipsis-elem'}/>
                            <div className={'pagination__ellipsis-elem'}/>
                            <div className={'pagination__ellipsis-elem'}/>
                        </div>
                    )}
                    {currentPage > 3 && currentPage < pagesNumber - 2 && (
                        <Button
                            className={'pagination__elem'}
                            onClick={onPageClick}
                            name={`${currentPage - 1}`}
                        >
                            {currentPage - 1}
                        </Button>
                    )}
                    {currentPage > 3 && currentPage < pagesNumber - 2 && (
                        <div className={'pagination__elem  pagination__active'}>
                            {currentPage}
                        </div>
                    )}
                    {currentPage > 3 && currentPage < pagesNumber - 2 && (
                        <Button
                            className={'pagination__elem '}
                            onClick={onPageClick}
                            name={`${currentPage + 1}`}
                        >
                            {currentPage + 1}
                        </Button>
                    )}
                    {pagesNumber > 5 && (currentPage < pagesNumber - 2 || currentPage > pagesNumber - 4) && (
                        <div className={'pagination__elem pagination__ellipsis'}>
                            <div className={'pagination__ellipsis-elem'}/>
                            <div className={'pagination__ellipsis-elem'}/>
                            <div className={'pagination__ellipsis-elem'}/>
                        </div>
                    )}
                    {Array.from({length: 4}, (_, index) => pagesNumber - 4 + index + 1).map(number =>
                            pagesNumber > 4 && (pagesNumber > 5 || number > 4) && (currentPage > pagesNumber - 3 || number === pagesNumber) && (
                                <Fragment key={number}>
                                    {currentPage !== number ? (
                                        <Button
                                            className={'pagination__elem '}
                                            onClick={onPageClick}
                                            name={`${number}`}
                                        >
                                            {number}
                                        </Button>
                                    ) : (
                                        <div className={'pagination__elem  pagination__active'}>
                                            {currentPage}
                                        </div>
                                    )}
                                </Fragment>
                            )
                    )}
                    <Button className={'pagination__elem pagination__forward'} onClick={onForward}>
                        &gt;
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Pagination
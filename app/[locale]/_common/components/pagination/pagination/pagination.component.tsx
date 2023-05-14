'use client'

import {FC} from 'react'
import PaginationEllipsis
    from 'app/[locale]/_common/components/pagination/pagination/pagination-ellipsis/pagination-ellipsis.component'
import usePagination from 'app/[locale]/_common/components/pagination/pagination/pagination.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import PaginationNumber
    from 'app/[locale]/_common/components/pagination/pagination/pagination-number/pagination-number.component'
import {PaginationProps} from 'app/[locale]/_common/components/pagination/pagination/pagination.types'

const Pagination: FC<PaginationProps> = (props) => {
    const {className, children} = props

    const {
        onBack, onForward, currentPage, pagesNumber, onPage,
    } = usePagination(props)

    return (
        <div className={`pagination ${className ?? ''}`}>
            <div className={'pagination__items'}>
                {children}
            </div>
            <div className={'pagination__content'}>
                <Button className={'pagination__elem pagination__back'} onClick={onBack}>
                    &lt;
                </Button>
                <PaginationNumber number={1} currentPage={currentPage} onPage={onPage}/>
                {pagesNumber > 5 && (currentPage > 3) && (
                    <PaginationEllipsis/>
                )}
                {(currentPage < 4 ? (
                    [2, 3, 4]
                ) : currentPage > pagesNumber - 3 ? (
                    [pagesNumber - 3, pagesNumber - 2, pagesNumber - 1]
                ) : (
                    [currentPage - 1, currentPage, currentPage + 1]
                )).map((number) => number < pagesNumber && (
                    <PaginationNumber
                        key={number}
                        number={number}
                        currentPage={currentPage}
                        onPage={onPage}
                    />
                ))}
                {pagesNumber > 5 && (currentPage < pagesNumber - 2) && (
                    <PaginationEllipsis/>
                )}
                {pagesNumber > 1 && (
                    <PaginationNumber
                        number={pagesNumber}
                        currentPage={currentPage}
                        onPage={onPage}
                    />
                )}
                <Button className={'pagination__elem pagination__forward'} onClick={onForward}>
                    &gt;
                </Button>
            </div>
        </div>
    )
}

export default Pagination


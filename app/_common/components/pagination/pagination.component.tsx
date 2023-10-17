'use client'

import {FC} from 'react'
import {PaginationNumberProps} from 'app/_common/components/pagination/pagination.types'
import {PaginationProps} from 'app/_common/components/pagination/pagination.types'
import Button from 'app/_common/components/button/button.component'
import usePagination from 'app/_common/components/pagination/pagination.hook'

const Pagination: FC<PaginationProps> = (props) => {
    const {className} = props

    const {
        onBack, onForward, currentPage, pagesNumber, onPage, nearCurrentElems, afterHidden,
        firstPresent, lastPresent, beforeHidden
    } = usePagination(props)

    return (
        <div className={`pagination ${className ?? ''}`}>
            <Button className={'pagination__elem pagination__back'} onClick={onBack}>
                &lt;
            </Button>
            {firstPresent && (
                <Number number={1} currentPage={currentPage} onPage={onPage}/>
            )}
            {beforeHidden && (
                <Ellipsis/>
            )}
            {nearCurrentElems.map((number) => number < pagesNumber && (
                <Number
                    key={number}
                    number={number}
                    currentPage={currentPage}
                    onPage={onPage}
                />
            ))}
            {afterHidden && (
                <Ellipsis/>
            )}
            {lastPresent && (
                <Number
                    number={pagesNumber}
                    currentPage={currentPage}
                    onPage={onPage}
                />
            )}
            <Button className={'pagination__elem pagination__forward'} onClick={onForward}>
                &gt;
            </Button>
        </div>
    )
}

export default Pagination

const Number: FC<PaginationNumberProps> = (props) => {
    const {number, currentPage, onPage} = props

    return (
        <>
            {currentPage !== number ? (
                <Button
                    className={'pagination__elem'}
                    onClick={onPage}
                    name={`${number}`}
                >
                    {number}
                </Button>
            ) : (
                <div className={'pagination__elem  pagination__active'}>
                    {currentPage}
                </div>
            )}
        </>
    )
}

const Ellipsis: FC = () => {
    return (
        <div className={'pagination__elem pagination__ellipsis'}>
            <div className={'pagination__ellipsis-elem'}/>
            <div className={'pagination__ellipsis-elem'}/>
            <div className={'pagination__ellipsis-elem'}/>
        </div>
    )
}

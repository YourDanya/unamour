'use client'

import {FC} from 'react'
import {
    PaginationNumberProps
} from 'app/_common/components/pagination/pagination/pagination-number/pagination-number.types'
import Button from 'app/_common/components/button/button.component'

const PaginationNumber: FC<PaginationNumberProps> = (props) => {
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

export default PaginationNumber
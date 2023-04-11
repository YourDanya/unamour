import {FC} from 'react'
import Button from 'components/common/button/button.component'
import {PaginationNumberProps} from 'components/common/pagination/pagination/pagination-number/pagination-number.types'

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
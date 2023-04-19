'use client'

import {FC} from 'react'

const PaginationEllipsis:FC = () => {
    return (
        <div className={'pagination__elem pagination__ellipsis'}>
            <div className={'pagination__ellipsis-elem'}/>
            <div className={'pagination__ellipsis-elem'}/>
            <div className={'pagination__ellipsis-elem'}/>
        </div>
    )
}

export default PaginationEllipsis
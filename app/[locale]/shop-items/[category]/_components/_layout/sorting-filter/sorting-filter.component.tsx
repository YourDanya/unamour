import React from 'react'
import useSortingFilter from 'app/[locale]/shop-items/[category]/_components/_layout/sorting-filter/sorting-filter.hook'

export type SortingFilterProps = {
    content: string[],
    transl: string[],
    filter: string,
    filters: string[],
}

const SortingFilter: React.FC<SortingFilterProps> = (props) => {
    const {content, transl} = props
    const {sortValue, handleClick} = useSortingFilter(props)

    return (
        <>
            {content.map((param, index) => (
                <button
                    className={`shop-items__sort-item ${param===sortValue ? 'shop-items__sort-item--active' : ''}`}
                    key={param}
                    name={param}
                    onClick={handleClick}
                    data-filter={'sorting'}
                >
                    {transl[index]}
                </button>
            ))}
        </>
    )
}

export default SortingFilter
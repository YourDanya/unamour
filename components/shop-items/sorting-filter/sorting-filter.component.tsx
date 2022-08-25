import React from "react"
import useSortingFilter from "./sorting-filter.hook"

export type sortingFilterProps = {
    sorting: string[],
    sortingTranslation: string[],
    filter: string
    handleFilter: (filter: string, state: any) => void
}

const SortingFilter: React.FC<sortingFilterProps> = (props) => {

    const {sorting, sortingTranslation} = props
    const {sortingValue, handleClick} = useSortingFilter(props)

    return (
        <>
            {sorting.map((param, index) => (
                <button
                    className={`shop-items__sort-item ${param===sortingValue ? 'shop-items__sort-item--active' : ''}`}
                    key={param}
                    name={param}
                    onClick={handleClick}
                    data-filter={'sorting'}
                >
                    {sortingTranslation[index]}
                </button>
            ))}
        </>
    )
}

export default SortingFilter
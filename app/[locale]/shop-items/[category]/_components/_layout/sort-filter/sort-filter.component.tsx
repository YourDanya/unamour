import {FC} from 'react'
import useSortFilter from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.hook'
import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import {sortParams} from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.content'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const SortFilter: FC<FilterProps> = (props) => {
    const {onClick, sortValue, transl} = useSortFilter(props)
    
    return (
        <div className={'shop-items-sort-filter sort'}>
            {sortParams.map((param, index) => (
                <button
                    className={`sort__item ${param === sortValue ? 'sort__item--active' : ''}`}
                    key={param}
                    name={param}
                    onClick={onClick}
                    data-filter={'sorting'}
                >
                    {transl.sortParams[index]}
                </button>
            ))}
        </div>
    )
}

export default SortFilter
import React from 'react'
import {SortState} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {SortingFilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/sorting-filter/sorting-filter.component'
import {useFilter} from 'app/[locale]/shop-items/[category]/_components/_layout/filters.hooks'

const useSortingFilter = (props: SortingFilterProps) => {
    const [state, setState] = useFilter(props)
    const sortValue = state as SortState

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const name = event.currentTarget.name
        if (sortValue !== name) setState(name)
        else setState('')
    }

    return {sortValue, handleClick}
}

export default useSortingFilter
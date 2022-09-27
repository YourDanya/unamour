import {SortState} from 'components/shop-items/shop-items.types'
import {SortingFilterProps} from 'components/shop-items/sorting-filter/sorting-filter.component'
import {useFilter} from 'components/shop-items/filters.hooks'
import React from 'react'

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
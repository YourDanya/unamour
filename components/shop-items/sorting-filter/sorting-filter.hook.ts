import {sortingFilterProps} from "./sorting-filter.component"
import {MouseEvent} from "react"
import {useFilter} from "../filters.hooks"
import {SortState} from "../shop-items.types"

const useSortingFilter = (props: sortingFilterProps) => {

    const [state, setState] = useFilter(props)
    const sortValue = state as SortState

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const name = event.currentTarget.name
        if (sortValue !== name) setState(name)
        else setState('')
    }

    return {sortValue, handleClick}
}

export default useSortingFilter
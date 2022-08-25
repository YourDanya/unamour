import {sortingFilterProps} from "./sorting-filter.component"
import {useToggleActive} from "../../../hooks/event-handler.hooks"
import {useEffect} from "react"

const useSortingFilter = (props: sortingFilterProps) => {
    const {filter, handleFilter} = props
    const [sortingValue, handleClick] = useToggleActive()

    useEffect(() => {
        handleFilter(filter, sortingValue)
    }, [sortingValue])

    return {sortingValue, handleClick}
}

export default useSortingFilter
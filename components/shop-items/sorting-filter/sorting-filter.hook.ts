import {sortingFilterProps} from "./sorting-filter.component"
import {useSetActive} from "../../../hooks/event-handler.hooks"
import {useEffect, useMemo, useRef} from "react"
import {useResetFilter} from "../filters.hooks"
import {SetState} from "../shop-items.types"

const useSortingFilter = (props: sortingFilterProps) => {

    const {filter, handleFilter, getState} = props
    const retrievedState = useMemo(() => getState('sorting'), [])
    const [sortingValue, handleClick, setSortingValue] = useSetActive(retrievedState)

    const toUpdate = useRef(false)

    useEffect(() => {
        if (!toUpdate.current) {
            toUpdate.current = true
            return
        }
        handleFilter(filter, sortingValue)
    }, [sortingValue])

    useResetFilter(filter, setSortingValue as SetState, toUpdate);

    return {sortingValue, handleClick}
}

export default useSortingFilter
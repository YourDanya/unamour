import {sizesFilterProps} from "./sizes-filter.component"
import {_useToggleMany} from "../../../hooks/event-handler.hooks"
import {useEffect, useMemo, useRef} from "react"
import {useResetFilter} from "../filters.hooks"
import {SetState} from "../shop-items.types"

const useSizesFilter = (props: sizesFilterProps) => {
    
    const {sizes, handleFilter, filter, getState} = props
    const retrievedState = useMemo(() => getState('sizes'), [])
    const [sizeValues, handleChange, setSizeValues] = _useToggleMany(retrievedState)
    const toUpdate = useRef(false)

    useEffect(() => {
        if (!toUpdate.current) {
            toUpdate.current = true
            return
        }
        handleFilter(filter, sizeValues)
    }, [sizeValues])

    useResetFilter(filter, setSizeValues as SetState, toUpdate, sizeValues)

    return {sizeValues, handleChange}
}

export default useSizesFilter
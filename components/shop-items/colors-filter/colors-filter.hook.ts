import {colorsFilterProps} from "./colors-filter.component"
import {_useToggleMany} from "../../../hooks/event-handler.hooks"
import {useOmitFirstEffect} from "../../../hooks/component.hooks"
import {useEffect, useMemo, useRef} from "react"
import {useResetFilter} from "../filters.hooks"
import {SetState} from "../shop-items.types"

const useColorsFilter = (props: colorsFilterProps) => {

    const {handleFilter, filter, getState} = props
    const retrievedState = useMemo(() => getState(filter), [])
    const [colorValues, handleChange, setColorValues] = _useToggleMany(retrievedState)
    const toUpdate = useRef(false)

    useEffect(() => {
        if (!toUpdate.current) {
            toUpdate.current = true
            return
        }
        handleFilter(filter, colorValues)
    }, [colorValues])

    useResetFilter(filter, setColorValues as SetState, toUpdate, colorValues)

    return {colorValues, handleChange}
}

export default useColorsFilter
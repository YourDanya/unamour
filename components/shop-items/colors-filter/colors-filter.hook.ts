import {colorsFilterProps} from "./colors-filter.component"
import {useToggleMany} from "../../../hooks/event-handler.hooks";
import {useEffect} from "react";

const useColorsFilter = (props: colorsFilterProps) => {

    const {colors, handleFilter, filter} = props
    const [colorValues, handleChange] = useToggleMany(colors.map(({param, code}) => param))

    useEffect(() => {
        handleFilter(filter, colorValues)
    }, [colorValues])

    return {colorValues, handleChange}
}

export default useColorsFilter
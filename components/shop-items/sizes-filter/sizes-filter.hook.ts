import {sizesFilterProps} from "./sizes-filter.component"
import {useToggleMany} from "../../../hooks/event-handler.hooks"
import {useEffect} from "react"

const useSizesFilter = (props: sizesFilterProps) => {
    const {sizes, handleFilter, filter} = props
    const [sizeValues, handleChange] = useToggleMany(sizes)

    useEffect(() => {
        handleFilter(filter, sizeValues)
    }, [sizeValues])

    return {sizeValues, handleChange}
}

export default useSizesFilter
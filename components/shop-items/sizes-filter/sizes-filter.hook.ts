import {SizesFilterProps} from "./sizes-filter.component"
import {ChangeEvent} from "react"
import {useFilter} from "../filters.hooks"
import {GenState} from "../shop-items.types"

const useSizesFilter = (props: SizesFilterProps) => {

    const [state, setState] = useFilter(props)

    const sizeValues = state as GenState

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        setState({...sizeValues, [name]: !sizeValues[name]})
    }

    return {sizeValues, handleChange}
}

export default useSizesFilter
import {ColorsFilterProps} from "./color-filter.component"
import {useFilter} from "../filters.hooks"
import {GenState} from "../shop-items.types"
import {ChangeEvent} from "react"

const useColorsFilter = (props: ColorsFilterProps) => {

    const [state, setState] = useFilter(props)

    const colorValues = state as GenState

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        setState({...colorValues, [name]: !colorValues[name]})
    }

    return {colorValues, handleChange}
}

export default useColorsFilter
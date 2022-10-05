import {ColorsFilterProps} from "./color-filter.component"
import {useFilter} from "../filters.hooks"
import {GenState} from "../shop-items.types"
import {ChangeEvent} from "react"
import {useRef} from 'react'

const useColorsFilter = (props: ColorsFilterProps) => {

    const [state, setState] = useFilter(props)

    const colorValues = state as GenState
    const colorRef = useRef(colorValues)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        colorRef.current[name] = !colorValues[name]
        setState({...colorRef.current})
    }

    return {colorValues, handleChange}
}

export default useColorsFilter
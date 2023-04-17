import {useFilter} from "../filters.hooks"
import {GenState} from "app/_shop-items/[category]/components/layout/menu.types"
import {ChangeEvent} from "react"
import {useRef} from 'react'
import {ColorsFilterProps} from 'components/shop-items/color-filter/color-filter.types'

const useColorsFilter = (props: ColorsFilterProps) => {

    const [state, setState] = useFilter(props)

    const colorValues = state as GenState
    const colorRef = useRef(colorValues)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        colorRef.current[name] = !colorValues[name]
        setState({...colorRef.current})
    }

    return {colorValues, onChange}
}

export default useColorsFilter
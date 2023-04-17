import {SizesFilterProps} from "./size-filter.component"
import {ChangeEvent} from "react"
import {useFilter} from "../filters.hooks"
import {GenState} from "app/_shop-items/[category]/components/layout/menu.types"
import {useRef} from 'react'

const useSizesFilter = (props: SizesFilterProps) => {

    const [state, setState] = useFilter(props)

    const sizeValues = state as GenState
    const sizeRef = useRef(sizeValues)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        sizeRef.current[name] = !sizeValues[name]
        setState({...sizeRef.current})
    }

    return {sizeValues, onChange}
}

export default useSizesFilter
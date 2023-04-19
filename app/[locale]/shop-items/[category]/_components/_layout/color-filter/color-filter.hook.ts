import {useFilter} from "../filters.hooks"
import {GenState} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {ColorsFilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.types'

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
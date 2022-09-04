import React from "react"
import Checkbox from "../../common/checkbox/checkbox.component"
import useColorsFilter from "./colors-filter.hook"
import {ColorContent, FilterProps} from "../shop-items.types"

export type ColorsFilterProps = {
    content: ColorContent,
    translation: string [],
    filter: string,
    filters: string[]
}

const ColorsFilter: React.FC<ColorsFilterProps> = (props) => {

    const {content: colors, translation} = props
    const {colorValues, handleChange} = useColorsFilter(props)

    return (
        <>
            {colors.map(({param, code}, index) => (
                <Checkbox
                    className={'shop-items__color'}
                    styles={{backgroundColor: code}}
                    key={code}
                    name={param}
                    label={translation[index]}
                    value={colorValues[param]}
                    handleChange={handleChange}
                />
            ))}
        </>
    )
}

export default ColorsFilter
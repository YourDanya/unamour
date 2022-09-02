import React from "react"
import Checkbox from "../../common/checkbox/checkbox.component"
import useColorsFilter from "./colors-filter.hook"
import {GetStateR2, ResetFilter2} from "../shop-items.types"

export type colorsFilterProps = {
    colors: { param: string, code: string }[],
    colorTranslations: string [],
    filter: string,
    handleFilter: (filter: any, state: any) => void,
    getState: GetStateR2,
}

const ColorsFilter: React.FC<colorsFilterProps> = (props) => {

    const {colors, colorTranslations} = props
    const {colorValues, handleChange} = useColorsFilter(props)

    return (
        <>
            {colors.map(({param, code}, index) => (
                <Checkbox
                    className={'shop-items__color'}
                    styles={{backgroundColor: code}}
                    key={code}
                    name={param}
                    label={colorTranslations[index]}
                    value={colorValues[param]}
                    handleChange={handleChange}
                />
            ))}
        </>
    )
}

export default ColorsFilter
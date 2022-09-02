import React from "react"
import Checkbox from "../../common/checkbox/checkbox.component"
import useSizesFilter from "./sizes-filter.hook"
import {GetStateR2, ResetFilter2} from "../shop-items.types"

export type sizesFilterProps = {
    sizes: string[],
    filter: string,
    handleFilter: (string: any, state: any) => void,
    getState: GetStateR2,
}

const SizesFilter: React.FC<sizesFilterProps> = (props) => {

    const {sizes} = props
    const {sizeValues, handleChange} = useSizesFilter(props)

    return (
        <>
            {sizes.map((size, index) => (
                <Checkbox
                    className={`shop-items__size ${index=== sizes.length-1? 'shop-items__size--last' : ''}`}
                    key={size}
                    name={size}
                    label={sizes[index]}
                    value={sizeValues[size]}
                    handleChange={handleChange}
                />
            ))}
        </>
    )
}

export default SizesFilter
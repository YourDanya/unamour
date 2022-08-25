import React from "react"
import Checkbox from "../../common/checkbox/checkbox.component"
import useSizesFilter from "./sizes-filter.hook"

export type sizesFilterProps = {
    sizes: string[],
    filter: string,
    handleFilter: (string: any, state: any) => void
}

const SizesFilter: React.FC<sizesFilterProps> = (props) => {

    const {sizes} = props
    const {sizeValues, handleChange} = useSizesFilter(props)

    return (
        <>
            {sizes.map((size, index) => (
                <Checkbox
                    className={'shop-items__size'}
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
import React from "react"
import Checkbox from "../../common/checkbox/checkbox.component"
import useSizesFilter from "./sizes-filter.hook"

export type SizesFilterProps = {
    content: string[],
    filter: string,
    filters: string[]
}

const SizesFilter: React.FC<SizesFilterProps> = (props) => {

    const {content: sizes} = props
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
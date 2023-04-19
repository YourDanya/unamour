import React from 'react'
import useSizesFilter from 'app/[locale]/shop-items/[category]/_components/_layout/size-filter/size-filter.hook'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'

export type SizesFilterProps = {
    content: string[],
    filter: string,
    filters: string[],
}

const SizesFilter: React.FC<SizesFilterProps> = (props) => {

    const {content: sizes} = props
    const {sizeValues, onChange} = useSizesFilter(props)

    return (
        <>
            {sizes.map((size, index) => (
                <Checkbox
                    className={`shop-items__size ${index=== sizes.length-1? 'shop-items__size--last' : ''}`}
                    key={size}
                    name={size}
                    label={sizes[index]}
                    value={sizeValues[size]}
                    onChange={onChange}
                />
            ))}
        </>
    )
}

export default SizesFilter
import React from 'react'
import {ColorContent} from 'components/shop-items/shop-items.types'
import useColorsFilter from 'components/shop-items/color-filter/color-filter.hook'
import Checkbox from 'components/common/checkbox/checkbox.component'

export type ColorsFilterProps = {
    content: ColorContent,
    transl: string [],
    filter: string,
    filters: string[],
}

const ColorsFilter: React.FC<ColorsFilterProps> = (props) => {

    const {content: colors, transl} = props
    const {colorValues, handleChange} = useColorsFilter(props)

    return (
        <>
            {colors.map(({param, code}, index) => (
                <Checkbox
                    className={'shop-items__color'}
                    styles={{backgroundColor: code}}
                    key={code}
                    name={param}
                    label={transl[index]}
                    value={colorValues[param]}
                    handleChange={handleChange}
                />
            ))}
        </>
    )
}

export default ColorsFilter
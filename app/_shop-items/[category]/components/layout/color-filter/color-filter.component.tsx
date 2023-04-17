import React from 'react'
import useColorsFilter from 'components/shop-items/color-filter/color-filter.hook'
import Checkbox from 'components/common/checkbox/checkbox.component'
import {ColorsFilterProps} from 'components/shop-items/color-filter/color-filter.types'

const ColorsFilter: React.FC<ColorsFilterProps> = (props) => {
    const {content: colors, transl} = props
    const {colorValues, onChange} = useColorsFilter(props)

    return (
        <>
            {colors.map(({slug, code}, index) => (
                <Checkbox
                    className={'shop-items__color'}
                    styles={{backgroundColor: code}}
                    key={code}
                    name={slug}
                    label={transl[index]}
                    value={colorValues[slug]}
                    onChange={onChange}
                />
            ))}
        </>
    )
}

export default ColorsFilter
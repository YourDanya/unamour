import React from 'react'
import useColorsFilter from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.hook'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import {ColorsFilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.types'

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
import {FC} from 'react'
import useColorFilter from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.hook'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import {ColorsFilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.types'
import {colorValues} from 'app/[locale]/_content/color/color.content'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const ColorFilter: FC<FilterProps> = (props) => {
    const {values, onChange, colorTransl} = useColorFilter(props)

    return (
        <div className={'shop-items-color-filter color'}>
            {colorValues.map(({slug, code}, index) => (
                <Checkbox
                    className={'color__item'}
                    styles={{backgroundColor: code}}
                    key={code}
                    name={slug}
                    label={colorTransl[index]}
                    value={values[slug]}
                    onChange={onChange}
                />
            ))}
        </div>
    )
}

export default ColorFilter
import {FC} from 'react'
import useSizesFilter from 'app/[locale]/shop-items/[category]/_components/_layout/size-filter/size-filter.hook'
import Checkbox from 'app/_common/components/checkbox/checkbox.component'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {sizes} from 'app/_common/content/size/size.content'

const SizesFilter: FC<FilterProps> = (props) => {
    const {onChange, values} = useSizesFilter(props)

    return (
        <div className={'shop-items-size-filter size'}>
            {sizes.map((size, index) => (
                <Checkbox
                    className={`size__item ${index === sizes.length - 1 ? 'size__item--last' : ''}`}
                    key={size}
                    name={size}
                    label={sizes[index]}
                    value={values[size]}
                    onChange={onChange}
                />
            ))}
        </div>
    )
}

export default SizesFilter
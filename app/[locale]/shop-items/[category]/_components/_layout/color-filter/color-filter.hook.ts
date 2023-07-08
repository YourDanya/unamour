import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {ColorsFilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.types'
import {useMemo} from 'react'
import {useState} from 'react'
import {colorValues} from 'app/[locale]/_content/color/color.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/[locale]/_content/color/color.content'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const useColorFilter = (props: FilterProps) => {
    const {createFilter} = props
    const initValues = useMemo(getInitValues, [])
    const [values, setValues] = useState(initValues)
    const ref = useRef(values)
    const colorTransl = useLocale(colorDictionary)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        ref.current[name] = !ref.current[name]
        const newValues = {...ref.current}
        setValues(newValues)

        const value = createFilterValue({values})
        createFilter({value, name: 'color'})
    }

    return {onChange, values, colorTransl}
}

export default useColorFilter

const getInitValues = () => {
    return colorValues.reduce((values, {slug}) => {
        values[slug] = false
        return values
    }, {} as Record<string, boolean>)
}

const createFilterValue = ({values}: { values: Record<string, boolean> }) => {
    const entries = getEntries(values)
    return entries.reduce((filterValue, [name, value]) => {
        if (value) {
            filterValue += `${name},`
        }
        return filterValue
    }, '').slice(0, -1)
}

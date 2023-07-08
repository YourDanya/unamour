import {ChangeEvent} from 'react'
import {useState} from 'react'
import {useMemo} from 'react'
import {useRef} from 'react'
import {priceParams} from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.content'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const usePriceFilter = (props: FilterProps) => {
    const {createFilter} = props
    const transl = useLocale(dictionary)

    const initValues = useMemo(getInitValues, [])
    const [values, setValues] = useState(initValues)
    const ref = useRef(values)

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        ref.current[name] = value
        const newValues = {...ref.current}
        setValues(newValues)

        const {min, max} = newValues
        const filterValue = `min=${min},max=${max}`
        createFilter({value: filterValue, name: 'price'})
    }

    return {values, setValues, onChange, transl}
}

export default usePriceFilter

const getInitValues = () => {
    const {min, max} = priceParams
    return {min, max}
}

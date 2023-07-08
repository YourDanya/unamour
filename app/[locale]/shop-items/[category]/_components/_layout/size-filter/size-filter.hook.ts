import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import {sizes} from 'app/[locale]/_content/size/size.content'
import {useMemo} from 'react'
import {boolean} from 'zod'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const useSizesFilter = (props: FilterProps) => {
    const initValues = useMemo(getInitValues, [])
    const [values, setValues] = useState(initValues)
    const ref = useRef(values)
    const {createFilter} = props

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        ref.current[name] = !ref.current[name]
        const newValues = {...ref.current}
        setValues(newValues)

        const value = createFilterValue({values})
        createFilter({value, name: 'size'})
    }

    return {onChange, values}
}

export default useSizesFilter

const getInitValues = () => {
    return sizes.reduce((values, size) => {
        values[size] = false
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
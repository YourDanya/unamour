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
import {useEffect} from 'react'

const usePriceFilter = (props: FilterProps) => {
    const {createFilter} = props

    const state = useGetState(props)
    const {values, valuesRef, setValues} = state

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        const newValues = {...valuesRef.current}
        setValues(newValues)
        const {min, max} = newValues
        const filterValue = `min=${min},max=${max}`
        createFilter({value: filterValue, name: 'price'})
    }

    const onRangeChange = ({min, max}: {min: string, max: string}) => {
        valuesRef.current = {min, max}
        setValues({min, max})
        const filterValue = `min=${min},max=${max}`
        // createFilter({value: filterValue, name: 'price'})
    }

    return {...state, onChange, onRangeChange}
}

export default usePriceFilter

const useGetState = (props: FilterProps) => {
    const transl = useLocale(dictionary)

    const initValues = useMemo(() => {
        const {min, max} = priceParams
        return {min, max}
    }, [])

    const [values, setValues] = useState(getParamValues({props, initValues}))
    const valuesRef = useRef(values)

    return {transl, initValues, values, setValues, valuesRef, props}
}

const useGetParamValues = (state: ReturnType<typeof useGetState>) => {
    const {props: {params}, valuesRef, setValues} = state

    useEffect(() => {
        const newValues = getParamValues(state)

        const firstEqual = newValues.min !== valuesRef.current.min
        const secondEqual = newValues.max !== valuesRef.current.max

        if (!firstEqual || !secondEqual) {
            valuesRef.current = newValues
            setValues({...valuesRef.current})
        }
    }, [params.get('price')])
}

const getParamValues = (state: {props: FilterProps, initValues: {min: string, max: string}}) => {
    const {props: {params}, initValues} = state
    let [minParam, maxParam] = params.get('price')?.split(',') ?? []

    let min = minParam?.split('=')[1]
    let max = maxParam?.split('=')[1]

    if (!min) {
        min = initValues.min
    }
    if (!max) {
        max = initValues.max
    }

    return {min, max}
}
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
import {MutableRefObject} from 'react'

const usePriceFilter = (props: FilterProps) => {
    const {createParams} = props
    const state = useGetState(props)
    const {values, valuesRef, setValues, paramValue} = state

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        valuesRef.current[name] = value
        setValues({...valuesRef.current})
        priceFilter(state)
    }

    const onRangeChange = ({min, max}: { min: number, max: number }) => {
        valuesRef.current = {min, max}
        setValues({min, max})
    }

    const [test, setTest] = useState(0)

    const onMouseUp = () => {
        priceFilter(state)
    }

    const onMouseDown = () => {
        createParams({suspend: true})
    }

    useGetParamValues(state)

    return {...state, onChange, onRangeChange, onMouseUp, onMouseDown}
}

export default usePriceFilter

const useGetState = (props: FilterProps) => {
    const {params} = props
    const transl = useLocale(dictionary)

    const initValues = useMemo(() => {
        const {min, max} = priceParams
        return {min, max}
    }, [])

    const paramValue = params.get('price')
    const paramValueRef = useRef(paramValue)

    const [values, setValues] = useState(() => getParamValues({props, initValues, paramValueRef}))
    const valuesRef = useRef(values)

    return {transl, initValues, values, setValues, valuesRef, props, paramValue, paramValueRef}
}

const useGetParamValues = (state: ReturnType<typeof useGetState>) => {
    const {valuesRef, setValues, paramValue, paramValueRef} = state

    useEffect(() => {
        paramValueRef.current = paramValue

        const newValues = getParamValues(state)

        const firstEqual = newValues.min !== valuesRef.current.min
        const secondEqual = newValues.max !== valuesRef.current.max

        if (!firstEqual || !secondEqual) {
            valuesRef.current = newValues
            setValues({...valuesRef.current})
        }

    }, [paramValue])
}

const getParamValues = (state: {
    props: FilterProps,
    initValues: { min: number, max: number },
    paramValueRef: MutableRefObject<string | null>
}) => {

    const {props: {params}, initValues, paramValueRef} = state
    let [minParam, maxParam] = paramValueRef.current?.split(',') ?? []

    let min = +minParam?.split('=')[1]
    let max = +maxParam?.split('=')[1]

    if (!min) {
        min = initValues.min
    }
    if (!max) {
        max = initValues.max
    }

    return {min, max}
}

const priceFilter = (state: ReturnType<typeof useGetState>) => {
    const {props: {createParams}, valuesRef} = state
    const {min, max} = valuesRef.current

    const paramValues = getParamValues(state)

    if (min !== paramValues.min || max !== paramValues.max) {
        const filterValue = `min=${min},max=${max}`
        createParams({value: filterValue, name: 'price'})
    }
}
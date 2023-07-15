import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {ChangeEvent} from 'react'
import {useMemo} from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/[locale]/_content/color/color.content'
import {colorValues} from 'app/[locale]/_content/color/color.content'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useEffect} from 'react'
import {MutableRefObject} from 'react'
import {SetStateAction} from 'react'
import {Dispatch} from 'react'
import {Locale} from 'app/[locale]/_common/types/types'

export type CheckFilterState = {
    name: string,
    props: FilterProps,
    initArrValues: string[]
}

const useCheckFilter = (state: CheckFilterState) => {
    const {props: {createFilter}, name: filterName,} = state

    const checkState = useGetState(state)
    const {values, valuesRef, setValues} = checkState

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget
        valuesRef.current[name] = !valuesRef.current[name]
        const values = {...valuesRef.current}
        setValues(values)

        const filterValue = createFilterValue({values})
        createFilter({value: filterValue, name: filterName})
    }

    useGetParamValues(checkState)

    return {...checkState, onChange}
}

export default useCheckFilter

const useGetState = (state: CheckFilterState) => {
    const {props, initArrValues, name} = state

    const initValues = useMemo(() => {
        return initArrValues.reduce((values, elem) => {
            values[elem] = false
            return values
        }, {} as Record<string, boolean>)
    }, [])

    const valuesRef = useRef({...initValues})
    const [values, setValues] = useState(getParamValues({props, initValues, name}))

    return {...state, initValues, values, setValues, valuesRef}
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

const useGetParamValues = (state: ReturnType<typeof useGetState>) => {
    const {props: {params}, valuesRef, setValues, name} = state

    useEffect(() => {
        const newValues = getParamValues(state)

        let shouldUpdate = false

        Object.entries(newValues).forEach(([name, value]) => {
            if (valuesRef.current[name] !== value) {
                valuesRef.current[name] = value
                shouldUpdate = true
            }
        })

        if (shouldUpdate) {
            valuesRef.current = newValues
            setValues({...valuesRef.current})
        }

    }, [params.get(name)])

}

const getParamValues = (state: { props: FilterProps, initValues: Record<string, boolean>, name: string }) => {
    const {props: {params}, initValues, name} = state

    const paramValue = params.get(name) ?? ''

    const paramMap = paramValue.split(',').reduce((paramMap, value) => {
        paramMap[value] = true
        return paramMap
    }, {} as Record<string, boolean>)

    return getEntries(initValues).reduce((newValues, [name, value]) => {
        newValues[name] = paramMap[name] ?? false
        return newValues
    }, {} as Record<string, boolean>)
}
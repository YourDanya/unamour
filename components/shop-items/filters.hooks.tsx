import {
    ColorContent,
    FilterContent,
    FilterProps,
    GeneralContent,
    ResetFilter,
    SetState,
    State,
    State2, UseFilter
} from "./shop-items.types"
import {useDebounceEffect, useOmitFirstEffect} from "../../hooks/component.hooks"
import {useRouter} from "next/router"
import {MutableRefObject, useEffect, useMemo, useRef, useState} from "react"
import {debounce} from "../../utils/main.utils";

export const useResetFilter: ResetFilter = (filter, setState, toUpdate, state) => {

    const router = useRouter()
    const path = router.asPath
    const pathArr = path.split('?')
    const mainPath = pathArr[0]

    useOmitFirstEffect(() => {

        if (mainPath === path) {
            toUpdate.current = false
            if (filter === 'sorting') {
                setState('')
            } else {
                const newState = state as State2
                Object.keys(newState).forEach(key => newState[key] = false)
                setState({...newState})
            }
        }
    }, [path])
}

export const useHandleFilter = (toUpdate: MutableRefObject<boolean>, filters: string[], filter: string, state: State) => {

    const router = useRouter()
    const query = router.query
    const path = router.asPath
    const pathArr = path.split('?')
    const mainPath = pathArr[0]

    useDebounceEffect(() => {
        if (!toUpdate.current) {
            toUpdate.current = true
            return
        }

        const url = filters
            .map(elem => {
                let param = ''
                if (elem === filter) {
                    if (filter === 'sorting') {
                        console.log(filter)
                        if (state === '') param = ''
                        else param = `${filter}=${state}`
                    } else {
                        const objState = state as State2
                        const value = Object.keys(objState).filter(prop => objState[prop]).join(';')
                        param = value ? `${filter}=${value}` : ''
                    }
                } else if (elem in query) param = `${elem}=${query[elem]}`
                return param
            })
            .filter(elem => elem !== '')
            .join('&')
            .replace(/^/, (...args) => args[2] === '' ? `${mainPath}` : `${mainPath}?`)

        console.log(url)
        router.push(url)
    }, [state])
}

export const useGetFilterState = (filter: string, filterContent: FilterContent) => {

    const router = useRouter()
    const query = router.query
    const pathParam = query[filter] as string ?? ''

    return useMemo(() => {

        if (filter === 'sorting') {
            return pathParam
        } else {
            const pathParamValues = pathParam.split(';').reduce((accum, paramValue) => {
                accum[paramValue] = true
                return accum
            }, {} as State2) ?? {}
            const state = {} as State2
            if (typeof filterContent[0] === 'string') {
                const generalContent = filterContent as GeneralContent
                generalContent.forEach(elem => state[elem] = pathParamValues[elem] ?? false)
            } else {
                const colorContent = filterContent as ColorContent
                colorContent.forEach(elem => state[elem.param] = pathParamValues[elem.param] ?? false)
            }
            return state
        }
    }, [])
}

export const useFilter: UseFilter = (props) => {

    const {filters, filter, content} = props

    const toUpdate = useRef(false)

    const retrievedState = useGetFilterState(filter, content)
    const [state, setState] = useState(retrievedState)

    useHandleFilter(toUpdate, filters, filter, state)
    useResetFilter(filter, setState, toUpdate, state)

    return [state, setState]
}
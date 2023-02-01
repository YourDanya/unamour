import {useSelector} from 'react-redux'
import {UseShallSelector} from 'hooks/enhanced/enhanced.types'
import {shallowEqual} from 'react-redux'
import {useMemo} from 'react'
import {UseParamSelector} from 'hooks/enhanced/enhanced.types'
import {useRef} from 'react'
import {UseRefSelector} from 'hooks/enhanced/enhanced.types'

export const useDebounce = <T extends any [], > (callback: (...args: T) => void, delay = 1000) => {
    let timeout: NodeJS.Timeout

    return (...args: T) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), delay)
    }
}

export const useShallSelector: UseShallSelector = (selector) => {
    return useSelector(selector)
}

export const useParamSelector: UseParamSelector = (callback, ...args) => {
    const argRef = useRef<any[] | null>(null)

    let toUpdate
    let toUpdateRef = useRef<Date | null>(null)
    if (argRef.current !== null) {
        let update = args.reduce((accum, elem, idx ) => {
            return elem !== argRef.current?.[idx] || accum
        }, false)
        if (update) {
            toUpdateRef.current = new Date()
        }
        toUpdate = toUpdateRef.current
    }

    const selector = useMemo(() => {
        argRef.current = args
        return callback(...args)
    }, [toUpdate])

    return useSelector(selector, shallowEqual)
}

export const useRefSelector: UseRefSelector = (callback, ...args) => {
    const value = useParamSelector(callback, ...args)
    const ref = useRef(value)
    ref.current = value
    return ref
}
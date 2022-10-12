import {useSelector} from 'react-redux'
import {UseShallSelector} from 'hooks/enhanced/enhanced.types'
import {shallowEqual} from 'react-redux'
import {useMemo} from 'react'

export const useDebounce = <T extends any [], > (callback: (...args: T) => void, delay = 1000) => {
    let timeout: NodeJS.Timeout

    return (...args: T) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), delay)
    }
}

export const useShallSelector: UseShallSelector = (selector) => {
    return useSelector(selector, shallowEqual)
}

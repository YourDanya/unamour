import {useRef} from 'react'
import {useMemo} from 'react'
import {UseRefSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.types'

export const useDebounce = <T extends any [], > (callback: (...args: T) => void, delay = 1000) => {
    let timeout = useRef<number>()

    return (...args: T) => {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => callback(...args), delay) as unknown as number
    }
}


import {useRef} from 'react'

const useDebounce = <T extends any [], > (callback: (...args: T) => void, delay = 1000) => {
    let timeout = useRef<number>()

    return (...args: T) => {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => callback(...args), delay) as unknown as number
    }
}

export default useDebounce
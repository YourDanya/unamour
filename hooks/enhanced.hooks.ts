export const useDebounce = <T extends any [], > (callback: (...args: T) => void, delay = 1000) => {
    let timeout: NodeJS.Timeout

    return (...args: T) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), delay)
    }
}

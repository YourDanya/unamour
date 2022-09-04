export const sleep= (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const removeFromArr = (arr: any[], value: any) => {
    const index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}

export const debounce = <T extends any [], > (callback: (...args: T) => void, delay = 1000) => {
    let timeout: NodeJS.Timeout

    return (...args: T) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), delay)
    }
}

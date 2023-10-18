import {MutableRefObject} from 'react'

export const updateErrorCount = (params: {
    errorCountRef: MutableRefObject<number>, callback: () => void, setErrorCount: (errorCount: number) => void,
    errorCount: number
}) => {
    const {errorCountRef, callback, setErrorCount, errorCount} = params

    const beforeCount = errorCountRef.current

    callback()

    const aftetCount = errorCountRef.current

    if (aftetCount !== beforeCount) {
        setErrorCount(errorCount + beforeCount - aftetCount)
    }
}
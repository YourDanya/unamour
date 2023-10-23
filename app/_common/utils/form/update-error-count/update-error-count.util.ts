import {MutableRefObject} from 'react'

export const updateErrorCount = (params: {
    errorCountRef: MutableRefObject<number>, callback: () => void, setErrorCount: (errorCount: number) => void,
    formErrCountRef: MutableRefObject<number>
}) => {
    const {errorCountRef, callback, setErrorCount, formErrCountRef} = params
    const beforeCount = errorCountRef.current

    callback()

    const aftetCount = errorCountRef.current

    if (aftetCount !== beforeCount) {
        formErrCountRef.current += aftetCount - beforeCount
        setErrorCount(formErrCountRef.current)
    }
}
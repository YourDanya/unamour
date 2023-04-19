import {useRef} from 'react'
import {useEffect} from 'react'

export const useCountTime = () => {
    const timeRef = useRef<number>(0)
    timeRef.current = performance.now()

    useEffect(() => {
        console.log('took', performance.now() - timeRef.current)
    })
}
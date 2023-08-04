import useThrottle from 'app/_common/hooks/helpers/throttle/throttle.hook'
import {useLayoutEffect} from 'react'

const useResize = (callback: () => void) => {
    const onResize = useThrottle(callback, 500)

    useLayoutEffect(() => {
        onResize()
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
}

export default useResize
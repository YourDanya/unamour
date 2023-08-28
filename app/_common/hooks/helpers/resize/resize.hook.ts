import useThrottle from 'app/_common/hooks/helpers/throttle/throttle.hook'
import {useLayoutEffect} from 'react'
import {DependencyList} from 'react'

const useResize = (callback: () => void, deps?: DependencyList, params?: {skip?: boolean, delay?: number}) => {
    const onResize = useThrottle(callback, params?.delay ?? 500)

    useLayoutEffect(() => {
        if (!params?.skip) {
            onResize()
        }
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [deps])
}

export default useResize
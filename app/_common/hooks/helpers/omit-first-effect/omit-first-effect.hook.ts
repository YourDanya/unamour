import {EffectCallback} from 'react'
import {DependencyList} from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'

const useOmitFirstEffect = <T extends any[], >(effect: EffectCallback, deps?: DependencyList) => {
    const first = useRef(true)

    useEffect(() => {
        if (first.current) {
            first.current = false
            return
        }
        effect()
    }, deps)
}

export default useOmitFirstEffect
import {useCallback, useEffect, useRef, useState} from 'react'
import {Property} from 'csstype'
import Position = Property.Position
import {ScrollFixedProps} from 'app/_common/components/scroll-fixed/scroll-fixes.types'
import {StateRef} from 'app/_common/components/scroll-fixed/scroll-fixes.types'
import {useRoute} from 'app/_common/components/scroll-fixed/route.hook'
import {State} from 'app/_common/components/scroll-fixed/scroll-fixes.types'
import {scroll} from 'app/_common/components/scroll-fixed/scroll'
import {onResize} from 'app/_common/components/scroll-fixed/resize'
import {useLayoutEffect} from 'react'

const useScrollHook = (props: ScrollFixedProps) => {
    const {topOffset, bottomOffset, resize} = props

    const state = useGetState(props)
    const {stateRef, elemRef} = state

    const onScroll = useCallback(() => {
        scroll(state)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    useLayoutEffect(() => {
        onResize(state)
    }, [resize])

    useRoute(state)

    return {...state}
}

export default useScrollHook

export const useGetState = (props: ScrollFixedProps) => {
    const {topOffset, bottomOffset, children} = props

    const [state, setState] = useState<State>({position: 'static', top: 0, bottom: 'unset', marginTop: 0})
    const stateRef = useRef<StateRef>({
        position: 'static', toParentTop: 0, scrollY: 0, height: 0, toBottom: false, first: true, self: false
    })

    const elemRef = useRef<HTMLDivElement | null>(null)
    const [transition, setTransition] = useState('unset')

    return {state, setState, stateRef, elemRef, transition, setTransition, props}
}

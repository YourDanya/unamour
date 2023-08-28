import {useArrows} from 'app/_common/components/slider/utils/arrows'
import {useEffect} from 'react'
import {Children} from 'react'
import {calc} from 'app/_common/components/slider/utils/calc'
import {useState} from 'react'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import useOmitFirstEffect from 'app/_common/hooks/helpers/omit-first-effect/omit-first-effect.hook'
import {useLayoutEffect} from 'react'
import {useGetState} from 'app/_common/components/slider/slider.hook'
import {useCalcLimits} from 'app/_common/components/slider/utils/limits'
import {useResize} from 'app/_common/components/slider/utils/resize'

export const useHandleEffects = (state: ReturnType<typeof useArrows>) => {
    const {
        current, setMounted, shouldCheckLimits, setShouldCheckLimits, elements, setElements, setCurrent, elemsRef,
        props, perSlide, setTransition, mounted, moveRef,
    } = state

    const {children} = props

    useEffect(() => {
        setMounted(true)
        moveRef.current.mounted = true
    }, [])

    useEffect(() => {
        const newElements = Children.toArray(children)
        if (newElements.length === current + perSlide - 1) {
            setCurrent(current - 1)
        }
        setElements(newElements)
        calc(state)
    }, [children])

    useOmitFirstEffect(() => {
        if (props.current !== undefined && props.current !== current) {
            setCurrent(props.current)
        }
    }, [props.current])

    useCalcLimits(state)

    useResize(state)
}



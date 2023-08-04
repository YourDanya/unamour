import {Children} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {SliderProps} from 'app/_common/components/slider/slider.types'
import {useCallback} from 'react'
import React from 'react'
import {MoveRef} from 'app/_common/components/slider/slider.types'
import {useLayoutEffect} from 'react'
import down from 'app/_common/components/slider-v2/down'
import {DomUtil} from 'leaflet'
import up from 'app/_common/components/slider-v2/up'
import move from 'app/_common/components/slider-v2/move'
import {useArrows} from 'app/_common/components/slider-v2/arrows'
import {CSSProperties} from 'react'
import {useCalcDimensions} from 'app/_common/components/slider-v2/calc'

export const useSlider = (props: SliderProps) => {
    const {children} = props

    const mainState = useGetState(props)
    const calcState = useCalcDimensions(mainState)
    const arrowsState = useArrows(calcState)

    const onUp = useCallback((event: MouseEvent | TouchEvent) => {
        up({...mainState, event})

        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
        document.removeEventListener('touchmove', onMove)
        document.removeEventListener('touchend', onUp)
    }, [])

    const onMove = useCallback((event: MouseEvent | TouchEvent) => {
        move({...mainState, event})
    }, [])

    const onDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        down({...mainState, event})

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', onUp)
        document.addEventListener('touchmove', onMove)
        document.addEventListener('touchend', onUp)
    }, [])

    const {current, setMounted} = mainState

    useEffect(() => {
        requestAnimationFrame(() => {
            calcLimits(mainState)
        })
    }, [current])

    useEffect(() => {
        setMounted(true)
    }, [])

    return {
        ...arrowsState, onDown, onUp, onMove
    }
}

export default useSlider

export const useGetState = (props: SliderProps) => {
    const perSlide = props.perSlide ?? 1
    const {children} = props

    const [current, setCurrent] = useState(0)

    const [elements, setElements] = useState(Children.toArray(children))
    const length = elements.length

    const slideRef = useRef<HTMLDivElement>(null)
    const [transition, setTransition] = useState('0.4s all')

    const moveRef = useRef<MoveRef>(
        {startX: 0, moving: false, current: current, fast: false, clientX: 0, blocking: false}
    )
    const [moveState, setMoveState] = useState({translate: 0, moving: false})

    const elemsRef = useRef<(HTMLDivElement | null)[]>([])

    const [mounted, setMounted] = useState(false)

    return {
        transition, perSlide, elements, moveRef, current, setCurrent, setTransition,
        slideRef, length, props, elemsRef, mounted, setMounted
    }
}

const calcLimits = (state: ReturnType<typeof useGetState>) => {
    const {current, length, setCurrent, setTransition, moveRef} = state

    if (current >= length) {
        setCurrent(length + length - current - 1)
        setTransition('0.4s all')
    }

    if (current <= -1) {
        setCurrent(-(current + 1))
        setTransition('0.4s all')
    }

    moveRef.current.current = current
}

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

    useHandleEffects(arrowsState)

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

    const moveRef = useRef({
        startX: 0, moving: false, current, fast: false, clientX: 0, moveCurrent: current,
        limit: ''
    })
    const [move, setMove] = useState(0)

    const elemsRef = useRef<(HTMLDivElement | null)[]>([])
    const leftElemsRef = useRef<(HTMLDivElement | null)[]>([])
    const rightElemsRef = useRef<(HTMLDivElement | null)[]>([])

    const [mounted, setMounted] = useState(false)
    const [shouldCheckLimits, setShouldCheckLimits] = useState(false)
    const [translate, setTranslate] = useState(0)
    const [contentStyle, setContentStyle] = useState<CSSProperties>({})

    return {
        transition, perSlide, elements, setElements, moveRef, current, setCurrent, setTransition, move, setMove,
        slideRef, length, props, elemsRef, mounted, setMounted, leftElemsRef, rightElemsRef, shouldCheckLimits,
        setShouldCheckLimits, translate, setTranslate, contentStyle, setContentStyle
    }
}

const useHandleEffects = (state: ReturnType<typeof useArrows>) => {
    const {
        current, setMounted, shouldCheckLimits, setShouldCheckLimits, elements, setElements, setCurrent, elemsRef,
        props: {children}
    } = state

    useEffect(() => {
        requestAnimationFrame(() => {
            calcLimits(state)
        })
    }, [current])

    useEffect(() => {
        if (!shouldCheckLimits) {
            return
        }
        requestAnimationFrame(() => {
            calcLimits(state)
            setShouldCheckLimits(false)
        })
    }, [shouldCheckLimits])

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const newElements = Children.toArray(children)
        if (newElements.length === current) {
            setCurrent(current - 1)
        }
        setElements(newElements)
    }, [children])

    useEffect(() => {
        if (elemsRef.current[elemsRef.current.length - 1] === null) {
            elemsRef.current.pop()
        }
    })
}

const calcLimits = (state: ReturnType<typeof useGetState>) => {
    const {current, length, setCurrent, setTransition, moveRef, setMove} = state

    if (current === length) {
        setCurrent(length - 1)
    }
    if (current === -1) {
        setCurrent(0)
    }

    if (moveRef.current.limit) {
        moveRef.current.limit = ''
        setMove(0)
        setTransition('0.4s all')
    }
    
    moveRef.current.current = current
}

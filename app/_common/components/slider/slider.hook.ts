import {Children} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {SliderProps} from 'app/_common/components/slider/slider.types'
import {useCallback} from 'react'
import React from 'react'
import {useLayoutEffect} from 'react'
import down from 'app/_common/components/slider/utils/down'
import up from 'app/_common/components/slider/utils/up'
import move from 'app/_common/components/slider/utils/move'
import {useArrows} from 'app/_common/components/slider/utils/arrows'
import {CSSProperties} from 'react'
import {useCalcDimensions} from 'app/_common/components/slider/utils/calc'
import {calc} from 'app/_common/components/slider/utils/calc'
import {useHandleEffects} from 'app/_common/components/slider/utils/effects'

export const useSlider = (props: SliderProps) => {
    const {children} = props

    const mainState = useGetState(props)
    const calcState = useCalcDimensions(mainState)
    const arrowsState = useArrows(calcState)
    const {moveRef} = arrowsState

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

    const onCapture = (event: React.MouseEvent | React.TouchEvent) => {
        if (moveRef.current.wasMoved) {
            event.preventDefault()
        }
    }

    useHandleEffects(arrowsState)

    return {
        ...arrowsState, onDown, onUp, onMove, onCapture
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
    const [transition, setTransition] = useState('unset')
    const [resizing, setResizing] = useState(false)

    const moveRef = useRef({
        startX: 0, moving: false, current, fast: false, clientX: 0, moveCurrent: current, mounted: false,
        limit: '', fistCalc: false, wasMoved: false, resizing: false
    })
    const propsRef = useRef(props)

    const [move, setMove] = useState(0)

    const elemsRef = useRef<(HTMLDivElement | null)[]>([])
    const leftElemsRef = useRef<(HTMLDivElement | null)[]>([])
    const rightElemsRef = useRef<(HTMLDivElement | null)[]>([])

    const [mounted, setMounted] = useState(false)
    const [shouldCheckLimits, setShouldCheckLimits] = useState(false)
    const [translate, setTranslate] = useState(0)
    const [contentStyle, setContentStyle] = useState<CSSProperties>({})

    const windowWidthRef = useRef(0)

    return {
        transition, perSlide, elements, setElements, moveRef, current, setCurrent, setTransition, move, setMove,
        slideRef, length, props, elemsRef, mounted, setMounted, leftElemsRef, rightElemsRef, shouldCheckLimits,
        setShouldCheckLimits, translate, setTranslate, contentStyle, setContentStyle, resizing, setResizing,
        propsRef, windowWidthRef
    }
}

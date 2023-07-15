import React, {useCallback, useRef, useState} from 'react'
import {SliderStateRef} from 'app/[locale]/_common/components/range-slider/range-slider.types'
import {RangeSliderProps} from 'app/[locale]/_common/components/range-slider/range-slider.types'
import {SliderState} from 'app/[locale]/_common/components/range-slider/range-slider.types'
import {thumbDowmn} from 'app/[locale]/_common/components/range-slider/thumb-down'
import {trackDown} from 'app/[locale]/_common/components/range-slider/track-down'
import {thumbMove} from 'app/[locale]/_common/components/range-slider/mouse-move'

const useRangeSlider = (props: RangeSliderProps) => {
    const {onChange, defMin, defMax} = props

    const initState = useGetState(props)
    const {state, setState, elemsRef, stateRef} = initState

    const handleMouseUp = () => {
        stateRef.current.active = 'none'

        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleMouseMove)
        document.removeEventListener('touchend',  handleMouseUp)
    }

    const handleMouseMove = useCallback( (event: MouseEvent | TouchEvent) => {
        thumbMove({...initState, event})
    }, [])

    const handleThumbDown = useCallback((event: React.MouseEvent|React.TouchEvent) => {
        thumbDowmn({...initState, event})

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('touchmove', handleMouseMove)
        document.addEventListener('touchend',  handleMouseUp)
    }, [])

    const handleTrackDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        trackDown({...initState, event})

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('touchmove', handleMouseMove)
        document.addEventListener('touchend',  handleMouseUp)
    }, [])

    const calcState = doCalc(initState)

    return {...calcState, elemsRef, handleTrackDown, handleThumbDown}
}

export default useRangeSlider

export const useGetState = (props: RangeSliderProps) => {
    const stateRef = useRef<SliderStateRef>({
        min: {x: 0, translate: 0, limit: false, diff: 0},
        max: {x: 0, translate: 184, limit: false, diff: 0},
        active: 'none',
        limit: {left: false, right: false}
    })

    const [state, setState] = useState<SliderState>({
        left: {translate: 0, zIndex: 10},
        right: {translate: 184, zIndex: 100},
        // gradient: 'to right, black 0 100%'
    })

    const elemsRef = useRef<{ min: HTMLButtonElement | null, max: HTMLButtonElement | null, track: HTMLDivElement | null }>({
        min: null,
        max: null,
        track: null
    })

    return {stateRef, state, setState, elemsRef, props}
}

export const doCalc = (state: ReturnType<typeof useGetState>) => {
    const {props} = state
    const {values, defMax, defMin} = props

    const scale = defMax - defMin

    const leftPercent = `${(+values.min - defMin) / scale * 100}%`
    const rightPercent = `${(+values.max - defMin) / scale * 100}%`

    const gradient = `linear-gradient(to right, #e2e2e2 ${leftPercent}, black ${leftPercent} ${rightPercent}, #e2e2e2 ${rightPercent})`

    const leftWidth = leftPercent
    const rightWidth = `calc(${rightPercent} - 16px)`

    return {...state, gradient, leftWidth, rightWidth}
}

export const calcValue = (params: {defMin: number, defMax: number, targetX: number, trackWidth: number, startX: number}) => {
    const {defMin, defMax, targetX, trackWidth, startX} = params

    return defMin + (targetX - startX) / trackWidth * (defMax - defMin)
}
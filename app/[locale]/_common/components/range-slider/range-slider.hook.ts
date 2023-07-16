import React, {useCallback, useRef, useState} from 'react'
import {SliderStateRef} from 'app/[locale]/_common/components/range-slider/range-slider.types'
import {RangeSliderProps} from 'app/[locale]/_common/components/range-slider/range-slider.types'
import {thumbDowmn} from 'app/[locale]/_common/components/range-slider/thumb-down'
import {trackDown} from 'app/[locale]/_common/components/range-slider/track-down'
import {thumbMove} from 'app/[locale]/_common/components/range-slider/mouse-move'

const useRangeSlider = (props: RangeSliderProps) => {
    const {onChange, defMin, defMax, onMouseUp: notifyMouseUp} = props

    const initState = useGetState(props)
    const {elemsRef, stateRef} = initState

    const onMouseUp = () => {
        if (notifyMouseUp) {
            notifyMouseUp()
        }

        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('touchmove', onMouseMove)
        document.removeEventListener('touchend', onMouseUp)
    }

    const onMouseMove = useCallback((event: MouseEvent | TouchEvent) => {
        thumbMove({...initState, event})
    }, [])

    const onThumbDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        thumbDowmn({...initState, event})

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
        document.addEventListener('touchmove', onMouseMove)
        document.addEventListener('touchend', onMouseUp)
    }, [])

    const onTrackDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        trackDown({...initState, event})

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
        document.addEventListener('touchmove', onMouseMove)
        document.addEventListener('touchend', onMouseUp)
    }, [])

    const calcState = doCalc(initState)

    return {...calcState, elemsRef, onTrackDown, onThumbDown}
}

export default useRangeSlider

export const useGetState = (props: RangeSliderProps) => {
    const stateRef = useRef<SliderStateRef>({
        min: {diff: 0},
        max: {diff: 0},
        active: 'none',
        limit: {left: false, right: false}
    })

    const elemsRef = useRef<{ min: HTMLButtonElement | null, max: HTMLButtonElement | null, track: HTMLDivElement | null }>({
        min: null,
        max: null,
        track: null
    })

    return {stateRef, elemsRef, props}
}

export const doCalc = (state: ReturnType<typeof useGetState>) => {
    const {props} = state
    const {values, defMax, defMin} = props

    const scale = defMax - defMin

    const leftPart = (values.min - defMin) / scale
    const rightPart = (values.max - defMin) / scale

    const leftPercent = `${leftPart * 100}%`
    const rightPercent = `${rightPart * 100}%`

    const gradient = `linear-gradient(to right, #e2e2e2 ${leftPercent}, black ${leftPercent} ${rightPercent}, #e2e2e2 ${rightPercent})`

    const leftWidth = leftPart * 184
    const rightWidth = rightPart * 184

    return {...state, gradient, leftWidth, rightWidth}
}

export const calcValue = (params: {
    defMin: number, defMax: number, targetX: number, trackWidth: number, startX: number, thumbWidth: number
}) => {
    const {defMin, defMax, targetX, trackWidth, startX, thumbWidth} = params

    return Math.round(defMin + (targetX - startX) / (trackWidth - thumbWidth) * (defMax - defMin))
}
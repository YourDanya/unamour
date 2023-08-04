import {MouseEvent, TouchEvent} from 'react'
import {useGetState} from 'app/_common/components/range-slider/range-slider.hook'
import {calcValue} from 'app/_common/components/range-slider/range-slider.hook'

export const trackDown = (state: ReturnType<typeof useGetState> & {event: MouseEvent | TouchEvent}) => {
    const {elemsRef, props, event, stateRef} = state
    const {onChange, defMin, defMax, valuesRef, onMouseDown} = props

    event.preventDefault()

    const {clickX, leftThumbX, rightThumbX, thumbHalfWidth, calcValues} = getValues(state)

    let active: 'min' | 'max'

    const leftDistance = Math.abs(clickX - leftThumbX)
    const rigtDistance = Math.abs(clickX - rightThumbX)

    let deviation

    if (leftDistance < rigtDistance) {
        active = 'min'
    } else {
        active = 'max'
    }

    const newValue = calcValue({...calcValues, targetX: clickX - thumbHalfWidth})

    valuesRef.current[active] = newValue
    stateRef.current.active = active
    stateRef.current[active].diff = thumbHalfWidth

    onChange({...valuesRef.current})

    if (onMouseDown) {
        onMouseDown()
    }
}

const getValues = (state: ReturnType<typeof useGetState> & {event: MouseEvent | TouchEvent}) => {
    const {elemsRef, event, props: {defMin, defMax}} = state

    const trackRect = elemsRef.current.track?.getBoundingClientRect()
    const startX = trackRect?.x as number
    const trackWidth = trackRect?.width as number

    const leftRect = elemsRef.current.min?.getBoundingClientRect()
    const thumbWidth = leftRect?.width as number
    const thumbHalfWidth = thumbWidth / 2
    const leftThumbX = leftRect?.x as number

    const rightThumbX = elemsRef.current.max?.getBoundingClientRect().x as number

    let clickX
    const mobileEvent = event as TouchEvent
    const descEvent = event as MouseEvent

    if (mobileEvent.touches) {
        clickX = mobileEvent.touches[0].clientX
    } else {
        clickX = descEvent.clientX
    }

    const calcValues = {defMin, defMax, startX, trackWidth, thumbWidth}

    return {clickX, leftThumbX, rightThumbX, thumbHalfWidth, calcValues}
}
